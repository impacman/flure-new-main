import { useRef, useState, useEffect } from "react";
import { useCycle } from "framer-motion";
import clsx from "clsx";

import { useMatchMedia } from "../../hooks/useMatchMedia";
import { useDevice } from "../../hooks/useDevice";
import Logo from "../Logo";
import Btn from "../Btn";
import Store from "../Store";
import OpenNav from "../OpenNav";
import Nav from "../Nav";
import "./styles.scss";

const StoreType = ({ type }) => {
  if (type === "apple")
    return (
      <Btn>
        <Store store={{ icon: "apple", type: "App store" }} />
      </Btn>
    );

  if (type === "android")
    return (
      <Btn>
        <Store store={{ icon: "google", type: "Google Play" }} />
      </Btn>
    );
};

const Header = ({ pathname, bodyColor, headerColor }) => {
  const { isMobile } = useMatchMedia();
  const deviceType = useDevice();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [headerStyle, setHeaderStyle] = useState(pathname);
  const refCursor = useRef();

  useEffect(() => {
    isOpen
      ? setTimeout(() => setHeaderStyle("nav"), 800)
      : setHeaderStyle(pathname);
  }, [isOpen]);

  useEffect(() => {
    if (!refCursor.current && isMobile) return;

    window.addEventListener("mousemove", (e) => {
      !refCursor.current.classList.contains("show") &&
        refCursor.current.classList.add("show");

      refCursor.current.style.left = e.x + "px";
      refCursor.current.style.top = e.y + "px";
    });

    setTimeout(() => (document.body.style.cursor = "none"), 2000);
  }, [refCursor]);

  return (
    <>
      <header
        data-header-style={headerStyle}
        className={clsx(
          "header",
          headerColor === "black" && "header--black",
          headerColor === "pink" && "header--pink",
        )}
      >
        <Logo bodyColor={bodyColor} />
        <div className="header__wrap">
          {pathname !== "/dream-job" && (
            <>
              {pathname !== "/" && !isMobile ? (
                <>
                  <Btn>
                    <Store store={{ icon: "apple", type: "App store" }} />
                  </Btn>
                  <Btn>
                    <Store store={{ icon: "google", type: "Google Play" }} />
                  </Btn>
                </>
              ) : (
                <StoreType type={deviceType} />
              )}
            </>
          )}
          <Btn>
            <OpenNav toggle={() => toggleOpen()} isOpen={isOpen} />
          </Btn>
        </div>
      </header>
      <Nav
        isMobile={isMobile}
        isOpen={isOpen}
        toogle={toggleOpen}
        pathname={pathname}
      />
      <div ref={refCursor} className="custom-cursor">
        <img src="/images/custom-cursor.png" alt="Custom Cursor" />
      </div>
    </>
  );
};

export default Header;
