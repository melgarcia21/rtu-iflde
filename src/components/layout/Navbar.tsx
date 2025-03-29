import Link from "next/link";
import { useEffect, useState } from "react";

import {
  HomeIcon as HomeOutline,
  BookOpenIcon as BookOpenOutline,
  NewspaperIcon as NewspaperOutline,
  PhoneIcon as PhoneOutline,
  SunIcon,
  MoonIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import {
  HomeIcon as HomeSolid,
  BookOpenIcon as BookOpenSolid,
  NewspaperIcon as NewspaperSolid,
  PhoneIcon as PhoneSolid,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight =
        document.querySelector(".header-section")?.clientHeight || 0;
      setIsSticky(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      href: "/about",
      label: "About",
      iconOutline: <HomeOutline className="navbar-icon" />,
      iconSolid: <HomeSolid className="navbar-icon" />,
    },
    {
      href: "/programs",
      label: "Programs",
      iconOutline: <BookOpenOutline className="navbar-icon" />,
      iconSolid: <BookOpenSolid className="navbar-icon" />,
    },
    {
      href: "/news",
      label: "News",
      iconOutline: <NewspaperOutline className="navbar-icon" />,
      iconSolid: <NewspaperSolid className="navbar-icon" />,
    },
    {
      href: "/contact",
      label: "Contact",
      iconOutline: <PhoneOutline className="navbar-icon" />,
      iconSolid: <PhoneSolid className="navbar-icon" />,
    },
  ];

  return (
    <nav className={`navbar ${isSticky ? "sticky-navbar" : ""}`}>
      <div className="navbar-container">
        {/* Brand */}
        <Link href="/" className="navbar-brand">
          RTU <span className="iflde-highlight">IFLDE</span>
        </Link>

        {/* Links */}
        <div className="navbar-links">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="navbar-link group">
              <span className="icon-wrapper">
                <span className="icon-outline">{link.iconOutline}</span>
                <span className="icon-solid">{link.iconSolid}</span>
              </span>
              <span className="link-text">{link.label}</span>
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
          <button className="profile-button" aria-label="User Profile">
            <UserIcon className="profile-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
