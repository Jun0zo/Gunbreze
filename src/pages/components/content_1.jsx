import React, { Component } from 'react';
import './content_1.css'

const Content1 = (props) => {
	const report = () => {
		props.setPage({
		  state_1: false,
		  state_2: true,
		  state_3: false,
	   })
	}
	return(
		<section className={'content_1 ' + (props.page_state.state_1 ? 'activate' : '')}>
			<div className="modal-wrapper">
				<div className="title">
					<span> <span className='effect-1'>나</span>를 위해</span><br/>
					<span> <span className='effect-2'>우리</span>를 위해</span><br/>
					<span> <span className='effect-3'>지구</span>를 위해</span><br/>
				</div>
					<div className="call">
						<span>오늘 제보된 건수</span>
							---
					</div>
				<div className="report">
					<button className="ui inverted red button" onClick={report}>🚨 신고하기 🚨</button>
				</div>

				<div className="show">
					<div className="s-emoji effect-1"><i className="fas fa-user"></i></div>
					<div className="s-emoji effect-2"><i className="fas fa-users"></i></div>
					<div className="s-emoji effect-3"><i className="fas fa-globe-americas"></i></div>
				</div>

			</div>

		</section>
	)
}

export default Content1;