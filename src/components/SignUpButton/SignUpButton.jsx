import { useDataLayer } from "../../hooks/useDataLayer";
import { trackEvent } from "../../shared/api/annals";

const SignUpButton = ({ section }) => {
  const buttonTitle = "SIGN UP";
  const buttonLink = "/app";
  const newWindow = false;

  return (
    <a
      id={"signup"}
      className={`${section}__btn`}
      href={buttonLink}
      onClick={(e) => {
        e.preventDefault();
        const gtmEvent = "Flure_WEB_GTM_main-page_signup_click";
        const annalsEvent = "Flure_WEB_main-page_signup_click";

        trackEvent(annalsEvent).finally(() =>
          useDataLayer(
            {
              timestamp: Date.now(),
              event: gtmEvent,
            },
            buttonLink,
            newWindow,
          ),
        );
      }}
    >
      <span>{buttonTitle}</span>
    </a>
  );
};

export default SignUpButton;
