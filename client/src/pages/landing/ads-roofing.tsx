import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Phone, Clock, Star, Award } from "lucide-react";
import { Link } from "wouter";
import { SEOHead } from "@/components/seo/seo-head";
import { GoogleAdsLandingPage } from "@/components/seo/google-ads-optimization";
import ContactForm from "@/components/forms/contact-form";
import { trackServicePageView, trackCTAClick, trackPhoneClick } from "@/lib/analytics";
import roofingImage from "@assets/roof replacement images_1752309817959.jpg";

const AdsRoofingLanding = () => {
  useEffect(() => {
    trackServicePageView('roofing');
  }, []);

  const benefits = [
    "Free detailed estimates",
    "Licensed & insured professionals", 
    "15+ years of experience",
    "Emergency repair services",
    "Quality materials & warranties",
    "Local Southern Illinois company"
  ];

  const services = [
    "Roof replacement & installation",
    "Storm damage repairs", 
    "Leak detection & repair",
    "Gutter installation & cleaning",
    "Roof inspections",
    "Insurance claim assistance"
  ];

  return (
    <GoogleAdsLandingPage service="roofing">
      <SEOHead 
        title="Professional Roofing Services | Free Estimates | Tucker's Roofing"
        description="Expert roofing services in Southern Illinois. Free estimates, licensed & insured, 15+ years experience. Emergency repairs available. Call (618) 779-2779"
        keywords="roofing contractor, roof repair, roof replacement, Southern Illinois, Metro East, emergency roof repair"
      />

      {/* Hero Section - Optimized for Google Ads */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Roofing Services
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Southern Illinois' trusted roofing contractor • Free estimates • Licensed & insured
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-xl px-10 py-6"
              onClick={() => {
                trackCTAClick('get_estimate', 'ads_hero', 'roofing');
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Free Estimate
            </Button>
            <Button 
              size="lg" 
              className="bg-secondary text-white hover:bg-opacity-90 text-xl px-10 py-6"
              onClick={() => trackPhoneClick('ads_hero')}
            >
              <a href="tel:+16187792779">Call (618) 779-2779</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Tucker's Roofing?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
                <Check className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Complete Roofing Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                From minor repairs to complete roof replacements, we handle all your roofing needs 
                with professional expertise and quality materials.
              </p>
              
              <div className="space-y-3 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4"
                onClick={() => {
                  trackCTAClick('learn_more', 'services_section', 'roofing');
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule Your Free Estimate
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={roofingImage} 
                alt="Professional roof installation by Tucker's Roofing"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg">
                <div className="font-bold">FREE</div>
                <div className="text-sm">Estimates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Clock className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Emergency Roof Repairs Available</h2>
          <p className="text-xl mb-8">
            Storm damage? Roof leak? We provide 24/7 emergency repair services to protect your home.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 text-xl px-10 py-6"
            onClick={() => trackPhoneClick('emergency_cta')}
          >
            <a href="tel:+16187792779">Call Emergency Line: (618) 779-2779</a>
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get Your Free Roofing Estimate</h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Fill out the form below and we'll contact you within 24 hours to schedule your free, no-obligation estimate.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Don't wait - protect your biggest investment with professional roofing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
              onClick={() => {
                trackCTAClick('final_cta_form', 'bottom_cta', 'roofing');
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Free Estimate
            </Button>
            <Button 
              size="lg" 
              className="bg-secondary text-white hover:bg-opacity-90 text-lg px-8 py-4"
              onClick={() => trackPhoneClick('bottom_cta')}
            >
              <a href="tel:+16187792779">Call (618) 779-2779</a>
            </Button>
          </div>
        </div>
      </section>
    </GoogleAdsLandingPage>
  );
};

export default AdsRoofingLanding;