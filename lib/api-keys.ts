/**
 * In-memory API key store. In production, replace with a database.
 *
 * Keys are prefixed with `smf_` and are SHA-256 hashes for lookup.
 * The full key is only shown once at creation time.
 */

import { createHash, randomBytes } from "crypto";

interface ApiKeyRecord {
  id: string;
  user_sub: string;
  name: string;
  key_hash: string;      // SHA-256 of full key for lookup
  key_prefix: string;    // First 8 chars for display: smf_abc1...
  created_at: string;
  last_used: string | null;
  revoked: boolean;
}

// In-memory store — replace with DB in production
const keys = new Map<string, ApiKeyRecord>();

export function generateApiKey(userSub: string, name: string): { id: string; key: string } {
  const raw = randomBytes(32).toString("hex");
  const fullKey = `smf_${raw}`;
  const keyHash = createHash("sha256").update(fullKey).digest("hex");
  const id = `key_${randomBytes(8).toString("hex")}`;

  const record: ApiKeyRecord = {
    id,
    user_sub: userSub,
    name,
    key_hash: keyHash,
    key_prefix: fullKey.slice(0, 8) + "...",
    created_at: new Date().toISOString(),
    last_used: null,
    revoked: false,
  };

  keys.set(id, record);
  return { id, key: fullKey };
}

export function listApiKeys(userSub: string): Omit<ApiKeyRecord, "key_hash">[] {
  return Array.from(keys.values())
    .filter((k) => k.user_sub === userSub && !k.revoked)
    .map(({ key_hash, ...rest }) => rest); // Never expose hash
}

export function revokeApiKey(userSub: string, keyId: string): boolean {
  const record = keys.get(keyId);
  if (!record || record.user_sub !== userSub) return false;
  record.revoked = true;
  return true;
}

export function validateApiKey(fullKey: string): ApiKeyRecord | null {
  const hash = createHash("sha256").update(fullKey).digest("hex");
  for (const record of keys.values()) {
    if (record.key_hash === hash && !record.revoked) {
      record.last_used = new Date().toISOString();
      return record;
    }
  }
  return null;
}

export type { ApiKeyRecord };