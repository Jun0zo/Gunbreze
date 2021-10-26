import React, { useState } from 'react';
import './Main.css';
// 겨울을 걷는다
const Dashboard = () => {
	const [states, setStates] = useState({
    	state_1: true,
		state_2: false,
		state_3: false,
    });
	
  const report = () =>  {
	  navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }
    return (
      <div className="App">
			
		<div className="navbar">
			<span className="c1">군브리즈 <span className="c2">AIR</span> </span>
		  
		</div>
			
		<div className="contents">
			<div></div>
	   </div>
		
      </div>
    );
}
export default Dashboard;