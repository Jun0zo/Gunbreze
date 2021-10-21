import React, { Component } from 'react';
import Content_1 from './components/content_1';
import Content_2 from './components/content_2';
import './Main.css';
// 겨울을 걷는다
class Main extends Component {
  constructor(props) {
	  super(props)
	  this.state = {cur_state:1}
	  console.log('start!')
  }
	
  componentDidMount() {
    console.log('body!')
	
  }
	
  report() {
	  navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }
  render() {
    return (
      <div className="App">
			
		<div className="navbar">
			<span className="c1">군브리즈 <span className="c2">AIR</span> </span>
		  
		</div>
			
		<div className="contents">
		  <section className="hid"></section>
		
		  <Content_1/>
		  <Content_2/>
			
		<section className="content_3">
			<div >
				abc
			</div>
		</section>
	   </div>
		
      </div>
    );
  }
}
export default Main;