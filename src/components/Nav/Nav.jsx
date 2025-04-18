import { motion } from "framer-motion";
import { useChangePage } from "../../hooks/useChangePage";

import "./styles.scss";
import nav from "../../data/nav.json";

import Socials from "../Socials";
import Cloud from "../../svg/Cloud";

const Nav = ({ isOpen, toogle, pathname, isMobile }) => (
  <div className={`nav ${isOpen ? "open" : "closed"}`} data-nav-style>
    <div className="nav__wrap">
      <div className="nav__svg">
        <Cloud
          cloudClass={"cloud"}
          mod={"1"}
          color={"white"}
          w={{ d: 733, m: 423 }}
          h={{ d: 158, m: 92 }}
        />
        <Cloud
          cloudClass={"cloud"}
          mod={"2"}
          color={"white"}
          w={{ d: 869, m: 423 }}
          h={{ d: 187, m: 92 }}
        />
        <Cloud
          cloudClass={"cloud"}
          mod={"3"}
          color={"white"}
          w={{ d: 920, m: 0 }}
          h={{ d: 198, m: 0 }}
        />
        <Cloud
          cloudClass={"cloud"}
          mod={"4"}
          color={"white"}
          w={{ d: 733, m: 423 }}
          h={{ d: 158, m: 92 }}
        />
        <Cloud
          cloudClass={"cloud"}
          mod={"5"}
          color={"white"}
          w={{ d: 1579, m: 1067 }}
          h={{ d: 340, m: 229 }}
        />
      </div>
      <nav className="nav__links">
        {nav.items.map(({ id, text, link, nav, color, desktopOnly }) =>
          nav && (desktopOnly ? !isMobile : true) ? (
            <div key={id}>
              <motion.a
                onClick={useChangePage}
                data-color={color}
                whileHover={{ color: "var(--mauve)" }}
                whileTap={{ scale: 0.98 }}
                href={link}
                className={`nav__link${
                  pathname === link ? " nav__link--active" : ""
                }`}
              >
                {text}
              </motion.a>
            </div>
          ) : null,
        )}
      </nav>
      <Socials />
    </div>
  </div>
);

export default Nav;
