'use client';

import { useEffect } from 'react';

export default function SMFLeadCaptureWidget() {
  useEffect(() => {
    // Only load on client side
    if (typeof window === 'undefined') return;
    
    // Check if already loaded
    if ((window as any).SMFLeadCaptureLoaded) return;
    
    // Configure widget
    (window as any).SMFLeadCapture = {
      apiUrl: process.env.NEXT_PUBLIC_SMF_API_URL || 'http://localhost:5000',
      apiKey: process.env.NEXT_PUBLIC_SMF_API_KEY || '',
      widgetConfig: {
        position: 'bottom-right',
        primaryColor: '#0066CC',
        greeting: "👋 Hi! How can we help you today?",
        placeholder: "Type your message...",
        awayMessage: "We're away right now, but we'll respond ASAP!"
      }
    };
    
    // Load widget script
    const script = document.createElement('script');
    script.src = `${(window as any).SMFLeadCapture.apiUrl}/widget.js`;
    script.async = true;
    script.id = 'smf-lead-capture-widget';
    document.body.appendChild(script);
    
    (window as any).SMFLeadCaptureLoaded = true;
    
    return () => {
      // Cleanup
      const existing = document.getElementById('smf-lead-capture-widget');
      if (existing) existing.remove();
      
      // Remove widget container if exists
      const container = document.getElementById('smf-chat-widget');
      if (container) container.remove();
    };
  }, []);
  
  return null;
}
