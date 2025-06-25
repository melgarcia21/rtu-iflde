/* src/components/layout/Footer.tsx */

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-400">
      <div id="footer-divider" className="border-t border-gray-700">
        <div id="footer-grid" className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div id="footer-logos" className="flex gap-2">
            <Image
              src="/images/header/rtu-logo.png"
              alt="RTU Logo"
              className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0"
              width={100}
              height={100}
            />
            <Image
              src="/images/header/iflde-logo.png"
              alt="Flexible Learning Icon"
              className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0"
              width={100}
              height={100}
            />
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              {[
                "College of Arts and Science",
                "College of Business and Entrepreneurial Technology",
                "Institute of Computer Studies",
                "College of Engineering",
                "Vocational Courses",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-200 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">University</h4>
            <ul className="space-y-2">
              {["Official Website", "RTU FB Page", "IFLDE FB Page"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-gray-200 transition">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Terms of service", "Privacy policy", "License"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-200 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="footer-bottom" className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p id="footer-copyright" className="text-gray-500">
            © 2025 Rizal Technological University. All rights reserved.
          </p>
          <div id="footer-social-icons" className="flex gap-4 text-gray-400">
            <Link
              href="https://www.facebook.com/rtuiflde"
              className="hover:text-white text-lg"
            >
              <FaFacebookF />
            </Link>

            <Link href="#" className="hover:text-white text-lg">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;