import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import RoofingServices from "@/pages/services/roofing";
import RemodelingServices from "@/pages/services/remodeling";
import ConstructionServices from "@/pages/services/construction";
import AdsRoofingLanding from "@/pages/landing/ads-roofing";
import AdsRemodelingLanding from "@/pages/landing/ads-remodeling";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Gallery from "@/pages/gallery";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { useEffect } from "react";
import { initGA, trackScrollDepth, trackTimeOnPage, trackAdCampaign, trackQualitySignals } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  // Track engagement metrics and ad campaign data
  useEffect(() => {
    const cleanupScroll = trackScrollDepth();
    const cleanupTime = trackTimeOnPage();
    
    // Track ad campaign parameters
    trackAdCampaign();
    
    // Track quality signals for Google Ads
    trackQualitySignals();
    
    return () => {
      cleanupScroll();
      cleanupTime();
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services/roofing" component={RoofingServices} />
          <Route path="/services/remodeling" component={RemodelingServices} />
          <Route path="/services/construction" component={ConstructionServices} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/ads/roofing" component={AdsRoofingLanding} />
          <Route path="/ads/remodeling" component={AdsRemodelingLanding} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
