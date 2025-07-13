import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Home, Wrench, Palette } from "lucide-react";
import { Link } from "wouter";
import { SEOHead, generateServiceStructuredData, generateFAQStructuredData } from "@/components/seo/seo-head";

const RemodelingServices = () => {
  const faqs = [
    {
      question: "How long does a typical remodeling project take?",
      answer: "Kitchen remodels typically take 4-6 weeks, bathrooms 2-3 weeks, and room additions 6-12 weeks depending on scope and complexity."
    },
    {
      question: "Do I need permits for remodeling work?",
      answer: "Many remodeling projects require permits. We handle all permit applications and ensure all work meets local building codes and regulations."
    },
    {
      question: "Can I stay in my home during remodeling?",
      answer: "Most remodeling projects allow you to stay in your home. We work to minimize disruption and maintain access to essential areas whenever possible."
    },
    {
      question: "What's included in your remodeling estimates?",
      answer: "Our estimates include materials, labor, permits, and cleanup. We provide detailed breakdowns so you know exactly what's included in your project cost."
    }
  ];

  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into a beautiful, functional space with custom cabinets, countertops, and modern appliances.",
      features: ["Custom Cabinetry", "Granite & Quartz Countertops", "Appliance Installation", "Flooring & Tile Work"]
    },
    {
      title: "Bathroom Renovation",
      description: "Create your dream bathroom with luxury fixtures, modern tiles, and efficient layouts.",
      features: ["Tile Installation", "Fixture Upgrades", "Shower & Tub Replacement", "Vanity Installation"]
    },
    {
      title: "Room Additions",
      description: "Expand your living space with professional room additions and home extensions.",
      features: ["Bedroom Additions", "Home Office Spaces", "Sunrooms", "Second Story Additions"]
    },
    {
      title: "Basement Finishing",
      description: "Convert your basement into a functional living space with proper insulation and finishing.",
      features: ["Waterproofing", "Insulation", "Flooring Installation", "Electrical & Plumbing"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Home Remodeling Services | Tucker's Roofing & Construction"
        description="Transform your home with professional remodeling services in Southern Illinois. Kitchen, bathroom, room additions & basement finishing. Licensed contractors with 15+ years experience."
        keywords="home remodeling, kitchen remodel, bathroom renovation, room additions, basement finishing, Southern Illinois contractor, home improvement"
        canonical="https://tuckersroofing.com/services/remodeling"
        type="service"
        structuredData={generateServiceStructuredData(
          "Home Remodeling Services",
          "Complete home remodeling solutions including kitchen renovation, bathroom remodeling, room additions, and basement finishing for residential properties in Southern Illinois."
        )}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Home Remodeling Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your home with our expert remodeling services. From kitchen renovations to complete home makeovers.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-accent hover:bg-accent hover:text-white text-lg px-8 py-4">
                Get Remodeling Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Remodeling Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional home remodeling services to enhance your living space and add value to your home.
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
                        <Check className="h-5 w-5 text-accent mr-3" />
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

      {/* Process Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Remodeling Process</h2>
            <p className="text-xl text-gray-600">We follow a proven process to ensure your remodeling project is completed successfully.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design & Planning</h3>
              <p className="text-gray-600">Work with our designers to create the perfect plan for your remodeling project.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Construction</h3>
              <p className="text-gray-600">Our skilled craftsmen bring your vision to life with quality workmanship.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Final Walkthrough</h3>
              <p className="text-gray-600">Complete inspection and walkthrough to ensure everything meets your expectations.</p>
            </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your remodeling project and create a space you'll love for years to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-secondary hover:bg-accent hover:text-white text-lg px-8 py-4">
                Start Your Project
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-accent text-lg px-8 py-4">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemodelingServices;
