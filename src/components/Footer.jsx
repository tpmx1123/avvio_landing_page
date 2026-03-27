import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer-section"
      className="bg-[#050505] text-[#9CA3AF] px-6 md:px-20 pt-16 md:pt-24 pb-10"
    >

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">

        {/* Logo */}
        <div>
          <img
            src="https://res.cloudinary.com/di4caiech/image/upload/v1774411856/Icon_Color_4x-removebg-preview_wxqq4d.png"
            alt="Avvio Logo"
            className="w-7 h-7 object-contain"
          />
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 text-sm">

          <div>
            <h4 className="text-white mb-5 font-medium">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="underline underline-offset-4">
                  Blogs
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="underline underline-offset-4">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="underline underline-offset-4">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-5 font-medium">Social</h4>
            <ul className="space-y-3">
              <li><a
                href="https://x.com/tryavvio"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                X
              </a></li>

              <li><a
                href="https://www.instagram.com/tryavvio/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Instagram
              </a></li>
            </ul>
          </div>

          

          <div>
            <h4 className="text-white mb-5 font-medium">Other</h4>
            <ul className="space-y-3">
              <li><Link to="/brand" className="underline">
                Brand assets
              </Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* ❌ REMOVED divider line */}

      {/* Bottom Section */}
      <div className="mt-12 md:mt-16 text-center text-sm text-[#6B7280]">

        {/* Copyright */}
        <p className="text-base text-[#9CA3AF]">
          © {year} Anzo Labs, Inc. (d/b/a Avvio). All rights reserved.
        </p>

        {/* ✅ Single line disclaimer */}
        <p className="mt-3 whitespace-normal md:whitespace-nowrap md:overflow-hidden md:text-ellipsis text-sm">
          Avvio is a financial technology company, not a bank. Services including virtual accounts, payment cards, and custody are provided by licensed partners. Availability varies by jurisdiction.
        </p>

      </div>
    </footer>
  );
};

export default Footer;