import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import WelcomePage from './pages/WelcomePage';
import WeatherPage from './pages/WeatherPage';
import ClockPage from './pages/ClockPage';
import GithubPage from './pages/GithubPage';
import DeveloperPage from './pages/DeveloperPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<WelcomePage/>} />
          <Route path="/weather" element={<WeatherPage/>} />
          <Route path="/clock" element={<ClockPage/>} />
          <Route path="/developer" element={<DeveloperPage/>} />
          <Route path="/aboutus" element={<AboutPage/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
