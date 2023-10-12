import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          Made with React.js by {" "}
          <a href="https://jashezan.netlify.app" className="dev">
            J.A. Shezan
          </a>{" "}
        </div>
        <div>
          Inspiration for Design taken from {" "}
          <a href="https://www.instagram.com/lamawebdev/" className="dev">Lama Dev</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
