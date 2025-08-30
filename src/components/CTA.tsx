import CtaPerson from "../assets/astonished-happy-asian-girl-found-awesome-best-deal-showing-it-you-pointing-finger-upper-left-corner-advertisement-smiling-amazed-touching-cheek-flushed-surprised-white-wall.jpg";
import LeafDeco from "../assets/tan_trans.png"; // siluet daun transparan

const CTA = () => {
  return (
    <section className="relative py-20 bg-[#f8fdf9] overflow-hidden">
      {/* Siluet daun background */}
      <img src={LeafDeco} alt="Leaf Deco" className="absolute top-10 left-0 w-48 opacity-20 rotate-[-15deg] -z-10" />
      <img src={LeafDeco} alt="Leaf Deco" className="absolute bottom-10 right-0 w-56 opacity-20 rotate-[25deg] -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Gambar Orang */}
        <div className="flex justify-center">
          <div className="relative">
            <img src={CtaPerson} alt="CTA Person" className="w-72 h-72 object-cover rounded-full border-8 border-[#004643] shadow-xl" />
            {/* Bingkai luar */}
            <div className="absolute inset-0 rounded-full border-4 border-[#FFA726] animate-pulse"></div>
          </div>
        </div>

        {/* Box CTA */}
        <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-10 text-center md:text-left relative">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004643]">
            Ready to <span className="text-[#FFA726]">Grow</span> Your Brand?
          </h2>
          <p className="mt-4 text-gray-700 max-w-lg">Bangun identitas brand Anda bersama tim kami yang berpengalaman dalam desain, branding, dan digital strategy. Wujudkan bisnis yang lebih natural, modern, dan berdampak.</p>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <a href="#contact" className="bg-[#004643] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#00352f] transition">
              Hubungi Kami
            </a>
            <a href="#projects" className="bg-[#FFA726] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#e68a00] transition">
              Lihat Project
            </a>
          </div>

          {/* Ornamen daun kecil */}
          <img src={LeafDeco} alt="Leaf small" className="absolute -top-6 -right-6 w-16 opacity-40" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
