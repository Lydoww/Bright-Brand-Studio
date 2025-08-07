import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import linkedin from '../../assets/linkedin.svg';
import email from '../../assets/email.svg';
import Logo from '../../assets/logo-BBS.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-12 fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label='Main navigation'
        className='flex items-center justify-between'
      >
        {/* Logo */}
        <a href='#home' className='flex-shrink-0'>
          <img
            src={Logo}
            alt='logo of bright brand studio'
            className={`transition-all duration-300 ${
              isScrolled ? 'w-12 sm:w-14' : 'w-24 sm:w-28 lg:w-32'
            }`}
          />
        </a>

        {/* Desktop Links */}
        <div className='hidden lg:flex items-center space-x-6 xl:space-x-8'>
          <ul className='flex space-x-4 xl:space-x-6'>
            <li className='border rounded-2xl px-4 xl:px-6 py-1 font-semibold border-[#5B4739] hover:border-[#F98948] hover:scale-105 transition-all'>
              <Anchor label='Services' target='services' />
            </li>
            <li className='border rounded-2xl px-4 xl:px-6 py-1 font-semibold border-[#5B4739] hover:border-[#F98948] hover:scale-105 transition-all'>
              <Anchor label='About me' target='about' />
            </li>
            <li className='border rounded-2xl px-4 xl:px-6 py-1 font-semibold border-[#5B4739] hover:border-[#F98948] hover:scale-105 transition-all'>
              <Anchor label='Contact' target='contact' />
            </li>
          </ul>

          {/* Icons */}
          <div className='flex space-x-3 xl:space-x-4'>
            <a
              href='https://linkedin.com/in/audrey'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn profile of Audrey'
              className='p-1'
            >
              <img
                src={linkedin}
                alt='LinkedIn'
                width={24}
                height={24}
                className='hover:scale-105 transition-transform'
              />
            </a>
            <a
              href='mailto:audrey@example.com'
              aria-label='Send email to Audrey'
              className='p-1'
            >
              <img
                src={email}
                alt='Email'
                width={24}
                height={24}
                className='hover:scale-105 transition-transform'
              />
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className='lg:hidden p-2 text-[#5B4739] rounded-lg hover:bg-slate-200 transition-colors'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className='mt-4 px-4 py-4 flex flex-col space-y-4  backdrop-blur-sm rounded-lg shadow-lg'>
          <MobileAnchor label='Home' target='home' onClick={handleClick} />
          <MobileAnchor
            label='Services'
            target='services'
            onClick={handleClick}
          />
          <MobileAnchor label='About me' target='about' onClick={handleClick} />
          <MobileAnchor
            label='Contact'
            target='contact'
            onClick={handleClick}
          />

          {/* Mobile Icons */}
          <div className='flex justify-center space-x-6 pt-4'>
            <a
              href='https://linkedin.com/in/audrey'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn profile of Audrey'
              className='p-2'
            >
              <img
                src={linkedin}
                alt='LinkedIn'
                width={28}
                height={28}
                className='hover:scale-105 transition-transform'
              />
            </a>
            <a
              href='mailto:audrey@example.com'
              aria-label='Send email to Audrey'
              className='p-2'
            >
              <img
                src={email}
                alt='Email'
                width={28}
                height={28}
                className='hover:scale-105 transition-transform'
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

const Anchor = ({ label, target }) => {
  return (
    <a
      href={`#${target}`}
      className='text-sm font-medium text-[#5B4739] hover:text-[#F98948] transition-colors'
    >
      {label}
    </a>
  );
};

const MobileAnchor = ({ label, target, onClick }) => {
  return (
    <button
      onClick={() => onClick(target)}
      className='py-3 text-left text-lg font-medium text-[#5B4739] hover:text-[#F98948] transition-colors'
    >
      {label}
    </button>
  );
};

export default Navbar;
