import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { COLOR } from "../constants/Style";
import { DataContext } from "../context/data";
import HomeLogo from "../images/logo-home.png";

const Home = () => {
  const { setProcessNo } = useContext(DataContext);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <img src={HomeLogo} className="mt-5" />
        <div
          style={{
            width: "60%",
          }}
        >
          <p
            style={{
              marginTop: "8rem",
              fontWeight: "600",
              fontSize: "1.5rem",
              color: COLOR.DARK,
            }}
            className="text-center"
          >
            Find your dream staycation
          </p>
        </div>
        <div
          style={{
            width: "60%",
          }}
        >
          <p
            style={{
              fontWeight: "500",
              fontSize: ".8rem",
              color: COLOR.ACCENT_1,
            }}
            className="text-center"
          >
            Your destination is only a few swipes away
          </p>
        </div>

        <button
          onClick={() => setProcessNo(0)}
          style={{
            marginTop: "5rem",
            background: "rgba(255, 255, 255, 0.3)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "19px",
            width: "100%",
            padding: "1rem 0",
          }}
        >
          <Link
            to="/booking/create"
            style={{
              color: COLOR.DARK,
              fontWeight: "bold",
              fontSize: "1.15rem",
            }}
          >
            Start Swiping!
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;
