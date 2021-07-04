import { useState } from "react";
import { COLOR } from "../../constants/Style";

import StarIcon from "../../assets/icons/star.svg";
import City1 from "../../images/city-1.jpg";
import City2 from "../../images/city-2.jpg";
import City3 from "../../images/city-3.jpg";
import Review1 from "../../images/review-1.png";
import Review2 from "../../images/review-2.png";

const cities = [City1, City2, City3];

const CityDetail = () => {
  const [selected, setSelected] = useState(City1);
  const [opened, setOpened] = useState(false);

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
        <h4>Hotel A</h4>
        <div className="city-detail-content-info">
          <div className="city-detail-content-info-rating">
            Rating: 4.9 <img src={StarIcon} alt="" />
          </div>
          <div className="city-detail-content-info-cost">IDR 250k/day</div>
        </div>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum,
          massa vitae, in non, ut. Aliquet amet velit, ac tortor. At at arcu,
          maecenas sed risus, velit, sagittis, vitae. Est maecenas tellus congue
          velit ultricies natoque. Massa lacus, duis in blandit. Nisl velit
          commodo ultricies diam. Netus sed.
        </p>
        <strong>Facilities</strong>
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
        <strong>Reviews (4)</strong>
        <div className="staycation-review">
          <img src={Review1} className="staycation-review-img" alt="" />
          <div className="staycation-review-title">Nathaniel Jason</div>
          <div className="staycation-review-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            corporis dolorem voluptatem esse autem optio.
          </div>
        </div>
        <div className="staycation-review">
          <img src={Review2} className="staycation-review-img" alt="" />
          <div className="staycation-review-title">James Chandra</div>
          <div className="staycation-review-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            corporis dolorem voluptatem esse autem optio.
          </div>
        </div>
        {opened && (
          <>
            <div className="staycation-review">
              <img src={Review1} className="staycation-review-img" alt="" />
              <div className="staycation-review-title">MDR Faza</div>
              <div className="staycation-review-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                corporis dolorem voluptatem esse autem optio.
              </div>
            </div>
            <div className="staycation-review">
              <img src={Review2} className="staycation-review-img" alt="" />
              <div className="staycation-review-title">
                Christopher Ivan Gunardi
              </div>
              <div className="staycation-review-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                corporis dolorem voluptatem esse autem optio.
              </div>
            </div>
          </>
        )}
        {!opened && (
          <p
            style={{
              color: COLOR.TERTIARY,
              fontWeight: 700,
              textAlign: "center",
            }}
            className="staycation-review-see-all"
            onClick={() => {
              setOpened(true);
            }}
          >
            See all reviews
          </p>
        )}
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
                margin: 18px 0 12px;
                font-weight: 700;
                text-align: center;
              }

              .city-detail-content-info-rating, .city-detail-content-info-cost {
                color: ${COLOR.SECONDARY};
                font-weight: 700;
                margin-bottom: 24px;
              }

              .city-detail-content-info-rating {
                float: left;
              }

              .city-detail-content-info-cost {
                float: right;
              }

              button.city-detail-button {
                width: 100%;
                border-radius: 8px;
                padding: 8px;
                font-weight: 600;
                margin: 16px 0 5vh;
              }

              .staycation-review {
                display: grid;
                grid-template-areas: 'photo title' '. desc';
                grid-column-gap: 20px;
                margin-top: 12px;
              }

              .staycation-review-img {
                grid-area: photo;
              }

              .staycation-review-title {
                grid-area: title;
                color: ${COLOR.SECONDARY};
                font-weight: 600;
              }

              .staycation-review-desc {
                transform: translateY(-10px);
                grid-area: desc;
              }
              
              .staycation-review-see-all:hover {
                cursor: pointer;
              }
        `}
      </style>
    </div>
  );
};

export default CityDetail;
