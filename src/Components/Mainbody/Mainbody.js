import React, { useContext } from "react";
import { AppContext } from "../Helpers/Helpers";
import "./Mainbody.css";

const Mainbody = ({ activity }) => {
  const { displayActivity, handleFunctions } = useContext(AppContext);

  return (
    <div className="MainBodyContainer">
      <div className="logoImg">
        <img src="./googleLogo.svg" alt="img" />
      </div>
      <div className="BoredCard">
        <button onClick={handleFunctions}>
          Bored?? get a random activity{" "}
        </button>
        {displayActivity ? <p> Random Activity: {activity.activity}</p> : " "}
      </div>
      {console.log(activity.activity)}
    </div>
  );
};

export default Mainbody;
