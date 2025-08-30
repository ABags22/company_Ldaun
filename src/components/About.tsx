const About = () => {
  return (
    <section id="about" className="bg-white py-20 relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Konten Kiri */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004643]">
            About <span className="text-[#FFA726]">Us</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-lg">Kami percaya setiap merek bisa tumbuh secara alami. Dengan pendekatan kreatif dan ramah lingkungan, kami membantu brand tampil unik sekaligus mendukung keberlanjutan.</p>
          <p className="mt-4 text-gray-600 max-w-lg">Fokus kami adalah menciptakan identitas yang tidak hanya modern, tapi juga selaras dengan nilai eco-friendly agar lebih mudah diingat.</p>
        </div>

        {/* Box Hijau */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#004643] rounded-2xl p-6 text-white flex flex-col items-center justify-center shadow-lg">
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-sm mt-2">Brand Nature Terbantu</p>
          </div>
          <div className="bg-[#004643] rounded-2xl p-6 text-white flex flex-col items-center justify-center shadow-lg">
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-sm mt-2">Eco-Friendly Design</p>
          </div>
          <div className="bg-[#004643] rounded-2xl p-6 text-white flex flex-col items-center justify-center shadow-lg col-span-2">
            <h3 className="text-3xl font-bold">5+ Tahun</h3>
            <p className="text-sm mt-2">Pengalaman di Branding</p>
          </div>
        </div>
      </div>

      {/* Aksen Background */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFA726]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#004643]/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default About;
