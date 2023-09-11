import React, { useState } from 'react';
import Menu from '../components/Menu';
    
function WeatherPage() {

    const [weatherData, setWeatherData]=useState({});

    

    return (

    <div>
        <Menu />
        <h2>This is Weather Page</h2>
    </div>
    );
}

export default WeatherPage;