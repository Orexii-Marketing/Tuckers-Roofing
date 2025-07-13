// Enhanced Local Business Schema for Google Search Console
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Tucker's Roofing & Construction",
  "alternateName": "Tucker's Roofing",
  "description": "Professional roofing, remodeling, and construction services in Southern Illinois. Licensed, insured, and trusted by homeowners for over 15 years.",
  "url": "https://tuckersroofing.com",
  "logo": "https://tuckersroofing.com/images/tucker-logo.png",
  "image": [
    "https://tuckersroofing.com/images/roofing-work.jpg",
    "https://tuckersroofing.com/images/remodeling-work.jpg",
    "https://tuckersroofing.com/images/construction-work.jpg"
  ],
  "telephone": "+1-618-779-2779",
  "email": "info@tuckersroofing.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Southern Illinois",
    "addressLocality": "Southern Illinois",
    "addressRegion": "IL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.5816",
    "longitude": "-89.9941"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Illinois"
    },
    {
      "@type": "City",
      "name": "Metro East"
    }
  ],
  "openingHours": "Mo-Fr 08:00-17:00",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Check, Credit Card",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roofing Services",
          "description": "Professional roof installation, repair, and maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Remodeling",
          "description": "Kitchen, bathroom, and home renovation services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "General Construction",
          "description": "New construction and building services"
        }
      }
    ]
  },
  "founder": {
    "@type": "Person",
    "name": "Tucker",
    "jobTitle": "Owner & Contractor"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Tucker's team did an amazing job on our roof replacement. Professional, timely, and excellent quality work."
    }
  ],
  "sameAs": [
    "https://www.facebook.com/tuckersroofing",
    "https://www.instagram.com/tuckersroofing"
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tucker's Roofing & Construction",
  "url": "https://tuckersroofing.com",
  "logo": "https://tuckersroofing.com/images/tucker-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-618-779-2779",
    "contactType": "customer service",
    "availableLanguage": "English",
    "areaServed": "IL"
  }
};