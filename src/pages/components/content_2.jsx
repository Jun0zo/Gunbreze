import React, { Component } from 'react';
import './content_2.css'


class Content2 extends Component {
	getPosition() {
		navigator.geolocation.getCurrentPosition(function(position) {
		  console.log("Latitude is :", position.coords.latitude);
		  console.log("Longitude is :", position.coords.longitude);
		  return position.coords;
		});
	}
	render() {
		return(
			<section className="content_2">
				<div className="modal-wrapper">
					<div className="title">
						<span> 경기도 고양시 일산서구 주엽동 </span><br/>
						<span> 이곳이 맞나요? </span><br/>
					</div>
					<div className="map">
						<div id="map"></div>
					</div>
					<div className="report">
						<button className="ui inverted blue button" onClick={this.getPosition}>✨ 네!맞아요 ✨</button>
					</div>

				</div>

			</section>
		)
	}
}

export default Content2;