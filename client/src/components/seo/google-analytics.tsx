import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  trackingId?: string;
}

export const GoogleAnalytics = ({ trackingId }: GoogleAnalyticsProps) => {
  useEffect(() => {
    if (!trackingId) return;

    // Enhanced Google Analytics setup for Google Ads optimization
    const script = document.createElement('script');
    script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      gtag('config', '${trackingId}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        // Enhanced ecommerce for better ad attribution
        enhanced_conversions: true,
        // Custom dimensions for ad optimization
        custom_map: {
          'dimension1': 'service_type',
          'dimension2': 'lead_source', 
          'dimension3': 'ad_campaign',
          'dimension4': 'user_intent',
          'dimension5': 'page_type'
        }
      });

      // Set up enhanced conversions for Google Ads
      gtag('config', '${trackingId}', {
        allow_enhanced_conversions: true
      });
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [trackingId]);

  return null;
};

// Google Search Console verification
export const GoogleSearchConsoleVerification = ({ verificationCode }: { verificationCode?: string }) => {
  if (!verificationCode) return null;
  
  return (
    <meta name="google-site-verification" content={verificationCode} />
  );
};

// Article structured data for blog content
export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article", 
  "headline": article.headline,
  "description": article.description,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "image": article.image,
  "publisher": {
    "@type": "Organization",
    "name": "Tucker's Roofing & Construction",
    "logo": {
      "@type": "ImageObject", 
      "url": "https://tuckers-roofing.com/logo.png"
    }
  }
});

// Enhanced web vitals tracking for Google Ads quality score
export const trackWebVitals = () => {
  useEffect(() => {
    // Track Core Web Vitals for Google Ads quality scoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          window.gtag && window.gtag('event', 'lcp', {
            event_category: 'web_vitals',
            value: Math.round(entry.startTime),
            non_interaction: true
          });
        }
        
        if (entry.entryType === 'first-input') {
          window.gtag && window.gtag('event', 'fid', {
            event_category: 'web_vitals', 
            value: Math.round(entry.processingStart - entry.startTime),
            non_interaction: true
          });
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });

    // Track Cumulative Layout Shift
    let cumulativeLayoutShift = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          cumulativeLayoutShift += entry.value;
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Send CLS when page unloads
    const sendCLS = () => {
      window.gtag && window.gtag('event', 'cls', {
        event_category: 'web_vitals',
        value: Math.round(cumulativeLayoutShift * 1000),
        non_interaction: true
      });
    };

    window.addEventListener('beforeunload', sendCLS);

    return () => {
      observer.disconnect();
      clsObserver.disconnect();
      window.removeEventListener('beforeunload', sendCLS);
    };
  }, []);

  return null;
};