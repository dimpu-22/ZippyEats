import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-8">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-orange-500">
              🍔 ZippyEats
            </h2>

            <p className="mt-4 text-gray-400">
              Delicious food delivered to your doorstep in minutes.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-xl mb-4">
              Company
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-xl mb-4">
              Help
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Support</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-xl mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">
              <FaFacebook className="hover:text-orange-500 cursor-pointer" />
              <FaInstagram className="hover:text-orange-500 cursor-pointer" />
              <FaTwitter className="hover:text-orange-500 cursor-pointer" />
              <FaGithub className="hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 ZippyEats. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;