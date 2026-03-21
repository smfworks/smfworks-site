'use client';
import { useState } from 'react';

export default function SubscribeButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to start checkout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleSubscribe}
        disabled={loading}
        className="w-full bg-[#00D4FF] hover:bg-[#00B8DB] disabled:bg-[#00D4FF]/50 text-[#001F3F] px-8 py-4 rounded-lg font-bold transition-colors"
      >
        {loading ? 'Redirecting...' : 'Subscribe Now'}
      </button>
      {error && (
        <p className="mt-4 text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
}
