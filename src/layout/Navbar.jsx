import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#006362]  md:flex justify-center text-center lg:px-20">
    <div className="max-w-7xl mx-auto px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Homepage</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">About Us</span>
          </Link>
          <Link href="/Destinations">
            <span className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Destinations</span>
          </Link>
          <Link href="/TourPackages">
            <span className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Tour Packages</span>
          </Link>
          <Link href="/ContactUs">
            <span className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Contact Us</span>
          </Link>
          <Link href="/GalleryPage">
            <span className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Gallery</span>
          </Link>
        </div>
        {/* Responsive Menu */}
        <div className="md:hidden">
          <button style={{color: 'white !important'}} className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Menu Details */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col mt-2">
            <Link href="/">
              <span className="text-gray-300 ml-4 hover:text-white cursor-pointer">Home</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-300 ml-4 hover:text-white cursor-pointer">About Us</span>
            </Link>
            <Link href="/Destinations">
              <span className="text-gray-300 ml-4 hover:text-white cursor-pointer">Destinations</span>
            </Link>
            <Link href="/TourPackages">
              <span className="text-gray-300 ml-4 hover:text-white cursor-pointer">Tour Packages</span>
            </Link>
            <Link href="/ContactUs">
              <span className="text-gray-300 ml-4 hover:text-white cursor-pointer">Contact Us</span>
            </Link>
            <Link href="/GalleryPage">
              <span className="text-gray-300 ml-4 hover:text-white cursor-pointer">Gallery</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  </nav>

  );
};

export default Navbar;
