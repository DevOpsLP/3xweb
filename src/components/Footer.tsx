import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-500 text-primary-500 py-12">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Logo and Rights */}
        <div className="flex flex-col items-center mb-4 md:mb-0 ">
          <div className="text-2xl font-bold">
            <Link href="/">
            <Image
                src="/images/3xlogo.png" // replace with your image path
                alt="Hero Image"
                width={100}
                height={100}
                priority // This ensures the image loads quickly
            />
            </Link>
          </div>
          <p className="text-sm mt-12 border-t-2 pt-6">
            &copy; {new Date().getFullYear()} 3X Group. All rights reserved.
          </p>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-10 text-xl border-b-2">
        <Link className="hover:font-bold hover:text-primary-500 py-2" href="/services">
            About us
          </Link>
          <Link className="hover:font-bold hover:text-primary-500 py-2" href="/urnas">
            FAQ
          </Link>
          <Link className="hover:font-bold hover:text-primary-500 py-2" href="/contact">
            Contact
          </Link>
          <Link className="hover:font-bold py-2" href="/terms">
            Term and conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;