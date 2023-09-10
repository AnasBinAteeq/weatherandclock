import React, { useState, useEffect } from "react";
import "../styles/Welcome.css";
import building from "../assets/buildings.png";
import axios from "axios";

function WelcomePage() {
  const [ipInfo, setIpInfo] = useState({
    ip:"Loading ...",
    city:"Loading ...",
    country:"Loading ..."
  });

  const fetchIpAddress = async () => {
    await axios
      .get("http://ip-api.com/json/")
      .then(
        response => {
            console.log(response.data.query);
            const { query, city, country } = response.data;
            const ipInfoObject = { ip: query, city, country };
            setIpInfo(ipInfoObject);
        })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchIpAddress(); // Fetch IP address when the component mounts
  }, []);

  return (
    <div className="Container">
      <div className="Row d-flex justify-content-center align-items-center WelcomeContent">
        <div className="col-8 text-center WelcomeColumn">
          <img src={building} className="Building" />
          <div className="Title">
            <div className="Weather">Weather</div>
            <div className="Clock">
              <span>& Clock</span>
            </div>
          </div>
          <div className="WelcomeLocation m-3 d-flex justify-content-between">
            <div>IP Address: <span className="ipDetail">{ipInfo.ip}</span></div>
            <div>City: <span className="ipDetail">{ipInfo.city}</span></div>
            <div>Country: <span className="ipDetail">{ipInfo.country}</span></div>
          </div>
          <a className="Continue" href="/weather">
            Continue
          </a>
        </div>
      </div>
    </div>
  );
}
export default WelcomePage;
