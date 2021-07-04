import React from 'react';

const Checkout = () => {
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
      <p className="p-bold center" style={{marginTop: "28px", marginBottom: "16px"}}>Contact Information</p>
      <p>
        Seems like you haven’t created an account yet. Don’t worry, 
        we’ve made it easy for you to register during the checkout process. 
        Please input your data in the form below. You will be able to proceed 
        to payment methods after registering.
      </p>
      <p className="p-bold tertiary">I have an account</p>
      <form>
        <div className="input-container">
          <label>
            <p className="body-small tag">Email</p>
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
            <input className="field" type="text" placeholder="Your complete address" />
          </label>
        </div>
        <input className="p-bold submit-btn" type="submit" value="Register now" />
      </form>
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
  );
};

export default Checkout;