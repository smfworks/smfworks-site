/**
 * Lightweight Google Sheets API client using raw fetch.
 * Uses a service account JWT for auth — no googleapis dependency needed.
 */

interface ServiceAccountCredentials {
  client_email: string;
  private_key: string;
}

/** Create a signed JWT for Google API auth */
async function createJWT(credentials: ServiceAccountCredentials): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const encode = (obj: object) =>
    Buffer.from(JSON.stringify(obj)).toString("base64url");

  const signingInput = `${encode(header)}.${encode(payload)}`;

  // Import the private key
  const pemKey = credentials.private_key.replace(/\\n/g, "\n");
  const keyData = pemKey
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s/g, "");

  const binaryKey = Buffer.from(keyData, "base64");
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    Buffer.from(signingInput)
  );

  const sigB64 = Buffer.from(signature).toString("base64url");
  return `${signingInput}.${sigB64}`;
}

/** Exchange JWT for an access token */
async function getAccessToken(credentials: ServiceAccountCredentials): Promise<string> {
  const jwt = await createJWT(credentials);
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Google auth failed: ${err}`);
  }
  const data = await res.json();
  return data.access_token;
}

/** Get all rows from a sheet range */
export async function sheetsGet(
  credentials: ServiceAccountCredentials,
  spreadsheetId: string,
  range: string
): Promise<string[][]> {
  const token = await getAccessToken(credentials);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Sheets GET failed: ${err}`);
  }
  const data = await res.json();
  return data.values || [];
}

/** Append a row to a sheet */
export async function sheetsAppend(
  credentials: ServiceAccountCredentials,
  spreadsheetId: string,
  range: string,
  values: string[][]
): Promise<void> {
  const token = await getAccessToken(credentials);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Sheets APPEND failed: ${err}`);
  }
}
