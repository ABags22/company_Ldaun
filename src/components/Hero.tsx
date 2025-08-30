import Person from "../assets/succes.png";

const Hero = () => {
  return (
    <section id="home" className="bg-[#004643] overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between w-full gap-10 pt-20 md:pt-28 mt-10 md:mt-16">
        {/* Konten Kiri */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left z-20 mb-16 md:mb-28">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-xl">
            Build Your <span className="text-[#FFA726]">Nature Brand</span> in a Unique Way
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-lg">Kami membantu menciptakan identitas merek yang natural, modern, dan eco-friendly agar produkmu tampil beda dan mudah diingat.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#services" className="px-6 py-3 bg-white text-[#004643] font-semibold rounded-lg shadow hover:bg-gray-100 transition">
              Get Started
            </a>
            <a href="#about" className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Learn More
            </a>
          </div>
        </div>

        {/* Gambar Kanan */}
        <div className="flex-1 relative ">
          {/* Lingkaran background */}
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full bg-white/10 z-10"></div>

          {/* Person */}
          <img src={Person} alt="Nature Branding" className="absolute bottom-[62px] right-0 left-0 mx-auto z-20 w-auto max-h-[950px] md:max-h-[1200px] object-contain lg:scale-150" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
