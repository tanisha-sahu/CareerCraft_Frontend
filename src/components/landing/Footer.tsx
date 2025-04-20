import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="bg-[#E5E7EB] mb-0 w-full">
        <div className="w-full max-w-screen-xl mx-auto py-4 ">
          <div className="sm:flex sm:items-center md:justify-between justify-center">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
              <img
                src="logo.png"
                className="h-8"
                alt="Flowbite Logo"
              />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Flowbite
              </span> */}
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium justify-evenly text-black sm:mb-0">
              <li>
                <Link to="/about" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Licensing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-[#A5AAB3] sm:mx-auto lg:my-8" />
          <span className="block text-sm text-black sm:text-center">
            © 2025 <Link to="/" className="hover:underline">Career Craft™</Link>. All Rights Reserved.
          </span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  