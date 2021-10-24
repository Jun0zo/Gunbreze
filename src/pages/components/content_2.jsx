import React, { Component } from 'react';
import './content_2.css'


const Content2 = (props) => {
	const getPosition = () => {
		navigator.geolocation.getCurrentPosition(function(position) {
		  console.log("Latitude is :", position.coords.latitude);
		  console.log("Longitude is :", position.coords.longitude);
		  return position.coords;
		});
	}
	
	const nextPage = () =>{
		props.setPage({
		  state_1: false,
		  state_2: false,
		  state_3: true,
	   })
	}
	return(
		<section className={'content_2 ' + (props.page_state.state_2 ? 'activate' : '')}>
			<div className="modal-wrapper">
				<div className="title">
					<span> 경기도 고양시 일산서구 주엽동 </span><br/>
					<span> 이곳이 맞나요? </span><br/>
				</div>
				<div className="map">
					<div id="map"></div>
				</div>
				<div className="report">
					<button className="ui inverted blue button" onClick={nextPage}>✨ 네!맞아요 ✨</button>
				</div>

			</div>

		</section>
	)
}

export default Content2;