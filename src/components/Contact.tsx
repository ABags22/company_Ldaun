import { MapPin, Phone, Mail } from "lucide-react";
import ContactBg from "../assets/contact.jpg";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-cover bg-center py-20" style={{ backgroundImage: `url(${ContactBg})` }}>
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-[#002E2B]/85"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-white z-10 items-start">
        {/* Kolom Kiri */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in <span className="text-[#FFA726]">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-md leading-relaxed">Hubungi kami untuk konsultasi, kerja sama, atau pertanyaan seputar layanan branding dan desain. Kami siap membantu membangun brand Anda menjadi lebih natural dan modern.</p>

          <div className="space-y-4 text-gray-200">
            <p className="flex items-center gap-3">
              <MapPin className="text-[#FFA726]" size={20} />
              Jl. Hijau No. 123, Jakarta
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-[#FFA726]" size={20} />
              +62 812-3456-7890
            </p>
            <p className="flex items-center gap-3">
              <Mail className="text-[#FFA726]" size={20} />
              info@naturebrand.com
            </p>
          </div>
        </div>

        {/* Kolom Kanan - Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nama Anda"
                className="w-full px-4 py-3 rounded-lg bg-white/70 text-gray-900 placeholder-gray-500 
                focus:ring-2 focus:ring-[#FFA726] outline-none transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-3 rounded-lg bg-white/70 text-gray-900 placeholder-gray-500 
                focus:ring-2 focus:ring-[#FFA726] outline-none transition"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Tulis pesan Anda"
                className="w-full px-4 py-3 rounded-lg bg-white/70 text-gray-900 placeholder-gray-500 
                focus:ring-2 focus:ring-[#FFA726] outline-none transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FFA726] hover:bg-[#ff9800] text-white font-semibold 
              py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
