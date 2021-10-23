import React, { useState } from 'react';
import Content1 from './components/content_1';
import Content2 from './components/content_2';
import './Main.css';
// 겨울을 걷는다
function Main (){
	const [states, setStates] = useState({
    	state_1: false,
		state_2: true,
		state_3: false,
    });
	
  function gotoPage1() {
	  console.log("gotoPage1")
	  setStates({
		  state_1: true,
		  state_2: false,
		  state_3: false,
	  })
  }
  function gotoPage2() {
	  console.log("gotoPage2")
	  setStates({
		  state_1: false,
		  state_2: true,
		  state_3: false,
	  })
  }
  function gotoPage3() {
	  setStates({
		  state_1: false,
		  state_2: false,
		  state_3: true,
	  })
  }
	
  function report() {
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
			<Content1 nextPage={this.gotoPage2} page_state={this.state}/>
			<Content2 prevPage={this.gotoPage1} nextPage={this.gotoPage3} page_state={this.state}/>
			
			
			<section className="content_3">
				<div >
					abc
				</div>
			</section>
	   </div>
		
      </div>
    );
}
export default Main;