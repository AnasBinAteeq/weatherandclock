import React, { useState, useEffect,useContext } from "react";
import "../styles/Welcome.css";
import building from "../assets/buildings.png";
import axios from "axios";
import { Button } from "reactstrap";
import AppContext from "../components/AppContext";
import {useNavigate} from 'react-router-dom';

function WelcomePage() {
  const [ipLoaded, setIpLoaded] = useState(false)
  const WelcomeContext = useContext(AppContext)

  useEffect(() => {
    WelcomeContext.fetchIpAddress(); // Fetch IP address when the component mounts
    setIpLoaded(true);
  }, []);

  const navigate = useNavigate();

  const Continue = () => {
    if(ipLoaded){
      navigate("/weather")
    }
  }

  return (
    <div className="Container">
      <div className="Row d-flex justify-content-center align-items-center WelcomeContent">
        <div className="col-8 text-center WelcomeColumn">
          <img src={building} className="Building" />
          <div className="Title d-flex justify-content-center mb-0">
            <div className="Weather">Weather</div>
            <div className="Clock">
              <span>& Clock</span>
            </div>
          </div>
          <div className="WelcomeLocation d-flex justify-content-around align-items-center m-auto">
            <div>
              IP Address: <span className="ipDetail">{WelcomeContext.ipInformation.ip}</span>
            </div>
            <div>
              City: <span className="ipDetail">{WelcomeContext.ipInformation.city}</span>
            </div>
            <div>
              Country: <span className="ipDetail">{WelcomeContext.ipInformation.country}</span>
            </div>
          </div>
          <div>
          <Button className="Continue m-3" onClick={Continue}>
            Continue
          </Button></div>
        </div>
      </div>
    </div>
  );
}
export default WelcomePage;
