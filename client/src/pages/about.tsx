import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tag, Shield, Star, Users } from "lucide-react";
import { Link } from "wouter";
import tuckersRoofingImage from "@assets/Tuckers Roofing_1752136853018.png";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Emergency Service" }
  ];

  const certifications = [
    { icon: <Tag className="h-6 w-6 text-primary" />, title: "Licensed Contractor" },
    { icon: <Shield className="h-6 w-6 text-primary" />, title: "Fully Insured" },
    { icon: <Star className="h-6 w-6 text-primary" />, title: "A+ BBB Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Tucker's Roofing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for professional roofing, remodeling, and construction services. 
              Building excellence for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={tuckersRoofingImage}
                alt="Tucker's Roofing - Professional Construction Services"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, Tucker's Roofing has been serving homeowners and businesses with 
                reliable, high-quality construction services. Our commitment to excellence and customer 
                satisfaction has made us a trusted name in the industry.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We specialize in roofing, remodeling, and general construction, bringing expertise and 
                professionalism to every project. Our team is licensed, insured, and dedicated to 
                delivering results that exceed expectations.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center bg-bg-light px-4 py-2 rounded-full">
                    {cert.icon}
                    <span className="text-sm font-medium ml-2">{cert.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our skilled professionals are dedicated to providing exceptional service and quality craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Project Management</h3>
                <p className="text-gray-600">Experienced project managers ensure your project stays on schedule and within budget.</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Skilled Craftsmen</h3>
                <p className="text-gray-600">Our skilled tradespeople bring years of experience and attention to detail to every job.</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
                <p className="text-gray-600">Dedicated customer service team to support you throughout your project and beyond.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the Tucker's Roofing difference. Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                Get Free Consultation
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
