import { Button } from "@/components/ui/button";
import { Shield, Clock, Award } from "lucide-react";
import { Link } from "wouter";
import roofReplacementImage from "@assets/roof replacement images_1752137065102.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${roofReplacementImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Company Name Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-wide">
            Tucker's Roofing and Construction
          </h1>
          <div className="h-1 w-32 bg-light-blue mx-auto mb-4"></div>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Professional Roofing & Construction Services
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Expert roofing, remodeling, and construction solutions with over 15 years of experience. 
          Licensed, insured, and trusted by homeowners.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-accent text-white text-lg px-8 py-4">
              Get Free Estimate
            </Button>
          </Link>
          <Link href="/gallery">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-white text-lg px-8 py-4"
            >
              View Our Work
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <Shield className="h-12 w-12 mb-4 text-light-blue mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
            <p>Fully certified with comprehensive insurance coverage</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <Clock className="h-12 w-12 mb-4 text-light-blue mx-auto" />
            <h3 className="text-xl font-semibold mb-2">15+ Years Experience</h3>
            <p>Proven track record of quality craftsmanship</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <Award className="h-12 w-12 mb-4 text-light-blue mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
            <p>100% satisfaction guarantee on all projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
