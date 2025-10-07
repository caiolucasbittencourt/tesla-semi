export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <ul className="flex justify-center space-x-6 text-gray-400">
          <li>
            <a href="#" className="hover:text-white transition-colors">
              Tesla © 2025
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              Privacy & Legal
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              News
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
