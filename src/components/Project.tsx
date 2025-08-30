import EcoPackaging from "../assets/projects/p1@4x-100.jpg";
import NatureLogo from "../assets/projects/nature.jpg";
import OrganicBranding from "../assets/projects/p7@4x-100.jpg";

const Projects = () => {
  const projects = [
    { title: "Eco Packaging", img: EcoPackaging },
    { title: "Nature Logo", img: NatureLogo },
    { title: "Organic Branding", img: OrganicBranding },

  ];

  return (
    <section id="projects" className="bg-white py-20 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Judul Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#004643]">
          Our <span className="text-[#FFA726]">Projects</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Beberapa karya terbaik kami dalam membangun brand yang natural dan modern.</p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer aspect-[4/3]">
              {/* Gambar */}
              <img src={project.img} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#004643]/80 flex items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Aksen Background */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFA726]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#004643]/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Projects;
