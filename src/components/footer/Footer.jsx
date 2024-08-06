import {
  LinkedinIcon,
  MailIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="flex flex-col-reverse md:flex-row bg-[#599A7F] text-[#F5F7FA] py-10 justify-center items-center md:justify-around">
        <div className="flex flex-col-reverse md:flex-col justify-center items-center md:items-start border-t sm:border-none w-full sm:w-auto py-2">
          <p className="mt-1">© 2024 Neo World Advanced Materials</p>
          <p>All rights reserved</p>
        </div>
        <div>
          <ul className="flex flex-col gap-5 text-center md:mt-0 mb-2">
            <li>
              <a href="#home" className="transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#verticals" className="transition-colors duration-300">
                Verticals
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 mb-5 md:mb-0 text-center">
          Mobile: +91 9848805721 <br />
          Email: vn.madhav@gmail.com
          <div className="flex gap-3 items-center justify-center">
            <a
              href="https://www.linkedin.com/in/void-venu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a href="mailto:vn.madhav@gmail.com">
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
