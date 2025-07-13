import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import kitchenRemodelImage from "@assets/kitchen remodel_1752137362695.jpg";
import homeAdditionImage from "@assets/Home additions_PhotoGrid_1752138191582.png";
import roofReplacementImage from "@assets/roof replacement images_1752309817959.jpg";

const ProjectsGallery = () => {
  const projects = [
    {
      image: roofReplacementImage,
      title: "Complete Roof Replacement",
      description: "Professional roof replacement with quality materials and expert installation."
    },
    {
      image: kitchenRemodelImage,
      title: "Kitchen Remodel",
      description: "Complete kitchen renovation with custom cabinetry and quartz countertops."
    },
    {
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Bathroom Renovation",
      description: "Modern bathroom update with premium fixtures and tile work."
    },
    {
      image: homeAdditionImage,
      title: "Home Addition",
      description: "Modern glass extension with seamless indoor-outdoor living integration."
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Commercial Project",
      description: "Office building renovation with modern exterior updates."
    },
    {
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Siding Installation",
      description: "Complete exterior siding replacement with insulation upgrade."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent completed projects showcasing our quality workmanship and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery">
            <Button className="bg-primary text-white hover:bg-accent text-lg px-8 py-4">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
