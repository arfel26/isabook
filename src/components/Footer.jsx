import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="footer-logo mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <span className="self-center text-2xl lg:text-3xl tracking-wider uppercase text-white">
                  IsaBook
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-36 ">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Links
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.linkedin.com/in/arianne-felize-o-manibo-825a5a288/"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Follow us
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
