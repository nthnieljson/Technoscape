import React, { useContext } from "react";
import { COLOR } from "../../constants/Style";
import { DataContext } from "../../context/data";

const Navbar = () => {
  const { processNo } = useContext(DataContext);
  const getNavbarTitle = () => {
    switch (processNo) {
      case 0:
        return "My Preferences";
      case 1:
        return "Choose City";
      case 2:
        return "Staycation Location";
      case 3:
        return "Checkout";
      default:
        return (
          <p
            style={{
              background:
                "linear-gradient(92.36deg, #9175DB 0%, #FFB9DB 95.67%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            swipecation
          </p>
        );
    }
  };
  return (
    <>
      <div>
        <div className="container d-flex align-items-center justify-content-between">
          <p
            style={{
              color: COLOR.DARK,
              fontSize: "1rem",
              fontWeight: "bold",
              padding: "1.75rem 0 1rem",
              margin: 0,
              width: "100%",
            }}
            className="text-center"
          >
            {getNavbarTitle()}
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
