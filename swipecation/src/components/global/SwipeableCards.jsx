import React, { useState, createRef } from "react";
import TinderCard from "react-tinder-card";

import "../../styles/index.scss";
import "./SwipeableCards.scss";

import StarIcon from "../../assets/icons/star.svg";
import SkipIcon from "../../assets/icons/swipe-cross.svg";
import ChooseIcon from "../../assets/icons/swipe-love.svg";

// taken from https://github.com/3DJakob/react-tinder-card example

export function SwipeableCards({ data }) {
  const [destinations, setDestinations] = useState(data);
  const [leftSwiped, setLeftSwiped] = useState([]);
  const [rightSwiped, setRightSwiped] = useState([]);
  const [childRefs, setChildRefs] = useState(Array.fill());

  React.useEffect(() => {
    // add or remove refs
    setChildRefs((elRefs) =>
      Array(data.length)
        .fill(0)
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [data.length]);

  const handleSwipe = (dir, title) => {
    console.log(dir, title);
    if (dir === "right") setRightSwiped((data) => [...data, title]);
    if (dir === "left") setLeftSwiped((data) => [...data, title]);
    if (dir === "right" || dir === "left")
      setDestinations((prev) => prev.filter((dest) => dest.title !== title));
  };

  const handleClick = () => {
    const idx = destinations.length - 1;
    const title = destinations[idx].title;
    console.log(childRefs[idx]);
    childRefs[idx].current.swipe("left");
    handleSwipe("left", title);
  };

  return (
    <div className="tinder-cards">
      <div className="tinder-cards-container">
        {destinations.map((destination, index) => (
          <TinderCard
            className="tinder-card-container"
            ref={childRefs[index]}
            key={destination.title}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => handleSwipe(dir, destination.title)}
          >
            <img
              className="tinder-card-img"
              alt=""
              src={"/aye/" + destination.url}
            />
            <h4 className="tinder-card-title">{destination.title}</h4>
            {(destination.rating || destination.cost) && (
              <div className="tinder-card-info">
                {destination.rating && (
                  <div className="tinder-card-info-rating">
                    Rating: {destination.rating} <img src={StarIcon} alt="" />
                  </div>
                )}
                {destination.rating && (
                  <div className="tinder-card-info-cost">
                    {destination.cost}
                  </div>
                )}
              </div>
            )}
          </TinderCard>
        ))}
      </div>
      <div className="tinder-cards-buttons">
        <button className="tinder-cards-button" onClick={() => handleClick()}>
          <img src={SkipIcon} alt="" />
        </button>
        <button className="tinder-cards-button" onClick={() => {}}>
          <img src={ChooseIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
