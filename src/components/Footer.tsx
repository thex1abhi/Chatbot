import { footerList, socialIcons } from "../../data/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t border-neutral-200">
      <div className="container mx-auto px-6 pt-10 pb-8 text-neutral-600">

        {/* TOP SECTION */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-8">

          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-neutral-900">
              ChatBot
            </h2>

            <p className="text-sm tracking-tight">
              An intelligent AI chatbot that delivers instant support,
              automates conversations, and enhances customer experience
              24/7.
            </p>
          </div>

          {/* Footer Lists */}
          {footerList.map((item) => (
            <div key={item.id}>
              <h3 className="font-semibold text-neutral-900 mb-4">
                {item.title}
              </h3>

              <ul className="space-y-3">
                {item.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm hover:text-neutral-900 transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact + Social */}
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-3">
                Get In Touch
              </h3>

              <p className="text-sm">
                Email:
                <a
                  href="mailto:yabhishekk480@gmail.com"
                  className="ml-2 hover:text-black"
                >
                  yabhishekk480@gmail.com
                </a>
              </p>

              <p className="text-sm mt-2">
                Phone:
                <a href="tel:99674XXXX" className="ml-2 hover:text-black">
                  99674XXXX
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map((data, index) => {
                const Icon = data.icon;

                return (
                  <Link
                    key={index}
                    href={data.navigationlink}
                    target="_blank"
                    className="
                      p-2 rounded-lg
                      bg-neutral-100
                      hover:bg-neutral-900 hover:text-white
                      transition-all duration-300
                      hover:-translate-y-1
                    "
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-neutral-200 pt-6 text-center">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} ChatBot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;