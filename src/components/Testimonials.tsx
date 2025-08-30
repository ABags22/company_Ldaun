import LeafDeco from "../assets/tan_trans.png";
import Person1 from "../assets/1.jpeg";
import Person2 from "../assets/2.jpeg";
import Person3 from "../assets/4.jpeg";

const Testimonials = () => {
  const testimonies = [
    {
      name: "Andi Saputra",
      role: "Founder EcoLiving",
      img: Person1,
      text: "Bekerja dengan tim ini benar-benar memuaskan. Branding kami jadi terlihat lebih natural dan profesional. Klien langsung merasakan perbedaan!",
    },
    {
      name: "Siti Rahma",
      role: "Marketing Manager GreenCo",
      img: Person2,
      text: "Desain yang dihasilkan tidak hanya indah, tapi juga punya nilai strategis. Mereka benar-benar paham cara menyampaikan identitas brand.",
    },
    {
      name: "Dewi Lestari",
      role: "CEO Organic Market",
      img: Person3,
      text: "Kolaborasi yang menyenangkan! Prosesnya cepat, komunikatif, dan hasilnya di atas ekspektasi. Highly recommended.",
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 bg-white">
      {/* Ornamen daun */}
      <img src={LeafDeco} alt="Leaf Deco" className="absolute top-10 left-0 w-48 opacity-10 -z-10" />
      <img src={LeafDeco} alt="Leaf Deco" className="absolute bottom-10 right-0 w-56 opacity-10 rotate-12 -z-10" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004643]">
          What Our <span className="text-[#FFA726]">Clients Say</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Beberapa ulasan dari klien yang telah mempercayakan brand mereka pada kami.</p>

        {/* Grid Card Testimoni */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonies.map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 transition">
              <img src={item.img} alt={item.name} className="w-20 h-20 rounded-full object-cover border-4 border-[#004643] shadow-md" />
              <p className="mt-4 text-gray-700 italic">"{item.text}"</p>
              <h4 className="mt-6 font-semibold text-[#004643]">{item.name}</h4>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
