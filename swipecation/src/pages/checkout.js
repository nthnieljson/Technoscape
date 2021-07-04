import React, { useState } from 'react';
import gopay from './images/gopay.png';
import ovo from './images/ovo.png';

const Checkout = () => {
  const [showTransfer, setShowTransfer] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowTransfer(true);
  }

  return (
    <div className="container">
      <h4 className="center checkout">Checkout</h4>
      <div className="split penginapan">
        <p>Penginapan A</p>
        <p>IDR 770K</p>
      </div>
      <div className="split penginapan">
        <p>Penginapan B</p>
        <p>IDR 520K</p>
      </div>
      <hr />
      <div className="split">
        <p className="p-bold">Total</p>
        <h4 className="tertiary">IDR 1290K</h4>
      </div>
      {showTransfer
        ? 
        <div className="stage-two">
          <p className="p-bold center" style={{marginTop: "28px", marginBottom: "16px"}}>Payment Methods</p>
          <div className="split">
            <div className="payment-container">
              <img className="payment-method" src={ovo} alt="ovo logo" />
            </div>
            <div className="payment-container">
              <img className="payment-method" src={gopay} alt="gopay logo" />
            </div>
          </div>
          <input className="p-bold submit-btn" type="submit" value="Bank Transfer" />
        </div>
        :
        <div className="stage-one">
          <p className="p-bold center" style={{marginTop: "28px", marginBottom: "16px"}}>Contact Information</p>
          <p>
            Seems like you haven’t created an account yet. Don’t worry,
            we’ve made it easy for you to register during the checkout process.
            Please input your data in the form below. You will be able to proceed
            to payment methods after registering.
          </p>
          <p className="p-bold tertiary" style={{paddingTop: "4px"}}>I have an account</p>
          <form>
            <div className="input-container">
              <label>
                <p className="body-small tag" style={{paddingTop: "8px"}}>Email</p>
                <input className="field" type="text" placeholder="lorem.ipsum@gmail.com" />
              </label>
              <label>
                <p className="body-small tag">Password</p>
                <input className="field" type="text" placeholder="Password" />
              </label>
              <label>
                <p className="body-small tag">Full Name</p>
                <input className="field" type="text" placeholder="Your full name" />
              </label>
              <label>
                <p className="body-small tag">Phone Number</p>
                <input className="field" type="text" placeholder="+62 000 0000 0000" />
              </label>
              <label>
                <p className="body-small tag">City</p>
                <input className="field" type="text" placeholder="City name" />
              </label>
              <label>
                <p className="body-small tag">Address</p>
                <input className="field address" type="text" placeholder="Your complete address" />
              </label>
            </div>
            <input className="p-bold submit-btn" type="submit" onClick={handleClick} value="Register now" />
          </form>
        </div>
      }
      <style jsx>
        {`
          body, html {
            font-family: 'Montserrat', sans-serif;
            color: #371B0E;

          }
          .container {
            margin: 0 28px;
          }

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
            font-weight: bold;
          }

          .tertiary {
            color: #EE5E1A;
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
            background: #F5FDFF;
            /* secondary */
            border: 1px solid #FFA440;
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
            border: 1px solid #FFE577;
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
            background: #F5FDFF;
            
            /* secondary */
            border: 2px solid #FFA440;
            box-sizing: border-box;
            border-radius: 8px;
          }

          .address {
            padding-bottom: 54px;
          }
          
          .submit-btn {
            font-family: inherit;
            color: #F5FDFF;
            width: 100%;
            margin-top: 20px;
            margin-bottom: 37px;
            height: 45px;

            /* tertiary */
            background: #EE5E1A;
            /* tertiary */
            border: 1px solid #EE5E1A;
            box-sizing: border-box;
            border-radius: 8px;
          }
        `}
      </style>
    </div>
  )
};

export default Checkout;