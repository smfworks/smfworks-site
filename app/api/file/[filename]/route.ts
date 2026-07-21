import { NextRequest, NextResponse } from 'next/server';
import { createHmac, timingSafeEqual } from 'crypto';
import { promises as fs } from 'fs';
import path from 'path';

const DOWNLOADS_DIR = process.env.BOOK_DOWNLOADS_DIR || path.join(/*turbopackIgnore: true*/ process.cwd(), 'downloads');

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json({ error: 'Missing token' }, { status: 403 });
  }

  const [expiresAtStr, signature] = token.split(':');
  if (!expiresAtStr || !signature) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }

  const expiresAt = parseInt(expiresAtStr, 10);
  if (Number.isNaN(expiresAt) || Date.now() / 1000 > expiresAt) {
    return NextResponse.json({ error: 'Download link expired' }, { status: 403 });
  }

  const secret = process.env.DOWNLOAD_TOKEN_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  const payload = `${filename}:${expiresAt}`;
  const expected = createHmac('sha256', secret).update(payload).digest('hex');

  try {
    if (!timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }

  // Prevent directory traversal.
  const safeFilename = path.basename(filename);
  const filePath = path.join(DOWNLOADS_DIR, safeFilename);
  const resolvedFile = path.resolve(filePath);
  const resolvedDir = path.resolve(DOWNLOADS_DIR);

  if (!resolvedFile.startsWith(resolvedDir)) {
    return NextResponse.json({ error: 'Invalid file' }, { status: 403 });
  }

  try {
    const fileBuffer = await fs.readFile(resolvedFile);
    const contentType = getContentType(safeFilename);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${safeFilename}"`,
        'Cache-Control': 'private, no-store',
      },
    });
  } catch (err) {
    console.error('File download error:', err);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}

function getContentType(filename: string): string {
  if (filename.toLowerCase().endsWith('.pdf')) return 'application/pdf';
  if (filename.toLowerCase().endsWith('.epub')) return 'application/epub+zip';
  return 'application/octet-stream';
}
