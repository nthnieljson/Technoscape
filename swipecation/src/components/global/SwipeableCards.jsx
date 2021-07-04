import React, { useState, useMemo } from "react";
import TinderCard from "react-tinder-card";

import "../../styles/index.scss";
import "./SwipeableCards.scss";

import StarIcon from "../../assets/icons/star.svg";
import SkipIcon from "../../assets/icons/swipe-cross.svg";
import ChooseIcon from "../../assets/icons/swipe-love.svg";

const alreadyRemoved = [];
let charactersState = [];

// taken from https://github.com/3DJakob/react-tinder-card example

export function SwipeableCards({ data }) {
  const [characters, setCharacters] = useState(data);
  const [lastDirection, setLastDirection] = useState();

  React.useEffect(() => {
    console.log(data);
    charactersState.push(data);
  }, []);

  const childRefs = useMemo(
    () =>
      Array(data.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    charactersState = charactersState.filter(
      (character) => character.name !== name
    );
    setCharacters(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = data.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <div className="tinder-cards">
      <div className="tinder-cards-container">
        {characters.map((destination, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="tinder-card-container"
            key={destination.name}
            onSwipe={() => swiped(destination.name)}
            onCardLeftScreen={() => outOfFrame(destination.name)}
          >
            <img
              className="tinder-card-img"
              alt=""
              src={"/aye/" + destination.url}
            />
            <h4 className="tinder-card-title">{destination.name}</h4>
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
        <button className="tinder-cards-button" onClick={() => swipe("left")}>
          <img src={SkipIcon} alt="" />
        </button>
        <button className="tinder-cards-button" onClick={() => {}}>
          <img src={ChooseIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
