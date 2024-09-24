import React from "react";

function Footer() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8fa47247-9f3c-43c5-8588-c64d2ab986db");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <footer className="footer">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="footer-logo mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl lg:text-3xl tracking-wider uppercase text-white">
                IsaBook
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-32 lg:gap-52 ">
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
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/ariannefelize/"
                    className="hover:underline "
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Contact Me
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <form onSubmit={onSubmit} className="space-y-3">
                    <div className="input">
                      <input
                        type="text"
                        className="email-input w-full rounded-md p-1 text-black"
                        id="email-input"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="input">
                      <textarea
                        type="text"
                        className="message-input w-full rounded-md p-1 min-h-32 max-h-64 text-black"
                        id="message-input"
                        placeholder="Message"
                        name="message"
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="send-button font-semibold bg-red-300 py-1 px-2 rounded-md"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
