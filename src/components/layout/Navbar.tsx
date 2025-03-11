import Link from 'next/link';

const Navbar = () => {
  const links = [
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/news', label: 'News' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">RTU IFLDE</Link>
        <div className="navbar-links">
          {links.map((link, index) => (
            <Link key={index} 
              href={link.href} 
              className="navbar-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;