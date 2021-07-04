import React, { useContext } from "react";
import { COLOR } from "../../constants/Style";
import { DataContext } from "../../context/data";

const Navbar = () => {
  const { processNo } = useContext(DataContext);
  const getNavbarTitle = () => {
    switch (processNo) {
      case 0:
        return "Your ideal staycation";
      case 1:
        return "Select City";
      case 2:
        return "Staycation Location";
      case 3:
        return "Checkout";
      default:
        return "Swipecation";
    }
  };
  return (
    <>
      <div
        style={{
          backgroundColor: COLOR.PRIMARY,
        }}
      >
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
          <button
            style={{
              color: COLOR.TERTIARY,
              border: `1px solid ${COLOR.TERTIARY}`,
              borderRadius: "8px",
              fontSize: ".75rem",
              fontWeight: "700",
              margin: ".5rem 0 0 1rem",
              padding: ".25rem .5rem",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
