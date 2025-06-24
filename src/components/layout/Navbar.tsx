/* src\components\layout\Navbar.tsx */

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  RectangleStackIcon as RectangleStackOutline,
  AcademicCapIcon as AcademicCapOutline,
  NewspaperIcon as NewspaperOutline,
  PhoneIcon as PhoneOutline,
  Bars3Icon as MenuIcon, 
  XMarkIcon as XIcon, 

} from "@heroicons/react/24/outline";

import {
  RectangleStackIcon as RectangleStackSolid,
  AcademicCapIcon as AcademicCapSolid,
  NewspaperIcon as NewspaperSolid,
  PhoneIcon as PhoneSolid,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();

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

  const handleMenuToggle = () => {
    if (isMobileMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsClosing(false);
      }, 200);
    } else {
      setIsMobileMenuOpen(true);
      setIsClosing(false);
    }
  };

  const handleLinkClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 200);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      // Prevent scroll reset on route change
      window.history.scrollRestoration = "manual";
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

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

          <Link href="/" scroll={false} className="navbar-brand">
            <Image
              src="/images/header/iflde-logo.png"
              alt="IFLDE Logo"
              width={40}
              height={40}
            />
            IFLDE
          </Link>

          {/* Desktop Navigation Links */}
          <div className="navbar-links hidden md:flex">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                scroll={false}
                className="navbar-link group"
              >
                <span className="icon-wrapper">
                  {router.pathname === link.href
                    ? link.iconSolid
                    : link.iconOutline}
                </span>
                <span className="link-text">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-button"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`mobile-menu ${isMobileMenuOpen ? "flex" : ""} ${
            isClosing ? "closing" : ""
          }`}
          role="dialog"
          aria-hidden={!isMobileMenuOpen}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              scroll={false}
              className="mobile-menu-link"
              role="menuitem"
              onClick={handleLinkClick}
            >
              <span className="icon-wrapper">
                {router.pathname === link.href
                  ? link.iconSolid
                  : link.iconOutline}
              </span>
              <span className="link-text">{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;