import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Phone, Clock } from "lucide-react";
import { Link } from "wouter";
import { SEOHead, generateServiceStructuredData, generateFAQStructuredData } from "@/components/seo/seo-head";
import { useEffect } from "react";
import { trackServicePageView, trackCTAClick, trackPhoneClick } from "@/lib/analytics";

const RoofingServices = () => {
  const faqs = [
    {
      question: "How long does a roof installation take?",
      answer: "Most residential roof installations take 1-3 days, depending on the size and complexity of the project. Weather conditions may affect the timeline."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes, we provide free, detailed estimates for all roofing projects. Our experienced team will assess your roof and provide a comprehensive quote."
    },
    {
      question: "What types of roofing materials do you work with?",
      answer: "We work with all major roofing materials including asphalt shingles, metal roofing, tile, and flat roof systems. We'll help you choose the best option for your home and budget."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Tucker's Roofing is fully licensed and insured. We carry comprehensive liability insurance and workers' compensation to protect you and our team."
    }
  ];

  const services = [
    {
      title: "Roof Installation",
      description: "Complete new roof installation with premium materials and expert craftsmanship.",
      features: ["Asphalt Shingles", "Metal Roofing", "Tile Installation", "Flat Roof Systems"]
    },
    {
      title: "Roof Repair",
      description: "Professional roof repairs to fix leaks, damaged shingles, and structural issues.",
      features: ["Leak Detection", "Shingle Replacement", "Flashing Repair", "Storm Damage"]
    },
    {
      title: "Roof Maintenance",
      description: "Regular maintenance services to extend the life of your roof and prevent issues.",
      features: ["Annual Inspections", "Gutter Cleaning", "Preventive Repairs", "Maintenance Plans"]
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency roof repair services for urgent situations and storm damage.",
      features: ["Storm Response", "Leak Prevention", "Temporary Repairs", "Insurance Claims"]
    }
  ];

  // Track service page view
  useEffect(() => {
    trackServicePageView('roofing');
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Professional Roofing Services | Tucker's Roofing & Construction"
        description="Expert roofing installation, repair, and maintenance in Southern Illinois. Licensed, insured, and trusted for 15+ years. Free estimates available. Call (618) 779-2779."
        keywords="roofing services, roof installation, roof repair, Southern Illinois roofer, licensed roofing contractor, roof replacement, emergency roof repair"
        canonical="https://tuckersroofing.com/services/roofing"
        type="service"
        structuredData={{
          ...generateServiceStructuredData(
            "Professional Roofing Services",
            "Complete roofing solutions including installation, repair, maintenance, and emergency services for residential and commercial properties in Southern Illinois."
          ),
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Roofing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Roof Installation"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Roof Repair"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Emergency Roofing"
                }
              }
            ]
          }
        }}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Roofing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert roofing solutions for residential and commercial properties. 
              Licensed, insured, and trusted by homeowners for over 15 years.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-accent text-lg px-8 py-4"
                onClick={() => trackCTAClick('get_estimate', 'roofing_hero', 'roofing')}
              >
                Get Free Roof Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Roofing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From installations to emergency repairs, we provide comprehensive roofing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Roofing Services?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully certified contractors with comprehensive insurance coverage for your peace of mind.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Service</h3>
              <p className="text-gray-600">24/7 emergency roof repair services for urgent situations and storm damage.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Estimates</h3>
              <p className="text-gray-600">No-obligation free estimates with detailed quotes and transparent pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for your free roofing estimate. Our experts are ready to help with all your roofing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-secondary hover:bg-accent text-lg px-8 py-4"
                onClick={() => trackCTAClick('get_estimate', 'roofing_cta', 'roofing')}
              >
                Get Free Estimate
              </Button>
            </Link>
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-accent text-lg px-8 py-4"
              onClick={() => trackPhoneClick('roofing_cta')}
            >
              <a href="tel:+16187792779">Call (618) 779-2779</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQStructuredData(faqs))
          }}
        />
      </section>
    </div>
  );
};

export default RoofingServices;
