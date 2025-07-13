import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Building, Truck, Users } from "lucide-react";
import { Link } from "wouter";
import { SEOHead, generateServiceStructuredData, generateFAQStructuredData } from "@/components/seo/seo-head";

const ConstructionServices = () => {
  const faqs = [
    {
      question: "What types of construction projects do you handle?",
      answer: "We handle residential and commercial construction including new builds, additions, siding, decks, and custom structures. Each project is tailored to your specific needs."
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Yes, we manage all necessary permits and coordinate with local building officials for required inspections throughout the construction process."
    },
    {
      question: "How long do construction projects typically take?",
      answer: "Project timelines vary based on scope. New construction takes 3-6 months, room additions 4-8 weeks, and smaller projects like decks 1-2 weeks."
    },
    {
      question: "Are you licensed for commercial construction?",
      answer: "Yes, we are licensed and insured for both residential and commercial construction projects throughout Southern Illinois."
    }
  ];

  const services = [
    {
      title: "New Construction",
      description: "Complete new home construction from foundation to finish with quality materials and craftsmanship.",
      features: ["Custom Home Building", "Foundation Work", "Framing", "Complete Build-Out"]
    },
    {
      title: "Commercial Projects",
      description: "Professional commercial construction services for office buildings, retail spaces, and warehouses.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Tenant Improvements"]
    },
    {
      title: "Siding & Exterior",
      description: "Exterior siding installation and repair to protect and beautify your property.",
      features: ["Vinyl Siding", "Fiber Cement", "Wood Siding", "Exterior Trim"]
    },
    {
      title: "Custom Builds",
      description: "Specialized construction services for unique projects and custom requirements.",
      features: ["Deck Construction", "Garage Building", "Sheds & Outbuildings", "Specialty Structures"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="General Construction Services | Tucker's Roofing & Construction"
        description="Professional construction services in Southern Illinois. New builds, commercial projects, siding, custom structures. Licensed contractors with 15+ years experience. Free estimates."
        keywords="general construction, new construction, commercial construction, siding installation, custom builds, Southern Illinois contractor, licensed builder"
        canonical="https://tuckersroofing.com/services/construction"
        type="service"
        structuredData={generateServiceStructuredData(
          "General Construction Services",
          "Complete construction solutions including new builds, commercial projects, siding installation, and custom structures for residential and commercial properties in Southern Illinois."
        )}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              General Construction Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive construction services for residential and commercial projects. 
              Quality craftsmanship and professional results.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-secondary hover:bg-accent hover:text-white text-lg px-8 py-4">
                Get Construction Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Construction Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional construction services for projects of all sizes and complexities.
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
                        <Check className="h-5 w-5 text-secondary mr-3" />
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

      {/* Capabilities Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Construction Capabilities</h2>
            <p className="text-xl text-gray-600">Equipped to handle projects of all sizes with professional expertise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Residential & Commercial</h3>
              <p className="text-gray-600">We handle both residential and commercial construction projects with equal expertise.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Equipment Fleet</h3>
              <p className="text-gray-600">Modern equipment and tools to complete any construction project efficiently.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Skilled Team</h3>
              <p className="text-gray-600">Experienced construction professionals dedicated to quality workmanship.</p>
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
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs and get a detailed project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-white text-lg px-8 py-4">
                Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-accent hover:text-white text-lg px-8 py-4">
              Call Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionServices;
