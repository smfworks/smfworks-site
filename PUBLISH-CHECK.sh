#!/bin/bash
# Publish verification script - run after deploying
set -e

echo "=== SMF Works Publish Verification ==="
echo ""

# Check blog post
echo "1. Checking blog post..."
BLOG_SLUG="${1:-ai-vault-open-road-april-2026}"
BLOG_URL="https://smfworks.com/blog/$BLOG_SLUG"
if curl -sf "$BLOG_URL" | grep -q "$BLOG_SLUG"; then
    echo "   ✅ Blog post LIVE: $BLOG_URL"
else
    echo "   ❌ Blog post FAILED: $BLOG_URL"
    echo "   Trying blog index..."
    if curl -sf "https://smfworks.com/blog" | grep -q "$BLOG_SLUG"; then
        echo "   ⚠️  Post found in index but not at direct URL"
    else
        echo "   ❌ Post NOT found anywhere"
    fi
fi
echo ""

# Check The Edge post  
echo "2. Checking The Edge post..."
EDGE_SLUG="${2:-inside-the-room}"
EDGE_URL="https://smfworks.com/the-edge/$EDGE_SLUG"
if curl -sf "$EDGE_URL" | grep -q "$EDGE_SLUG"; then
    echo "   ✅ Edge post LIVE: $EDGE_URL"
else
    echo "   ❌ Edge post FAILED: $EDGE_URL"
fi
echo ""

# Check for build errors in recent deploys
echo "3. Checking Vercel deploy status..."
vercel ls 2>/dev/null | grep -E "● Ready|● Error" | head -5
echo ""

echo "=== Done ==="
