import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Camera, Clock } from "lucide-react";
import { Link } from "wouter";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal immediately when gallery page loads
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Project Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore our completed projects showcasing quality craftsmanship in roofing, 
              remodeling, and construction throughout Southern Illinois & Metro East.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Camera className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're currently organizing our project photos to showcase our quality work. 
              Check back soon to see our completed roofing, remodeling, and construction projects.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-white hover:bg-accent text-lg px-8 py-4">
                Contact Us for Examples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* "Coming Soon" Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-md w-full bg-white rounded-lg p-8 text-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={closeModal}
              className="absolute top-4 right-4"
            >
              <X className="h-5 w-5" />
            </Button>
            
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gallery Under Construction</h3>
            <p className="text-gray-600 mb-6">
              We're currently updating our gallery with our latest project photos. 
              Please check back soon or contact us to see examples of our work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button className="w-full bg-primary hover:bg-accent text-white">
                  Contact Us
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={closeModal}
                className="w-full border-primary text-primary hover:bg-accent hover:text-white"
              >
                Continue Browsing
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;