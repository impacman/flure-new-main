import "./styles.scss";
import socials from "../../data/socials.json";
import { useDataLayer } from "../../hooks/useDataLayer";

import Instagram from "../../svg/Instagram";
import TikTok from "../../svg/TikTok";
import Twitter from "../../svg/Twitter";
import Medium from "../../svg/Medium";

const socialComponents = {
  instagram: Instagram,
  tiktok: TikTok,
  twitter: Twitter,
  medium: Medium,
};

const Socials = ({}) => {
  const handleClick = (evt, id) => {
    evt.preventDefault();

    useDataLayer(
      {
        afid: null,
        social: id,
        subdomain: "main",
        event: "click_social",
      },
      evt.target.href,
    );
  };

  return (
    <div className="socials">
      {socials.items.map(({ id, link }) => {
        const SocialIcon = socialComponents[id];

        return SocialIcon ? (
          <a
            onClick={(evt) => handleClick(evt, id)}
            className="socials__item"
            key={id}
            href={link}
          >
            <SocialIcon />
          </a>
        ) : null;
      })}
    </div>
  );
};

export default Socials;
