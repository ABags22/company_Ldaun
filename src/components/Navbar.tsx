import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.svg?react";
function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8 text-[#004643] fill-current" />
          <h1 className="text-2xl font-bold">
            Alfan<span className="text-[#FFA726]">Bagus</span>
          </h1>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-700 hover:text-[#004643] transition 
                           after:content-[''] after:absolute after:left-0 after:-bottom-1 
                           after:w-0 after:h-[2px] after:bg-[#004643] 
                           after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#004643]" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4 font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 hover:text-[#004643] transition 
                             after:content-[''] after:absolute after:left-0 after:-bottom-1 
                             after:w-0 after:h-[2px] after:bg-[#004643] 
                             after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
