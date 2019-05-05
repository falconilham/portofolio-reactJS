import React, { Component } from 'react';
//import Loading from 'react-fullscreen-loading';

class Header extends Component {
	render(){
		return(
			<div className="header">
				<div className="item item1">
					Home
				</div>
				<div className="item item1">
					Profile
				</div>
				<div className="item item1">
					Career
				</div>
				<div className="item item1">
					Skill
				</div>
				<div className="item item1">
					Education
				</div>
			</div>
		)
	}
}

export default Header;