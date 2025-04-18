import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./style.scss";

const variants = {
  open: {
    scaleY: -1,
  },
  closed: {
    scaleY: 1,
  },
};

const filtersToMatch = ["about", "profile", "conn", "wrong", "sub"];
const filtersTitles = {
  all: ["ALL"],
  about: ["ABOUT THE APP"],
  profile: ["YOUR PROFILE"],
  conn: ["CONNECTING WITH PEOPLE"],
  wrong: ["IF THINGS GO WRONG"],
  sub: ["IN-APP FEATURES AND SUBSCRIPTIONS "],
};

const Items = ({ items }) => {
  const [isVisible, setIsVisible] = useState(null);
  const [blocks, setBlocks] = useState({});
  const [activeFilter, setActiveFilter] = useState("all");

  const toggle = (id) => {
    if (isVisible === id) return setIsVisible(null);
    setIsVisible(id);
  };

  useEffect(() => {
    const newBlocks = {};

    items.forEach((item) => {
      if (filtersToMatch.includes(item.filter)) {
        !newBlocks[item.filter] && (newBlocks[item.filter] = []);

        newBlocks[item.filter].push(item);
      }
    });

    setBlocks(newBlocks);
  }, [items]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredBlocks =
    activeFilter === "all" ? blocks : { [activeFilter]: blocks[activeFilter] };

  return (
    <div className="blocks">
      <div className="filter">
        {Object.keys(filtersTitles).map((filter, index) => (
          <motion.span
            className={`filter__item${
              activeFilter === filter ? " active" : ""
            }`}
            key={index}
            onClick={() => handleFilterClick(filter)}
            whileHover={{
              backgroundColor: "var(--mauve)",
              color: "var(--black)",
              borderColor: "var(--mauve)",
            }}
            whileTap={{
              backgroundColor: "var(--mauve)",
              color: "var(--black)",
              scale: 0.98,
              borderColor: "var(--mauve)",
            }}
            data-text={filtersTitles[filter][0]}
          >
            {filtersTitles[filter][0]}
          </motion.span>
        ))}
      </div>
      {Object.keys(filteredBlocks).map((filter) => (
        <div className="block" key={filter}>
          <h2 className="block__title">{filtersTitles[filter]}</h2>
          <div className="block__items">
            {filteredBlocks[filter].map(
              ({ id, title, descr, list, descr2 }) => (
                <motion.div
                  key={id}
                  className="item"
                  onClick={() => toggle(id)}
                  animate={isVisible === id ? "open" : "closed"}
                >
                  <div className="item__head">
                    <span>{title ? title : "Error"}</span>
                  </div>
                  <AnimatePresence>
                    {isVisible === id && (
                      <motion.div
                        className="item__body"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <div className="item__body-wrap">
                          {descr && (
                            <p
                              className="item__list-el"
                              dangerouslySetInnerHTML={{ __html: descr.text }}
                            />
                          )}
                          {list && (
                            <ul className="item__list">
                              {list.map(({ id, text }, ind) => (
                                <li
                                  key={id}
                                  className="item__list-el"
                                  dangerouslySetInnerHTML={{
                                    __html: `${ind + 1}&nbsp;${text}`,
                                  }}
                                />
                              ))}
                            </ul>
                          )}
                          {descr2 && (
                            <p
                              className="item__list-el"
                              dangerouslySetInnerHTML={{ __html: descr2.text }}
                            />
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="item__arrow">
                    <AnimatePresence>
                      <motion.svg
                        variants={variants}
                        transition={{
                          duration: 0.3,
                        }}
                        className="arrow-accor"
                        xmlns="http://www.w3.org/2000/svg"
                        width="43"
                        height="19"
                        viewBox="0 0 43 19"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.445312 2.24902C0.445313 1.4206 1.11689 0.749023 1.94531 0.749023C9.60383 0.749024 13.8455 4.97001 16.6161 8.95567C17.3025 9.94317 17.9047 10.9236 18.4431 11.8157C18.5342 11.9668 18.6231 12.1145 18.71 12.2589C19.1455 12.9828 19.5308 13.6232 19.9052 14.1857C20.3584 14.8664 20.7289 15.3283 21.0503 15.6127C21.3396 15.8686 21.4876 15.8922 21.5379 15.8944C21.5866 15.8924 21.7151 15.8718 21.9675 15.6373C22.2611 15.3645 22.5987 14.9143 23.0156 14.2335C23.3368 13.709 23.6626 13.1205 24.0309 12.4552C24.137 12.2635 24.2466 12.0654 24.3607 11.8607C24.8598 10.9649 25.4237 9.97903 26.081 8.9847C27.3962 6.9949 29.1168 4.92118 31.5586 3.35029C34.0178 1.76822 37.1264 0.749028 41.1289 0.749029C41.9573 0.749029 42.6289 1.4206 42.6289 2.24903C42.6289 3.07746 41.9573 3.74903 41.1289 3.74903C37.6696 3.74903 35.1303 4.61971 33.1817 5.87328C31.2158 7.13804 29.769 8.84572 28.5836 10.639C27.9906 11.5362 27.4709 12.4422 26.9814 13.3208C26.8793 13.5041 26.7775 13.688 26.676 13.8713C26.302 14.5472 25.9331 15.2138 25.574 15.8002C25.1206 16.5406 24.6113 17.2759 24.0095 17.835C23.3868 18.4136 22.5711 18.8881 21.5465 18.8945L21.5371 18.8946L21.5277 18.8945C20.5141 18.8881 19.6947 18.4189 19.0625 17.8596C18.4436 17.3121 17.9008 16.5884 17.4079 15.8481C16.9918 15.223 16.5638 14.5114 16.1288 13.7881C16.0443 13.6476 15.9596 13.5066 15.8746 13.3658C15.3421 12.4836 14.7812 11.572 14.1528 10.668C11.6638 7.08754 8.21722 3.74902 1.94531 3.74902C1.11689 3.74902 0.445312 3.07745 0.445312 2.24902Z"
                          fill="white"
                        />
                      </motion.svg>
                    </AnimatePresence>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
