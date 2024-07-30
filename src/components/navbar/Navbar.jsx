import { useState, useEffect } from "react";
import Logo from "../../assets/main@2x.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="top-0 left-0 w-full z-10 bg-[#F5F7FA] text-primary">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-20">
        <nav className="w-full md:h-20 h-16 flex items-center justify-between text-primary text-[16px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <img src={Logo} alt="logo" className="md:block w-[200px]" />
            </div>
            <ul
              className={`font-medium text-primary flex flex-col lg:flex-row lg:items-center gap-y-1 lg:space-x-8 p-4 lg:p-0 lg:bg-transparent absolute lg:static left-0 top-16 w-full lg:w-auto bg-[#e1ece1] items-center ${
                isOpen ? "block" : "hidden lg:flex"
              }`}
            >
              <li>
                <a
                  href=""
                  className="block py-2 px-3 hover:text-[#558E6E] rounded tracking-wider lg:bg-transparent transition-colors duration-300"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 hover:text-[#558E6E] rounded lg:bg-transparent transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#verticals"
                  className="block py-2 px-3 hover:text-[#558E6E] rounded lg:bg-transparent transition-colors duration-300"
                >
                  Verticals
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 hover:text-[#558E6E] rounded lg:bg-transparent transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button onClick={toggleMenu} className="block lg:hidden">
              {isOpen ? <X size={32} className="text-primary" /> : <Menu size={32} className="text-primary" />}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
