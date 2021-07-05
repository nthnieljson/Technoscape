import React, { useState, useMemo, useContext, useEffect } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";
import SkipIcon from "../../assets/icons/swipe-cross.svg";
import ChooseIcon from "../../assets/icons/swipe-love.svg";
import { DESTINATION_DATA } from "../../constants/Destination";
import { COLOR } from "../../constants/Style";
import { DataContext } from "../../context/data";

const db = DESTINATION_DATA;

const alreadyRemoved = [];
const chosenDestination = [];
let charactersState = db; // This fixes issues with updating destinations state forcing it to use the current state and not the state that was active when the card was created.

const Staycation = () => {
  const [destinations, setDestinations] = useState(db);
  const [lastDirection, setLastDirection] = useState();
  const { handleAddChosenDestination, setProcessNo } = useContext(DataContext);
  const [showDetail, setShowDetail] = useState(false);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, destination) => {
    const nameToDelete = destination.name;
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    console.log(direction);
    alreadyRemoved.push(nameToDelete);
    if (direction === "right") {
      chosenDestination.push(destination);
    }
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

  useEffect(() => {
    return () => {
      handleAddChosenDestination(chosenDestination);
    };
  }, []);

  return showDetail ? (
    <>
      <div>
        <button onClick={() => setShowDetail(false)}>back</button>
        <div
          style={{
            backgroundImage: `url(../../images/${
              destinations[destinations.length - 1].url
            })`,
            position: "relative",
            width: "100%",
            height: "400px",
            borderRadius: "10px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="mb-4"
        ></div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.5)",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              margin: "0",
              fontWeight: "600",
              color: COLOR.DARK,
              fontSize: "1.15rem",
            }}
          >
            {destinations[destinations.length - 1].name}
          </p>
          <p
            style={{
              fontSize: ".9rem",
            }}
            className="mb-2"
          >
            {destinations[destinations.length - 1].location}
          </p>
          <p
            style={{
              fontSize: ".9rem",
              color: COLOR.DARK,
              fontWeight: "600",
            }}
            className="mt-4 mb-5"
          >
            {destinations[destinations.length - 1].description}
          </p>
          <div className="d-flex justify-content-end">
            <p
              style={{
                fontSize: ".9rem",

                fontWeight: "600",
              }}
            >
              IDR {destinations[destinations.length - 1].price}K / night
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div>
        {chosenDestination.length !== 0 ? (
          <div className="d-flex justify-content-end mb-3">
            <button
              style={{
                color: COLOR.DARK,
                fontWeight: "bold",
              }}
              onClick={() => setProcessNo(3)}
            >
              <u>Go To Checkout</u>
            </button>
          </div>
        ) : (
          ""
        )}

        <div
          className="d-flex justify-content-center"
          style={{
            height: "505px",
          }}
        >
          {destinations.map((destination, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={destination.name}
              onSwipe={(dir) => swiped(dir, destination)}
              onCardLeftScreen={() => outOfFrame(destination.name)}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.1)",
                  borderRadius: "20px",
                  padding: ".5rem",
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(../../images/${destination.url})`,
                    position: "relative",
                    width: "80vw",
                    height: "400px",
                    borderRadius: "10px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="card"
                ></div>
                <h3
                  style={{
                    bottom: "0",
                    margin: "1rem 0 0",
                    color: COLOR.DARK,

                    borderRadius: "7.5px",
                    fontSize: "1.15rem",
                    fontWeight: "600",
                  }}
                  className="ml-3"
                >
                  {destination.name}
                </h3>
                <p
                  style={{
                    margin: ".25rem 0 1rem",
                    fontWeight: "500",
                    fontSize: ".875rem",
                    color: COLOR.ACCENT_1,
                  }}
                  className="ml-3"
                >
                  {destination.location}
                </p>
              </div>
            </TinderCard>
          ))}
        </div>
        {destinations.length !== 0 ? (
          <div className="d-flex justify-content-end mt-0">
            <button
              style={{
                margin: "0 1rem",
                fontWeight: "500",
                fontSize: ".875rem",
                color: COLOR.DARK,
              }}
              className="mr-3"
              onClick={() => setShowDetail(true)}
            >
              <u>See Detail</u>
            </button>
          </div>
        ) : (
          ""
        )}
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

        .tinder-cards-buttons {
          display: flex;
          width: 80%;
          margin: 2.5rem auto;
          justify-content: space-around;
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: .25rem 0;
          box-shadow: 0px 0px 11px 5px rgba(0, 0, 0, 0.1);
        }
  
        
      `}
      </style>
    </>
  );
};

export default Staycation;
