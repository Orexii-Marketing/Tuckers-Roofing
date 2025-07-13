import ContactForm from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your Free Estimate
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Contact us today for a free, no-obligation estimate. 
              We'll work with you to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Phone</h4>
                      <p className="text-gray-300">(618) 779-2779</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">info@tuckersroofing.com</p>
                      <p className="text-gray-300">Rico@tuckersroofing.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Service Area</h4>
                      <p className="text-gray-300">Southern Illinois & Metro East</p>
                      <p className="text-gray-300">Surrounding areas</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Business Hours</h4>
                      <p className="text-gray-300">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-300">Emergency Services: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-white">Emergency Services</h4>
                  <p className="text-gray-300 mb-4">
                    Storm damage? Roof leak? We provide 24/7 emergency repair services to protect your property.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Emergency Hotline
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve the following areas with our professional construction services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Primary Service Area</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Your City</li>
                <li>Neighboring Town</li>
                <li>Adjacent City</li>
                <li>Nearby Community</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Extended Service Area</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Surrounding County</li>
                <li>Regional Areas</li>
                <li>Metropolitan Area</li>
                <li>Suburban Communities</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Special Projects</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Commercial Projects</li>
                <li>Large Residential</li>
                <li>Emergency Services</li>
                <li>Custom Requests</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
