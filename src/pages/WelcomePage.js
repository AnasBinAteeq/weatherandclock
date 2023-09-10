import React from "react";
import "../styles/Welcome.css";

function WelcomePage() {
  return (
    <div className="Container">
      <div className="Row d-flex justify-content-center align-items-center WelcomeContent">
        <div className="col-8 text-center WelcomeColumn">
          <div className="Title">
            <div className="Weather">Weather</div>
            <div className="Clock">
              <span>& Clock</span>
            </div>
          </div>
          <a className="Continue" href="/weather">Continue</a>
        </div>
      </div>
      
    </div>
  );
}
export default WelcomePage;
