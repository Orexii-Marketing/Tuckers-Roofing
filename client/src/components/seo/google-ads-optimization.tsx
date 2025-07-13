import { useEffect } from 'react';
import { useLocation } from 'wouter';

// Google Ads Landing Page Optimization Component
export const GoogleAdsOptimization = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Add Google Ads remarketing and conversion optimization scripts
    const addRemarketingScript = () => {
      if (document.querySelector('#google-ads-remarketing')) return;
      
      const script = document.createElement('script');
      script.id = 'google-ads-remarketing';
      script.innerHTML = `
        gtag('config', 'AW-CONVERSION_ID', {
          'custom_parameters': {
            'service_type': '${getServiceType()}',
            'page_type': '${getPageType()}',
            'user_intent': '${getUserIntent()}'
          }
        });
      `;
      document.head.appendChild(script);
    };

    // Add structured data for better ad targeting
    const addBusinessStructuredData = () => {
      if (document.querySelector('#ads-business-data')) return;
      
      const script = document.createElement('script');
      script.id = 'ads-business-data';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Tucker's Roofing & Construction",
        "description": "Professional roofing, remodeling, and construction services in Southern Illinois",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "IL",
          "addressLocality": "Metro East"
        },
        "telephone": "(618) 779-2779",
        "email": "info@tuckersroofing.com",
        "areaServed": [
          "Southern Illinois",
          "Metro East",
          "St. Louis Metro"
        ],
        "serviceType": [
          "Roofing Services",
          "Home Remodeling",
          "General Construction"
        ],
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150+"
        }
      });
      document.head.appendChild(script);
    };

    addRemarketingScript();
    addBusinessStructuredData();
  }, [location]);

  return null;
};

// Helper functions for dynamic ad targeting
const getServiceType = () => {
  const path = window.location.pathname;
  if (path.includes('roofing')) return 'roofing';
  if (path.includes('remodeling')) return 'remodeling';
  if (path.includes('construction')) return 'construction';
  return 'general';
};

const getPageType = () => {
  const path = window.location.pathname;
  if (path === '/') return 'homepage';
  if (path === '/contact') return 'contact';
  if (path.includes('services')) return 'service';
  if (path === '/about') return 'about';
  if (path === '/gallery') return 'gallery';
  return 'other';
};

const getUserIntent = () => {
  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  
  if (path === '/contact' || params.get('intent') === 'contact') return 'ready_to_contact';
  if (path.includes('services')) return 'researching_services';
  if (path === '/gallery') return 'viewing_work';
  if (params.get('gclid')) return 'ad_click';
  return 'browsing';
};

// Landing Page Optimization for Google Ads
interface LandingPageProps {
  service?: 'roofing' | 'remodeling' | 'construction';
  headline?: string;
  subheadline?: string;
  children: React.ReactNode;
}

export const GoogleAdsLandingPage = ({ 
  service, 
  headline, 
  subheadline, 
  children 
}: LandingPageProps) => {
  const urlParams = new URLSearchParams(window.location.search);
  const isFromAd = urlParams.get('gclid') || urlParams.get('utm_source') === 'google';
  
  if (!isFromAd) {
    return <>{children}</>;
  }

  return (
    <div className="ads-optimized-landing">
      <GoogleAdsOptimization />
      
      {/* Ad-specific hero section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {headline || getDefaultHeadline(service)}
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            {subheadline || getDefaultSubheadline(service)}
          </p>
          
          {/* Prominent CTA for ad traffic */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact-form" 
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              onClick={() => window.gtag && window.gtag('event', 'cta_click_ad_landing', {
                event_category: 'ads_conversion',
                service_type: service
              })}
            >
              Get Free Estimate
            </a>
            <a 
              href="tel:+16187792779"
              className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors"
              onClick={() => window.gtag && window.gtag('event', 'phone_click_ad_landing', {
                event_category: 'ads_conversion',
                service_type: service
              })}
            >
              Call (618) 779-2779
            </a>
          </div>
        </div>
      </section>
      
      {/* Trust signals for ad traffic */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-gray-600">Licensed & Insured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">4.9★</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>
      
      {children}
    </div>
  );
};

const getDefaultHeadline = (service?: string) => {
  switch (service) {
    case 'roofing':
      return 'Professional Roofing Services in Southern Illinois';
    case 'remodeling':
      return 'Expert Home Remodeling & Renovation';
    case 'construction':
      return 'Trusted General Construction Contractor';
    default:
      return 'Southern Illinois Construction Experts';
  }
};

const getDefaultSubheadline = (service?: string) => {
  switch (service) {
    case 'roofing':
      return 'Free estimates • Licensed & insured • Emergency repairs available';
    case 'remodeling':
      return 'Transform your home with our expert remodeling services';
    case 'construction':
      return 'Quality construction services for residential and commercial projects';
    default:
      return 'Roofing • Remodeling • Construction • Free Estimates';
  }
};