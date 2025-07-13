// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics and Google Ads
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag with enhanced ecommerce and ads features
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        'dimension1': 'service_type',
        'dimension2': 'lead_source',
        'dimension3': 'ad_campaign',
        'dimension4': 'landing_page'
      },
      // Enhanced conversion tracking for Google Ads
      send_page_view: true,
      anonymize_ip: true,
      // Enable enhanced conversions
      allow_enhanced_conversions: true
    });
    
    // Enhanced conversion tracking
    gtag('config', '${measurementId}', {
      enhanced_conversions: true
    });
  `;
  document.head.appendChild(script2);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  window.gtag('config', measurementId, {
    page_path: url,
    page_title: document.title,
    page_location: window.location.href
  });
};

// Track general events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track conversion events (leads, form submissions) - optimized for Google Ads
export const trackConversion = (eventName: string, conversionData?: {
  service?: string;
  source?: string;
  value?: number;
  transactionId?: string;
}) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  // Standard GA4 conversion event
  window.gtag('event', eventName, {
    event_category: 'conversion',
    service_type: conversionData?.service,
    lead_source: conversionData?.source,
    value: conversionData?.value || 1,
    currency: 'USD',
    transaction_id: conversionData?.transactionId || `txn_${Date.now()}`
  });

  // Google Ads specific conversion tracking
  window.gtag('event', 'conversion', {
    send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Will be configured when Google Ads account is set up
    value: conversionData?.value || 1,
    currency: 'USD',
    transaction_id: conversionData?.transactionId || `txn_${Date.now()}`
  });
};

// Track specific Google Ads conversion actions
export const trackAdsConversion = (conversionAction: string, value: number, service?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const transactionId = `${conversionAction}_${Date.now()}`;
  
  // Enhanced conversion with user data (when available)
  window.gtag('event', 'conversion', {
    send_to: `AW-CONVERSION_ID/${conversionAction}`,
    value: value,
    currency: 'USD',
    transaction_id: transactionId,
    // Enhanced conversion data
    user_data: {
      // These will be populated from form submissions
    }
  });

  // Track in GA4 as well
  trackConversion('ads_conversion', {
    service: service,
    source: 'google_ads',
    value: value,
    transactionId: transactionId
  });
};

// Track form submissions with Google Ads optimization
export const trackFormSubmission = (formType: 'contact' | 'newsletter', service?: string, userData?: {
  email?: string;
  phone?: string;
  firstName?: string;
}) => {
  const conversionValue = formType === 'contact' ? 50 : 10;
  
  // Track standard conversion
  trackConversion('form_submission', {
    service: service,
    source: formType,
    value: conversionValue,
    transactionId: `${formType}_${Date.now()}`
  });
  
  // Track Google Ads conversion with enhanced data
  if (formType === 'contact') {
    trackAdsConversion('CONTACT_FORM_CONVERSION', conversionValue, service);
  } else {
    trackAdsConversion('NEWSLETTER_CONVERSION', conversionValue);
  }
  
  // Enhanced conversion with user data for better attribution
  if (userData && window.gtag) {
    window.gtag('set', 'user_data', {
      email_address: userData.email,
      phone_number: userData.phone,
      first_name: userData.firstName
    });
  }
  
  trackEvent('form_submit', 'engagement', formType);
};

// Track CTA button clicks
export const trackCTAClick = (ctaType: string, location: string, service?: string) => {
  trackEvent('cta_click', 'engagement', `${ctaType}_${location}`, 1);
  
  if (service) {
    trackEvent('service_interest', 'lead_generation', service, 1);
  }
};

// Track phone number clicks with Google Ads optimization
export const trackPhoneClick = (location: string) => {
  const phoneValue = 75; // Phone calls are high-value leads
  
  trackConversion('phone_click', {
    source: 'phone_cta',
    value: phoneValue,
    transactionId: `phone_${location}_${Date.now()}`
  });
  
  // Track as Google Ads conversion
  trackAdsConversion('PHONE_CALL_CONVERSION', phoneValue);
  
  trackEvent('phone_click', 'conversion', location, 1);
};

// Track service page engagement
export const trackServicePageView = (service: string) => {
  trackEvent('service_page_view', 'engagement', service, 1);
  
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    service_type: service
  });
};

// Track gallery interactions
export const trackGalleryInteraction = (action: string, project?: string) => {
  trackEvent(action, 'gallery', project, 1);
};

// Track email clicks
export const trackEmailClick = (location: string) => {
  trackEvent('email_click', 'engagement', location, 1);
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('external_link_click', 'engagement', `${linkText}: ${url}`, 1);
};

// Track scroll depth for engagement measurement
export const trackScrollDepth = () => {
  let maxScroll = 0;
  const trackingThresholds = [25, 50, 75, 100];
  const trackedThresholds = new Set();
  
  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      trackingThresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          trackEvent('scroll', 'engagement', `${threshold}%`, threshold);
        }
      });
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
};

// Track time on page
export const trackTimeOnPage = () => {
  const startTime = Date.now();
  
  const trackTime = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    trackEvent('time_on_page', 'engagement', window.location.pathname, timeSpent);
    
    // Track high engagement for Google Ads optimization
    if (timeSpent > 120) { // 2+ minutes indicates high engagement
      trackEvent('high_engagement', 'quality', window.location.pathname, 1);
    }
  };
  
  // Track when user leaves page
  window.addEventListener('beforeunload', trackTime);
  
  return () => window.removeEventListener('beforeunload', trackTime);
};

// Track ad campaign parameters from URL
export const trackAdCampaign = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');
  const gclid = urlParams.get('gclid');
  
  if (gclid || utmSource === 'google') {
    // Track Google Ads traffic
    trackEvent('ad_traffic', 'acquisition', 'google_ads', 1);
    
    // Set custom dimensions for campaign tracking
    if (window.gtag) {
      window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
        ad_campaign: utmCampaign || 'unknown',
        landing_page: window.location.pathname
      });
    }
  }
  
  return {
    source: utmSource,
    medium: utmMedium,
    campaign: utmCampaign,
    isGoogleAds: !!(gclid || utmSource === 'google')
  };
};

// Track quality metrics for Google Ads optimization
export const trackQualitySignals = () => {
  // Track page load time
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    trackEvent('page_load_time', 'performance', window.location.pathname, Math.round(loadTime));
  });
  
  // Track bounce rate signals
  let hasEngaged = false;
  const engagementEvents = ['click', 'scroll', 'keydown', 'touchstart'];
  
  const markEngaged = () => {
    if (!hasEngaged) {
      hasEngaged = true;
      trackEvent('user_engaged', 'quality', window.location.pathname, 1);
      engagementEvents.forEach(event => {
        window.removeEventListener(event, markEngaged);
      });
    }
  };
  
  engagementEvents.forEach(event => {
    window.addEventListener(event, markEngaged, { once: true });
  });
};