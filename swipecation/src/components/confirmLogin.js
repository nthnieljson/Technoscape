import eye from "../images/eye.png"
import React from "react";
const ConfirmLogin = () =>{
    return(
        <div className="container">
            <div style={{padding:".75rem 2rem"}}>
                <h4 className="h4-tertiary text" >Login</h4>
                <p className = "body-small text" >Email</p>
                <div className="input-container text input">
                    <input placeholder="email"/>
                </div>
                <p className = "body-small text" >Password</p>
                <div className="input-container text input">
                    <input placeholder="password"/>
                    <img src={eye} alt="eye" />
                </div>
                <div  style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
                    <div className="flex-item">
                        <button className="button" style={{
                                color: "#EE5E1A",
                                backgroundColor: "transparent",
                                borderColor: "#EE5E1A",
                        }}>Cancel</button>
                    </div>
                    <div className="flex-item">
                        <button className="button" style={{
                            border: "none",
                            backgroundColor: "#EE5E1A",
                            color: "#F5FDFF",
                        }}>Login</button>
                    </div>
                </div>
            </div>
            <style>
                {`
                    body, html {
                        font-family: 'Montserrat', sans-serif;
                    }
                    .container{
                        margin:auto;
                        border-radius: 12px;
                        width: 84%;
                        height: 46%;
                        border-style:solid;
                        border-width: 2px;
                        border-color: #FFE577;
                        background-color: #F5FDFF;
                    }  
                    .button{
                        border-radius: 8px;
                        font-weight: 700;
                        height: 39.2px;
                        width:  117.76px;
                        font-size: 1rem;
                    }
                    .h4-tertiary{
                        font-size: 1.25rem;
                        margin-bottom: 0px;
                    }
                    .text{
                        text-align : left;
                        color: #EE5E1A;
                    }
                    .body-small{
                       font-size: .875rem; 
                       margin:0px;
                       padding: .5rem 0rem;
                    }
                    .input-container {
                        padding: .5rem .25rem;
                        border-radius: 10px;
                        border: 2px solid #FFA440;
                    }
                    input{
                        border: none;
                        font-size: 1rem;
                        background-color: transparent;
                        color: #371B0E;
                        width: 100%
                    }
                    input::placeholder {
                        color: #c7c7c7;
                        font-size: 1rem;
                    }
        
                    input:focus {
                        outline: none;
                    }
                    .flex-item{
                        padding-top: 1.75rem;
                    }
                    .input{
                        display:flex;
                        justify-content:space-between;
                    }
                `}
            </style>
        </div>
    )
}
export default ConfirmLogin;