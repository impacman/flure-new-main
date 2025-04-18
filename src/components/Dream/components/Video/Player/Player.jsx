import { useState, useEffect, useMemo } from "react";
import { useMatchMedia } from "../../../../../hooks/useMatchMedia";
import { UAParser } from "ua-parser-js";

const Video = () => {
  const { isMobile } = useMatchMedia();

  return (
    <video
      loop
      muted
      playsInline
      autoPlay
      poster={`images/dream-job/video/poster-${
        isMobile ? "mobile" : "desktop"
      }.jpg`}
    >
      <source
        src={`images/dream-job/video/love-in-the-air-${
          isMobile ? "mobile" : "desktop"
        }.mp4`}
        type="video/mp4"
      />
    </video>
  );
};

const Gif = () => (
  <img src="images/dream-job/video/love-in-the-air.gif" alt="Love In The Air" />
);

const Player = () => {
  const [isApple, setIsApple] = useState(false);

  const parser = useMemo(() => new UAParser(), []);

  useEffect(() => {
    const result = parser.getResult();

    const isAppleDevice =
      result.os.name === "iOS" ||
      (result.os.name === "Mac OS" && result.device.type === "tablet"); // iPad

    const isSafari = result.browser.name === "Safari";

    setIsApple(isAppleDevice || isSafari);
  }, [parser]);

  return isApple ? <Gif /> : <Video />;
};

export default Player;
