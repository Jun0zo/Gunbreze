import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './content_2.css'

const { kakao } = window;



const Content2 = (props) => {
	const [adr, setAdr] = useState('')
	const getGPS = (callbackFc) => {
		navigator.geolocation.getCurrentPosition(function(position) {
			callbackFc(position.coords.latitude, position.coords.longitude)
		});
	}
	
	const getAddress = (callbackFc, lat, lon) => {
		const geocoder = new window.kakao.maps.services.Geocoder();
		let coord = new kakao.maps.LatLng(lat, lon)
		geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
			callbackFc(result[0].address.address_name)
		});
	}
	
	const nextPage = () =>{
		console.log("req db")
		axios.post('https://db-server:3001/add', {
			
		}).then(res => {
			console.log('db res : ', res)
		})
		props.setPage({
		  state_1: false,
		  state_2: false,
		  state_3: true,
	   })
	}
	
	useEffect(() => {
		getGPS((lat, lon) => {
				const address = getAddress(address => {
					const container = document.getElementById('map')
					const options = { center: new window.kakao.maps.LatLng(lat, lon), 
									 level: 3 }; 
					const map = new kakao.maps.Map(container, options)
					var markerPosition  = new kakao.maps.LatLng(lat, lon); 

					var marker = new kakao.maps.Marker({
						position: markerPosition
					});

					marker.setMap(map);
					setAdr(address)
					console.log(address, adr)
			},lat, lon)
		})
	 }, [])
	
	return(
		<section className={'content_2 ' + (props.page_state.state_2 ? 'activate' : '')}>
			<div className="modal-wrapper">
				<div className="title">
					<span className="address"> {adr} </span><br/>
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