// import React, { useContext } from "react";
// import { DataContext } from "../../context/data";

// const Staycation = () => {
//   const { handleChangeProcess } = useContext(DataContext);
//   const handleSelectStaycation = () => {
//     handleChangeProcess(3);
//   };
//   return (
//     <>
//       <div>
//         <button onClick={handleSelectStaycation}>Submit Staycation</button>
//       </div>
//     </>
//   );
// };

// export default Staycation;

import React, { useState, useMemo } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";
import SkipIcon from "../../assets/icons/swipe-cross.svg";
import ChooseIcon from "../../assets/icons/swipe-love.svg";
import { COLOR } from "../../constants/Style";

const db = [
  {
    name: "Richard Hendricks",
    url: "../../images/city-1.jpg",
  },
  {
    name: "Erlich Bachman",
    url: "../../images/city-2.jpg",
  },
  {
    name: "Monica Hall",
    url: "../../images/highland-park-resort-bogor.jpg",
  },
];

const alreadyRemoved = [];
let charactersState = db; // This fixes issues with updating destinations state forcing it to use the current state and not the state that was active when the card was created.

const Staycation = () => {
  const [destinations, setDestinations] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    console.log(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    charactersState = charactersState.filter(
      (destination) => destination.name !== name
    );
    // console.log(lastDirection);
    setDestinations(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = destinations.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <>
      <div>
        <h1>React Tinder Card</h1>
        {/* <img src={`images/${db[0].url}`} /> */}
        <div
          className="d-flex justify-content-center"
          style={{
            height: "350px",
          }}
        >
          {destinations.map((destination, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={destination.name}
              onSwipe={(dir) => swiped(dir, destination.name)}
              onCardLeftScreen={() => outOfFrame(destination.name)}
            >
              <div
                style={{
                  backgroundImage: "url(" + destination.url + ")",
                  position: "relative",
                  width: "80vw",
                  height: "300px",
                  borderRadius: "10px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="card"
              >
                <h3
                  style={{
                    position: "absolute",
                    bottom: "0",
                    margin: "10px",
                    color: "#ffffff",
                    backgroundColor: "rgba(0,0,0,0.50)",
                    padding: ".75rem 1rem",
                    borderRadius: "7.5px",
                  }}
                >
                  {destination.name}
                </h3>
              </div>
            </TinderCard>
          ))}
        </div>
        <div className="tinder-cards-buttons">
          <button className="tinder-cards-button" onClick={() => swipe("left")}>
            <img src={SkipIcon} alt="" />
          </button>
          <button
            className="tinder-cards-button"
            onClick={() => swipe("right")}
          >
            <img src={ChooseIcon} alt="" />
          </button>
        </div>
        {lastDirection ? (
          <h2 key={lastDirection} className="infoText">
            You swiped {lastDirection}
          </h2>
        ) : (
          <h2 className="infoText">
            Swipe a card or press a button to get started!
          </h2>
        )}
      </div>
      <style>
        {`
        .swipe {
          position: absolute;
        }
        
        .swipe:last-of-type {
        
        }        
        
        .infoText {
          width: 100%;
          height: 28px;
          justify-content: center;
          display: flex;
          color: #000;
          animation-name: popup;
          animation-duration: 800ms;
        }
        
        .buttons button {
          flex-shrink: 0;
          padding: 10px;
          border-radius: 5px;
          border: none;
          color: #fff;
          font-size: 18px;
          background-color: #9198e5;
          transition: 200ms;
          width: 40%;
          font-weight: bolder;
          width: 160px;
          box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.10);
        }

        @keyframes popup {
          0%   { transform: scale(1,1) }
          10%  { transform: scale(1.1,1.1) }
          30%  { transform: scale(.9,.9) }
          50%  { transform: scale(1,1) }
          57%  { transform: scale(1,1) }
          64%  { transform: scale(1,1) }
          100% { transform: scale(1,1) }
        }
        .tinder-cards-buttons {
          display: flex;
          width: 70%;
          margin: 16px auto;
          justify-content: space-around;
        }

        .tinder-cards-button {
          border: 2px solid ${COLOR.SECONDARY};
          border-radius: 100%;
          background: ${COLOR.PRIMARY};
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
        }
        
      `}
      </style>
    </>
  );
};

export default Staycation;
