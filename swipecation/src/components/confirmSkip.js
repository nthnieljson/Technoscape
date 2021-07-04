import React from "react";
const ConfirmSkip = () =>{
    return(
        <div className="container">
            <div style={{padding:".75rem 2rem"}}>
                <h4 className="h4-tertiary text" >Are you sure you want to skip the process?</h4>
                <p className = "p-bold text" >The personalized recommendations for you will be less accurate</p>
                <div className="butt-con" style={{display:"flex", justifyContent:"space-between"}}>
                    <button className="button" style={{
                            color: "#EE5E1A",
                            backgroundColor: "transparent",
                            borderColor: "#EE5E1A",
                    }}>Cancel</button>
                    <button className="button" style={{
                        border: "none",
                        backgroundColor: "#EE5E1A",
                        color: "#F5FDFF",
                    }}>Skip</button>
                </div>
            </div>
            <style>
                {`
                    body, html {
                        font-family: 'Montserrat', sans-serif;
                        color: #371B0E;
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
                    .text{
                        text-align : left;
                        color: #EE5E1A;
                        margin-bottom: 2rem;
                    }
                    .h4-tertiary{
                        font-size: 1.25rem;
                    }
                    .p-bold{
                        font-size: 1rem;
                    }
                `}
            </style>
        </div>
    )
}
export default ConfirmSkip;