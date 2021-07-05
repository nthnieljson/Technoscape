import React, { useContext, useState } from "react";
import { COLOR } from "../../constants/Style";
import { DataContext } from "../../context/data";
import gopay from "../../images/gopay.png";
import ovo from "../../images/ovo.png";

const Checkout = () => {
  const [showTransfer, setShowTransfer] = useState(false);
  const { chosenDestination } = useContext(DataContext);

  const handleClick = (e) => {
    e.preventDefault();
    setShowTransfer(true);
  };

  const findTotalPrice = () => {
    let total = 0;
    chosenDestination.map((destination) => {
      total += destination.price;
    });

    return total;
  };

  const itineraries = [
    {
      name: "Free Breakfast for 2 people",
      price: "Free",
    },
    {
      name: "Breakfast",
      price: "IDR 35K / person / day",
    },
    {
      name: "Access to Gym",
      price: "IDR 100K",
    },
    {
      name: "Access to Spa",
      price: "IDR 50K",
    },
    {
      name: "Bird Hunting",
      price: "IDR 40K / person",
    },
  ];

  return (
    <div>
      <h4 className="center checkout">Checkout</h4>
      {chosenDestination.map((destination) => {
        return (
          <div className="mb-4">
            <div className="split penginapan">
              <p
                style={{
                  color: COLOR.DARK,
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                }}
              >
                {destination.name}
              </p>
              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                IDR {destination.price}K
              </p>
            </div>
            {showTransfer ? (
              ""
            ) : (
              <>
                <div className="d-flex justify-content-between">
                  <div
                    style={{
                      width: "45%",
                    }}
                  >
                    <p>Start Date</p>
                    <input
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "45%",
                    }}
                  >
                    <p>End Date</p>
                    <input
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    Itineraries
                  </p>
                  {itineraries.map((event) => {
                    return (
                      <div
                        className="d-flex mt-2 mb-2 align-items-center"
                        style={{
                          padding: "2rem 1rem",
                          backgroundColor: "rgba(255,255,255,0.5)",
                          borderRadius: "10px",
                          border: `1px solid ${COLOR.DARK}`,
                        }}
                      >
                        <input type="checkbox" value={event.name} />
                        <div className="ml-4">
                          <p>{event.name}</p>
                          <p>{event.price}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        );
      })}
      <hr />
      <div className="split">
        <p className="p-bold">Total</p>
        <h4 className="tertiary">IDR {findTotalPrice()}K</h4>
      </div>
      {showTransfer ? (
        <div className="stage-two">
          <p
            className="p-bold center"
            style={{ marginTop: "28px", marginBottom: "16px" }}
          >
            Payment Methods
          </p>
          <div className="split">
            <div className="payment-container">
              <img className="payment-method" src={ovo} alt="ovo logo" />
            </div>
            <div className="payment-container">
              <img className="payment-method" src={gopay} alt="gopay logo" />
            </div>
          </div>
          <input
            className="p-bold submit-btn"
            type="submit"
            value="Bank Transfer"
          />
        </div>
      ) : (
        <div className="stage-one">
          <p
            className="p-bold center"
            style={{ marginTop: "28px", marginBottom: "16px" }}
          >
            Contact Information
          </p>
          <p>
            Seems like you haven’t created an account yet. Don’t worry, we’ve
            made it easy for you to register during the checkout process. Please
            input your data in the form below. You will be able to proceed to
            payment methods after registering.
          </p>
          <p className="p-bold tertiary" style={{ paddingTop: "4px" }}>
            I have an account
          </p>
          <form>
            <div className="input-container">
              <label className="label-container">
                <p className="body-small tag" style={{ paddingTop: "8px" }}>
                  Email
                </p>
                <input
                  className="field"
                  type="text"
                  placeholder="lorem.ipsum@gmail.com"
                />
              </label>
              <label className="label-container">
                <p className="body-small tag">Password</p>
                <input className="field" type="text" placeholder="Password" />
              </label>
              <label className="label-container">
                <p className="body-small tag">Full Name</p>
                <input
                  className="field"
                  type="text"
                  placeholder="Your full name"
                />
              </label>
              <label className="label-container">
                <p className="body-small tag">Phone Number</p>
                <input
                  className="field"
                  type="text"
                  placeholder="+62 000 0000 0000"
                />
              </label>
              <label className="label-container">
                <p className="body-small tag">City</p>
                <input className="field" type="text" placeholder="City name" />
              </label>
              <label className="label-container">
                <p className="body-small tag">Address</p>
                <input
                  className="field address"
                  type="text"
                  placeholder="Your complete address"
                />
              </label>
            </div>
            <input
              className="p-bold submit-btn"
              type="submit"
              onClick={handleClick}
              value="Register now"
            />
          </form>
        </div>
      )}
      <style jsx>
        {`
          .checkout {
            margin-bottom: 11px;
          }

          p {
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            margin: 0;
          }

          h4 {
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 32px;
            margin: 0;
          }

          .p-bold {
            font-size: 16px;
            line-height: 24px;
            margin: 0;
            font-weight: bold;
          }

          .tertiary {
            color: ${COLOR.TERTIARY};
          }

          .label-container {
            width: 100%;
          }

          .body-small {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
          }

          .payment-container {
            width: 150px;
            display: flex;
            justify-content: center;

            /* light */
            background: ${COLOR.LIGHT};
            /* secondary */
            border: 1px solid ${COLOR.SECONDARY};
            box-sizing: border-box;
            border-radius: 12px;
          }

          .payment-method {
            height: 50px;
            margin: 8px 0;
          }

          .center {
            text-align: center;
          }

          .split {
            display: flex;
            justify-content: space-between;
          }

          .penginapan {
            margin-bottom: 8px;
          }

          hr {
            margin-top: 0;
            border: 1px solid ${COLOR.PRIMARY};
          }

          .tag {
            margin-top: 10px;
            margin-bottom: 4px;
          }

          .field {
            width: 100%;
            font-family: inherit;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            padding: 10px 12px;

            /* light */
            background: ${COLOR.LIGHT};

            /* secondary */
            border: 2px solid ${COLOR.SECONDARY};
            box-sizing: border-box;
            border-radius: 8px;
          }

          .address {
            padding-bottom: 54px;
          }

          .submit-btn {
            font-family: inherit;
            color: ${COLOR.LIGHT};
            width: 100%;
            margin-top: 20px;
            margin-bottom: 37px;
            height: 45px;

            /* tertiary */
            background: ${COLOR.TERTIARY};
            /* tertiary */
            border: 1px solid ${COLOR.TERTIARY};
            box-sizing: border-box;
            border-radius: 8px;
          }
        `}
      </style>
    </div>
  );
};

export default Checkout;
