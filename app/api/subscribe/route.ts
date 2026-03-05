import { NextRequest, NextResponse } from "next/server";
import { sheetsGet, sheetsAppend } from "@/lib/google-sheets";

const SPREADSHEET_ID =
  process.env.GOOGLE_SHEET_ID || "1SEyilU8t9iWmR1kCuT6RTccql3jQGRPYorP9MRQuLbs";
const SHEET_RANGE = "Sheet1!A:B";

function getCredentials() {
  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!keyJson) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY is not set");
  }
  const creds = JSON.parse(keyJson);
  return {
    client_email: creds.client_email as string,
    private_key: creds.private_key as string,
  };
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const credentials = getCredentials();

    // Check for duplicates
    const rows = await sheetsGet(credentials, SPREADSHEET_ID, SHEET_RANGE);
    const alreadySubscribed = rows.some(
      (row) => row[0]?.toLowerCase() === email.toLowerCase()
    );

    if (alreadySubscribed) {
      return NextResponse.json(
        { message: "You're already subscribed!" },
        { status: 200 }
      );
    }

    // Append new subscriber
    const timestamp = new Date().toISOString();
    await sheetsAppend(credentials, SPREADSHEET_ID, SHEET_RANGE, [
      [email, timestamp],
    ]);

    return NextResponse.json({ message: "Subscribed!" }, { status: 200 });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
