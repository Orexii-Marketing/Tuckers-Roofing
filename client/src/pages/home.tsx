import Hero from "@/components/home/hero";
import ServicesOverview from "@/components/home/services-overview";
import WhyChooseUs from "@/components/home/why-choose-us";
import ProjectsGallery from "@/components/home/projects-gallery";
import NewsletterSignup from "@/components/home/newsletter-signup";
import { SEOHead } from "@/components/seo/seo-head";
import { localBusinessSchema, organizationSchema } from "@/components/seo/local-business-schema";

const Home = () => {
  return (
    <div>
      <SEOHead 
        title="Tucker's Roofing & Construction | Professional Roofing, Remodeling & Construction Services in Southern Illinois"
        description="Tucker's Roofing & Construction provides expert roofing, home remodeling, and construction services in Southern Illinois. Licensed, insured, and trusted by homeowners for 15+ years. Free estimates available."
        keywords="Tucker's Roofing, roofing contractor Southern Illinois, construction services, home remodeling, roof repair, roof installation, licensed contractor Metro East"
        canonical="https://tuckersroofing.com/"
        type="website"
        structuredData={localBusinessSchema}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <ProjectsGallery />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
