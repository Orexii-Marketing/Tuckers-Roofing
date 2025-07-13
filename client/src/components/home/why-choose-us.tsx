import { Medal, DollarSign, CalendarCheck, Handshake } from "lucide-react";
import tuckersRoofingImage from "@assets/Black Minimalist Real Estate(Desktop Wallpaper)_1752309681298.png";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Medal className="h-6 w-6 text-primary" />,
      title: "Expert Craftsmanship",
      description: "Our skilled team delivers exceptional quality on every project, large or small."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: "Competitive Pricing",
      description: "Fair, transparent pricing with detailed estimates and no hidden costs."
    },
    {
      icon: <CalendarCheck className="h-6 w-6 text-primary" />,
      title: "On-Time Completion",
      description: "We respect your schedule and complete projects on time, every time."
    },
    {
      icon: <Handshake className="h-6 w-6 text-primary" />,
      title: "Customer Service",
      description: "Dedicated support throughout your project and beyond completion."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Tucker's Roofing?</h2>
            <p className="text-lg text-gray-200 mb-8">
              With over 15 years of experience in the construction industry, we've built our reputation on 
              quality workmanship, reliable service, and customer satisfaction.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center mr-4">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-200">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <img
              src={tuckersRoofingImage}
              alt="Tucker's Roofing - Comprehensive Construction Services"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
