import { useState } from "react";
import { COLOR } from "../../constants/Style";

import City1 from "../../images/city-1.jpg";
import City2 from "../../images/city-2.jpg";
import City3 from "../../images/city-3.jpg";

const cities = [City1, City2, City3];

const CityDetail = () => {
  const [selected, setSelected] = useState(City1);

  return (
    <div className="city-detail">
      <div className="city-detail-images">
        <img className="city-detail-images-preview" src={selected} alt="" />
        <div className="city-detail-images-thumbs">
          {cities.map((city, idx) => (
            <img
              src={city}
              key={idx}
              alt=""
              className={`city-detail-images-thumb ${
                city === selected ? "city-detail-images-thumb-active" : ""
              }`}
              onClick={() => setSelected(city)}
            />
          ))}
        </div>
      </div>
      <div className="city-detail-content">
        <h4>West Jakarta, Jakarta</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum,
          massa vitae, in non, ut. Aliquet amet velit, ac tortor. At at arcu,
          maecenas sed risus, velit, sagittis, vitae. Est maecenas tellus congue
          velit ultricies natoque. Massa lacus, duis in blandit. Nisl velit
          commodo ultricies diam. Netus sed.
        </p>
        <strong>What to Expect?</strong>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <strong>Recommended for you who...</strong>
        <ul>
          <li>Likes to travel alone.</li>
          <li>Have 2-3 days for staycation.</li>
          <li>Lives nearby.</li>
        </ul>
      </div>
      <button
        className="city-detail-button"
        style={{ background: COLOR.TERTIARY, color: COLOR.LIGHT }}
      >
        Continue
      </button>
      <style>
        {`
              .city-detail {
                width: 315px;
                margin: 0 auto;
              }

              .city-detail-images {
                width: 100%;
              }

              .city-detail-images-preview {
                width: 100%;
                object-fit: cover;
                height: 170px;
                border-radius: 18px 18px 0 0;
                margin-bottom: 8px;
              }

              .city-detail-images-thumbs {
                display: flex;
              }

              .city-detail-images-thumb {
                width: 0px;
                flex-grow: 1;
              }

              .city-detail-images-thumb:first-of-type {
                border-radius: 0 0 0 18px;
              }

              .city-detail-images-thumb:last-of-type {
                border-radius: 0 0 18px 0;
              }

              .city-detail-images-thumb:not(:last-of-type) {
                margin-right: 8px;
              }

              .city-detail-images-thumb-active {
                border: 3px solid ${COLOR.SECONDARY}
              }

              .city-detail-content h4 {
                margin-top: 18px;
                font-weight: 700;
                text-align: center;
              }

              button.city-detail-button {
                width: 100%;
                border-radius: 8px;
                padding: 8px;
                font-weight: 600;
                margin-bottom: 5vh;
              }
        `}
      </style>
    </div>
  );
};

export default CityDetail;
