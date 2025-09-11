import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "vishal06076@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 500); 
    });
  };

  return (

    <footer className="mt-16 bg-[#ffbe66] font-jetbrains">

      <div className="flex flex-row justify-between items-start px-[calc(5%)] py-12 bg-[#ffbe66]">

        <div className="w-1/3 bg-transparent pl-4">
          <h3 className="mb-4 bg-transparent text-[#B16F00] text-base leading-5">Email? Email!</h3>
          <p className="mb-2 bg-transparent text-black text-lg leading-6">
            <span className="lowercase bg-transparent text-black">{email}</span>
            <FontAwesomeIcon
              icon={faCopy}
              className={`cursor-pointer p-1 rounded ml-2 transition-colors duration-300 ${
                copied ? "bg-green-500 text-white" : "bg-white text-[#ffbe66]"
              }`}
              onClick={copyEmail}
              title="Copy Email"
            />
          </p>
        </div>

        <div className="w-1/3 flex flex-col items-start bg-transparent pl-32" id="socials">
          <h3 className="mb-4 bg-transparent text-[#B16F00] text-base leading-5">Socials</h3>
          <ul className="bg-transparent">
            <li className="mb-2 bg-transparent text-black">
              <a
                className="bg-transparent text-black flex items-center underline"
                href="https://www.instagram.com/vis.hal007/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="mb-2 bg-transparent text-black">
              <a
                className="bg-transparent text-black flex items-center underline"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className="mb-2 bg-transparent text-black">
              <a
                className="bg-transparent text-black flex items-center underline"
                href="https://www.linkedin.com/in/vis-halv"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="mb-2 bg-transparent text-black">
              <a
                className="bg-transparent text-black flex items-center underline"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="w-1/3 bg-transparent pl-4">
          <p className="mb-2 bg-transparent text-black normal-case">
            Copyright © 2025 Vishal V.
          </p>
          <p className="mb-2 bg-transparent text-black normal-case">
            This website is typeset in Departure Mono by Helena Zhang and JetBrains Mono by Philipp Nurullin, and developed in Framer.
          </p>
        </div>
      </div>

      <div className="h-16 flex items-center justify-center bg-black">
        <p id="foot-note" className="text-white opacity-75 bg-transparent normal-case">
          You could have been anywhere on the internet, yet you're here. Thanks for visiting!
        </p>
      </div>
    </footer>

  );
}

export default Footer;
