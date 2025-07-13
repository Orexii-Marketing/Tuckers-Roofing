import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Phone, Clock, Star, Award, Home } from "lucide-react";
import { Link } from "wouter";
import { SEOHead } from "@/components/seo/seo-head";
import { GoogleAdsLandingPage } from "@/components/seo/google-ads-optimization";
import ContactForm from "@/components/forms/contact-form";
import { trackServicePageView, trackCTAClick, trackPhoneClick } from "@/lib/analytics";
import remodelingImage from "@assets/kitchen remodel_1752137362695.jpg";

const AdsRemodelingLanding = () => {
  useEffect(() => {
    trackServicePageView('remodeling');
  }, []);

  const services = [
    "Kitchen remodeling & renovation",
    "Bathroom renovations", 
    "Home additions & extensions",
    "Basement finishing",
    "Flooring installation",
    "Interior & exterior painting"
  ];

  const benefits = [
    "Licensed & insured contractors",
    "15+ years of remodeling experience", 
    "Quality materials & craftsmanship",
    "Detailed project planning",
    "Transparent pricing",
    "Customer satisfaction guarantee"
  ];

  return (
    <GoogleAdsLandingPage service="remodeling">
      <SEOHead 
        title="Home Remodeling Services | Kitchen & Bath Renovation | Tucker's Construction"
        description="Transform your home with expert remodeling services. Kitchen renovations, bathroom remodels, home additions. Licensed contractors in Southern Illinois. Free estimates!"
        keywords="home remodeling, kitchen renovation, bathroom remodel, home addition, Southern Illinois, Metro East"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Home
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Expert remodeling services • Kitchen & bath specialists • Licensed & insured
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-xl px-10 py-6"
              onClick={() => {
                trackCTAClick('get_estimate', 'ads_hero', 'remodeling');
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

      {/* Services Showcase */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={remodelingImage} 
                alt="Beautiful kitchen remodel by Tucker's Construction"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg">
                <div className="font-bold">FREE</div>
                <div className="text-sm">Consultation</div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">Complete Remodeling Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                From kitchen makeovers to whole-home renovations, we bring your vision to life 
                with expert craftsmanship and attention to detail.
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
                  trackCTAClick('learn_more', 'services_section', 'remodeling');
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Your Project Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Tucker's for Your Remodel?</h2>
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

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Remodeling Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">Free in-home consultation to discuss your vision and needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Design & Planning</h3>
              <p className="text-gray-600">Detailed plans and 3D renderings of your new space</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Construction</h3>
              <p className="text-gray-600">Professional construction with quality materials</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Final Walkthrough</h3>
              <p className="text-gray-600">Quality inspection and project completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Start Your Remodeling Project</h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Ready to transform your home? Get a free consultation and estimate for your remodeling project.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8">
            Don't wait - start planning your dream remodel today with Southern Illinois' trusted contractors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
              onClick={() => {
                trackCTAClick('final_cta_form', 'bottom_cta', 'remodeling');
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Free Consultation
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

export default AdsRemodelingLanding;