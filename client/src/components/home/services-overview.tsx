import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Hammer, HardHat, Check } from "lucide-react";
import { Link } from "wouter";
import roofingImage from "@assets/Roofing image_1752136168006.png";
import remodelingImage from "@assets/Home remodeling_1752136275724.jpg";
import constructionImage from "@assets/general residential construction_1752136383586.jpg";

const ServicesOverview = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Roofing Services",
      description: "Complete roofing solutions including installation, repair, replacement, and maintenance for all roof types.",
      features: ["Roof Installation", "Roof Repair", "Emergency Services", "Gutter Installation"],
      image: roofingImage,
      link: "/services/roofing"
    },
    {
      icon: <Hammer className="h-8 w-8 text-primary" />,
      title: "Home Remodeling",
      description: "Transform your living spaces with our expert remodeling services from kitchens to complete home makeovers.",
      features: ["Kitchen Remodeling", "Bathroom Renovation", "Room Additions", "Basement Finishing"],
      image: remodelingImage,
      link: "/services/remodeling"
    },
    {
      icon: <HardHat className="h-8 w-8 text-primary" />,
      title: "General Construction",
      description: "Comprehensive construction services for residential and commercial projects of all sizes and complexities.",
      features: ["New Construction", "Commercial Projects", "Siding & Exterior", "Custom Builds"],
      image: constructionImage,
      link: "/services/construction"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From roofing repairs to complete home remodels, we provide comprehensive construction services to meet all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group bg-bg-light overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.link}>
                  <Button className="w-full bg-primary text-white hover:bg-accent">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
