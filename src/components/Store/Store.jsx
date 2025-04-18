import "./styles.scss";

import { useDataLayer } from "../../hooks/useDataLayer";

import Apple from "../Apple";
import Google from "../Google";

const storeComponents = {
  apple: Apple,
  google: Google,
};

const storeLink = {
  apple: "https://flure.onelink.me/4Xrl/8uuflpor",
  google: "https://flure.onelink.me/4Xrl/wqruqavj",
};

const Store = ({ store }) => {
  const StoreIcon = storeComponents[store.icon];

  const handleClick = (evt) => {
    evt.preventDefault();

    useDataLayer(
      {
        afid: null,
        store: store.type,
        subdomain: "main",
        event: "click_store_button",
      },
      evt.target.href,
    );
  };

  return (
    <a onClick={handleClick} href={storeLink[store.icon]} className="store">
      {StoreIcon && <StoreIcon />}
      <span className="store__type">{store.type}</span>
    </a>
  );
};

export default Store;
