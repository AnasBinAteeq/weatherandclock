import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import WeatherPage from "./pages/WeatherPage";
import ClockPage from "./pages/ClockPage";
import DeveloperPage from "./pages/DeveloperPage";
import AboutPage from "./pages/AboutPage";
import React, { useState} from "react";
import axios from "axios";
import AppContext from "./components/AppContext";

function App() {
  const [ipInfo, setIpInfo] = useState({
    ip: "Loading ...",
    city: "Loading ...",
    country: "Loading ...",
  });

  const fetchIpAddress = async () => {
    await axios
      .get("http://ip-api.com/json/")
      .then((response) => {
        console.log(response.data.query);
        const { query, city, country } = response.data;
        const ipInfoObject = { ip: query, city, country };
        setIpInfo(ipInfoObject);
      })
      .catch((err) => console.log(err));
  };

  const globalVariables = {
    ipInformation : ipInfo,
    fetchIpAddress,
  };
  return (
    <AppContext.Provider value={globalVariables}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<WelcomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/clock" element={<ClockPage />} />
          <Route path="/developer" element={<DeveloperPage />} />
          <Route path="/aboutus" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
    </AppContext.Provider>
  );
}

export default App;
