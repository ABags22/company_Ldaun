import { Facebook, Instagram, Twitter, Globe, Phone, Mail, MapPin } from "lucide-react";
import Logo from "../assets/logo.svg?react";

const Footer = () => {
  return (
    <footer className="relative bg-[#004643] text-white pt-16 pb-10">
      {/* Ornamen */}
      <div className="absolute top-10 left-0 w-40 h-40 bg-[#FFA726]/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-white/5 rounded-full blur-3xl -z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 z-10">
        {/* Logo & Deskripsi */}
        <div>
          <div className="flex items-center gap-3">
            {/* Logo putih */}
            <Logo className="w-10 h-10 text-white fill-current" />
            {/* Nama brand */}
            <h3 className="text-2xl font-bold">
              <span className="text-black">Alfan</span>
              <span className="text-[#FFA726]">Bagus</span>
            </h3>
          </div>
          <p className="mt-4 text-gray-200 text-sm leading-relaxed">Membantu Anda membangun identitas digital yang modern, natural, dan ramah lingkungan melalui desain kreatif & teknologi.</p>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-[#FFA726] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#FFA726] transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#FFA726] transition">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#FFA726] transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#FFA726] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Ikuti Kami</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#FFA726] transition">
              <Globe size={22} />
            </a>
            <a href="#" className="hover:text-[#FFA726] transition">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-[#FFA726] transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-[#FFA726] transition">
              <Twitter size={22} />
            </a>
          </div>
        </div>

        {/* Kontak Info */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Kontak</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#FFA726]" /> +62 812 3456 7890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#FFA726]" /> hello@alfanbagus.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-[#FFA726]" /> Jakarta, Indonesia
            </li>
          </ul>
        </div>
      </div>

      {/* Garis Pembatas */}
      <div className="border-t border-gray-500 mt-12 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} <span className="font-semibold">AlfanBagus</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
