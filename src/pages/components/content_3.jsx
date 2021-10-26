import React from 'react';
import './content_3.css'


const Content3 = (props) => {
	const report = () => {
		console.log("report!")
	}
	
	return(
		<section className={'content_3 ' + (props.page_state.state_3 ? 'activate' : '')}>
			<div className="modal-wrapper">
				<div className="title">
					<span> 접수완료 </span><br/>
					<span> 🎉 신고해 주셔서 감사합니다! 🎉</span><br/>
					<span> 우리 동네를 살펴보세요! </span><br/>
				</div>
				<div className="report">
					<button className="ui inverted blue button" onClick={report}> 살펴보기 </button>
				</div>

			</div>

		</section>
	)
}

export default Content3;