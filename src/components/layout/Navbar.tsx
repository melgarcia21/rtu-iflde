import Link from 'next/link';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, HomeIcon, BookOpenIcon, NewspaperIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('.header-section')?.clientHeight || 0;
      setIsSticky(window.scrollY > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/about', label: 'About', icon: <HomeIcon className="navbar-icon" /> },
    { href: '/programs', label: 'Programs', icon: <BookOpenIcon className="navbar-icon" /> },
    { href: '/news', label: 'News', icon: <NewspaperIcon className="navbar-icon" /> },
    { href: '/contact', label: 'Contact', icon: <PhoneIcon className="navbar-icon" /> },
  ];

  return (
    <nav className={`navbar ${isSticky ? 'sticky-navbar' : ''}`}>
      <div className="navbar-container">
        {/* Brand */}
        <Link href="/" className="navbar-brand">
          RTU <span className="iflde-highlight">IFLDE</span>
        </Link>

        {/* Links */}
        <div className="navbar-links">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="navbar-link">
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Dark Mode Switch */}
        <div className="navbar-actions">
          <button
            onClick={toggleDarkMode}
            className="dark-mode-switch"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <SunIcon className="dark-mode-icon" />
            ) : (
              <MoonIcon className="dark-mode-icon" />
            )}
          </button>

          {/* Profile/User Icon */}
          <button
            className="profile-button"
            aria-label="User Profile"
          >
            <UserIcon className="profile-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;