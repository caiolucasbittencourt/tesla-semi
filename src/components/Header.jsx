import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#features", text: "Features" },
    { href: "#specs", text: "Specs" },
    { href: "#interior", text: "Interior" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" title="Tesla">
                <svg
                  className="h-10 w-auto text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-38.0376 -63.1255 329.6592 378.753"
                >
                  <path
                    d="M126.806 252.502l35.476-199.519c33.815 0 44.481 3.708 46.021 18.843 0 0 22.684-8.458 34.125-25.636-44.646-20.688-89.505-21.621-89.505-21.621l-26.176 31.882.059-.004-26.176-31.883s-44.86.934-89.5 21.622c11.431 17.178 34.124 25.636 34.124 25.636 1.549-15.136 12.202-18.844 45.79-18.868l35.762 199.548"
                    fill="currentColor"
                  />
                  <path
                    d="M126.792 15.36c36.09-.276 77.399 5.583 119.687 24.014 5.652-10.173 7.105-14.669 7.105-14.669C207.357 6.416 164.066.157 126.787 0 89.51.157 46.221 6.417 0 24.705c0 0 2.062 5.538 7.1 14.669 42.28-18.431 83.596-24.29 119.687-24.014h.005"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <nav className="hidden lg:flex items-center space-x-2">
                {navLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    className="text-sm font-medium text-gray-200 hover:bg-black py-2 px-3 rounded-md transition-all duration-200"
                  >
                    {link.text}
                  </a>
                ))}
                <a
                  href="#"
                  className="text-sm font-medium text-gray-200 hover:bg-black py-2 px-3 rounded-md transition-all duration-200"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-200 hover:bg-black py-2 px-3 rounded-md transition-all duration-200"
                >
                  Account
                </a>
              </nav>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden text-gray-200 bg-black p-2 rounded-md transition-all duration-200"
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
          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Account
          </a>
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
