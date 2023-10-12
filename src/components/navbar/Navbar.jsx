import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import socialMedia from "../../data/social-media.json";
import hero from "../../data/developer.json";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {hero.name}
        </motion.span>
        <div className="social">
          {socialMedia.map((item) => (
            <a
              href={item.url}
              key={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "20px", height: "20px" }}
            >
              <img src={item.icon} alt={item.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
