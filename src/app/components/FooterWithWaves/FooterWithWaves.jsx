import React from "react";
import './FooterWithWaves.css'; // Include the custom CSS for animations
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";



const FooterWithWaves = () => {
  return (
    <footer className="bg-blue-200 text-black footer h-48 bg-gradient-to-top  bottom-0 inset-x-0 from-white to-blue-600">

      {/* Wavy SVG at the top */}
      
      <svg
          className="waves w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
  id="gentle-wave"
  d="M-160 44c40 0 68-28 108-28s 68 28 108 28 68-28 108-28 68 28 108 28v88h-432z"
/>
          </defs>
          <g className="parallax">
            <use
              href="#gentle-wave"
              className="fill-blue-500"
              style={{ animationDuration: "7s" }}
            />
            <use
              href="#gentle-wave"
              className="fill-blue-400"
              style={{ animationDuration: "10s" }}
            />
            <use
              href="#gentle-wave"
              className="fill-blue-300"
              style={{ animationDuration: "13s" }}
            />
            <use
              href="#gentle-wave"
              className="fill-blue-200"
              style={{ animationDuration: "20s" }}
            />
          </g>
        </svg>
      
     
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-10">
        {/* About Us and Contact Info */}
        <div id="target-section" className="">
          <h5 className="font-bold text-lg mb-4">About Us</h5>
          <h3>BONGO HOTELS</h3>
          <p className="text-black-300">
            We offer top-notch hotel booking services within the City, ensuring that
            your stay is as comfortable and stress-free as possible.
          </p>
          <p className="mt-4 text-black">Contact Us:</p>
          <p className="text-black-300">Phone: +1 (800) 123-4567</p>
          <p className="text-black">Email: info@hotelbooking.com</p>
          <p className="text-black">Address: 123 Main Street, City, Country</p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-bold text-lg mb-4">Quick Links</h5>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-black hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/rooms" className="text-black hover:underline">
                Rooms & Rates
              </a>
            </li>
            <li>
              <a href="/locations" className="text-black hover:underline">
                Locations
              </a>
            </li>
            <li>
              <a href="/blog" className="text-black hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/faq" className="text-black hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Legal and Social Media */}
        <div>
          <h5 className="font-bold text-lg mb-4">Legal & Policies</h5>
          <ul className="space-y-2">
            <li>
              <a href="/terms" className="text-black hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-black hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/refund" className="text-black hover:underline">
                Refund & Cancellation Policy
              </a>
            </li>
          </ul>

          <h5 className="font-bold text-lg mt-8 mb-4">Follow Us</h5>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="text-black hover:text-blue text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-black hover:text-blue text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-black hover:text-purple text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-black hover:text-blue text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-300 py-6">
        <div className="container mx-auto text-center">
          <h5 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h5>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg w-full max-w-xs"
            />
            <button className="bg-white text-blue-800 px-6 py-2 rounded-r-lg hover:bg-blue-800 hover:text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>


      {/* Footer copyright */}
      <div className="text-center py-3 bg-blue-300">
        <h7>© 2024 Copyright: </h7>
        <a href="https://discord.gg/uRqH5UT" className="text-white">
          E-wallet Africa Ltd
        </a>
      </div>
    </footer>
  );
};

export default FooterWithWaves;
