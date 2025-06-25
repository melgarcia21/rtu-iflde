/* src/components/layout/Navbar.tsx */

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
      // Use getElementById now that header-section is an ID
      const headerSection = document.getElementById("header-section");
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
      iconOutline: <RectangleStackOutline className="h-4 w-4 md:h-6 md:w-6" />,
      iconSolid: <RectangleStackSolid className="h-4 w-4 md:h-6 md:w-6" />,
    },
    {
      href: "/programs",
      label: "Programs",
      iconOutline: <AcademicCapOutline className="h-4 w-4 md:h-6 md:w-6" />,
      iconSolid: <AcademicCapSolid className="h-4 w-4 md:h-6 md:w-6" />,
    },
    {
      href: "/news",
      label: "News",
      iconOutline: <NewspaperOutline className="h-4 w-4 md:h-6 md:w-6" />,
      iconSolid: <NewspaperSolid className="h-4 w-4 md:h-6 md:w-6" />,
    },
    {
      href: "/contact",
      label: "Contact",
      iconOutline: <PhoneOutline className="h-4 w-4 md:h-6 md:w-6" />,
      iconSolid: <PhoneSolid className="h-4 w-4 md:h-6 md:w-6" />,
    },
  ];

  return (
    <>
      {isSticky && <div className="h-[48px] md:h-[100px]" />}
      <nav className={`navbar ${isSticky ? "sticky-navbar" : ""}`}>
        <div id="navbar-container" className="h-6 md:h-6 sm:h-8 max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            scroll={false}
            id="navbar-brand"
            className="flex items-center gap-2 text-lg md:text-2xl font-bold hover:text-purple-300"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            <Image src="/images/header/iflde-logo.png" alt="IFLDE Logo" width={40} height={40} />
            IFLDE
          </Link>

          {/* Desktop Navigation Links */}
          <div id="navbar-links" className="hidden md:flex items-center space-x-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                scroll={false}
                className="group flex items-center space-x-2 relative text-base md:text-lg font-medium"
              >
                <span className="relative w-5 h-5 md:w-6 md:h-6">
                  {router.pathname === link.href ? link.iconSolid : link.iconOutline}
                </span>
                <span
                  className="link-text relative text-sm font-semibold text-white uppercase antialiased"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-button"
              className="flex md:hidden items-center justify-center p-2 text-white hover:bg-purple-700 rounded-lg transition-colors"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`mobile-menu ${isMobileMenuOpen ? "flex" : ""} ${isClosing ? "closing" : ""}`}
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
              <span className="relative w-5 h-5 md:w-6 md:h-6">
                {router.pathname === link.href ? link.iconSolid : link.iconOutline}
              </span>
              <span
                className="link-text relative text-sm font-semibold text-white uppercase antialiased"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;