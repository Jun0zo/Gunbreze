import React, { useState } from 'react';
import Content1 from './components/content_1';
import Content2 from './components/content_2';
import Content3 from './components/content_3';
import './Main.css';
// 겨울을 걷는다
const Main = () => {
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
			<Content1 setPage={setStates} page_state={states}/>
			<Content2 setPage={setStates} page_state={states}/>
			<Content3 setPage={setStates} page_state={states}/>
	   </div>
		
      </div>
    );
}
export default Main;