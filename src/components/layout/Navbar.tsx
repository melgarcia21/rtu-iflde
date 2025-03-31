import Link from "next/link";
import { useEffect, useState } from "react";

import {
  RectangleStackIcon as RectangleStackOutline,
  AcademicCapIcon as AcademicCapOutline,
  NewspaperIcon as NewspaperOutline,
  PhoneIcon as PhoneOutline,
  UserIcon,
} from "@heroicons/react/24/outline";

import {
  RectangleStackIcon as RectangleStackSolid,
  AcademicCapIcon as AcademicCapSolid,
  NewspaperIcon as NewspaperSolid,
  PhoneIcon as PhoneSolid,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerSection = document.querySelector(".header-section");
      if (headerSection) {
        const headerBottom = headerSection.getBoundingClientRect().bottom;
        setIsSticky(headerBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      href: "/about",
      label: "About",
      iconOutline: <RectangleStackOutline className="navbar-icon" />,
      iconSolid: <RectangleStackSolid className="navbar-icon" />,
    },
    {
      href: "/programs",
      label: "Programs",
      iconOutline: <AcademicCapOutline className="navbar-icon" />,
      iconSolid: <AcademicCapSolid className="navbar-icon" />,
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
    <>
    {isSticky && <div className="sticky-placeholder" />}
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

          <div className="navbar-actions">
            {/* Profile/User Icon */}
            <button className="profile-button" aria-label="User Profile">
              <UserIcon className="profile-icon" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;