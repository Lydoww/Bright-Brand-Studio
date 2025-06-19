import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMeny = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`py-8 px-12 fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? " backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className=" flex items-center justify-between"
      >
        {/* Logo à gauche */}
        <Link to="/">
          <img src={Logo} width={120} alt="logo of bright brand studio" />
        </Link>
        {/* Conteneur de droite : liens + icônes */}
        <div className="flex items-center space-x-8">
          {/* Liens */}
          <ul className="flex space-x-6">
            <li className="border rounded-3xl px-6 py-1 font-semibold border-[#5B4739] hover:border-[#F98948] text-[#5B4739] hover:scale-105 hover:text-[#F98948] transition-all">
              <Link to="/services">Services</Link>
            </li>
            <li className="border rounded-3xl px-6 py-1 font-semibold border-[#5B4739] text-[#5B4739] hover:scale-105 hover:text-[#F98948] transition-all">
              <Link to="/about">About me</Link>
            </li>
            <li className="border rounded-3xl px-6 py-1 font-semibold border-[#5B4739] text-[#5B4739] hover:scale-105 hover:text-[#F98948] transition-all">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Icônes */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/audrey"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile of Audrey"
            >
              <img
                src={linkedin}
                alt=""
                width={24}
                height={24}
                className="hover:scale-105 transition-transform"
              />
            </a>
            <a
              href="mailto:audrey@example.com"
              aria-label="Send email to Audrey"
            >
              <img
                src={email}
                alt=""
                width={24}
                height={24}
                className="hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
