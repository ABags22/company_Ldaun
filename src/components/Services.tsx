import { Leaf, Package, Globe, Sun } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Leaf size={48} color="#004643" strokeWidth={2} />,
      title: "Brand Identity",
      desc: "Membuat logo, warna, dan elemen visual yang natural dan mudah diingat.",
    },
    {
      icon: <Package size={48} color="#004643" strokeWidth={2} />,
      title: "Packaging Design",
      desc: "Desain kemasan eco-friendly yang modern dan menarik perhatian pelanggan.",
    },
    {
      icon: <Globe size={48} color="#004643" strokeWidth={2} />,
      title: "Digital Branding",
      desc: "Website & media sosial dengan nuansa natural dan modern.",
    },
    {
      icon: <Sun size={48} color="#004643" strokeWidth={2} />,
      title: "Sustainable Strategy",
      desc: "Konsultasi strategi brand agar selaras dengan tren green lifestyle.",
    },
  ];

  return (
    <section id="services" className="bg-white py-20 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Judul Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#004643]">
          Our <span className="text-[#FFA726]">Services</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Kami menyediakan berbagai layanan untuk membangun identitas merek yang natural, modern, dan eco-friendly.</p>

        {/* Grid Services */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden cursor-pointer">
              {/* Konten Utama */}
              <div className="flex flex-col items-center justify-center h-60 p-6 transition">
                <div className="text-5xl">{service.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-[#004643]">{service.title}</h3>
              </div>

              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-[#004643]/95 flex flex-col items-center justify-center text-center px-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="mb-4">{service.desc}</p>
                <span className="inline-block px-4 py-2 text-sm font-semibold bg-[#FFA726] text-[#004643] rounded-lg shadow-md">Learn More</span>
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

export default Services;
