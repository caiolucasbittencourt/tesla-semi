import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#specs", text: "Specs" },
    { href: "#features", text: "Features" },
    { href: "#interior", text: "Interior" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" title="Tesla">
                <img
                  src="/tesla.svg"
                  alt="Tesla Logo"
                  className="h-10 w-auto filter brightness-0 invert"
                />
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <nav className="hidden lg:flex items-center space-x-2">
                {navLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    className="text-sm font-medium text-gray-400 hover:text-white py-2 px-3 rounded-md transition-all duration-200"
                  >
                    {link.text}
                  </a>
                ))}
                <a
                  href="#"
                  className="text-sm font-medium text-gray-400 hover:text-white py-2 px-3 rounded-md transition-all duration-200"
                >
                  Shop
                </a>
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-400 hover:text-white py-2 px-3 rounded-md transition-all duration-200"
                >
                  Account
                </Link>
              </nav>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden text-gray-200 p-2 rounded-md transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-md"
          >
            <svg
              className="h-6 w-6 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-2 p-4">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.text}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Shop
          </a>
          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Account
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/20 z-40"
        ></div>
      )}
    </>
  );
}
