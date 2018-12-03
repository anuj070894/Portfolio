import React, { Component } from 'react';
import className from "classnames";
import {Link} from 'react-router-dom';
import './main-page.css';

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.mainContainerRef = React.createRef();
	}

	componentDidMount() {
		if (window.innerWidth < 1024) {
			window.scrollTo({top: this.mainContainerRef.current.offsetTop, behavior: "smooth"});
		}
	}

  render() {
	const buttonClasses = className('main-page-home-buttons-item', 'main-page-home-buttons-item-white', 'main-page-home-buttons-item-outline');
    return (
      <div className="main-page-container" ref={this.mainContainerRef}>
		  <div className="main-page-container-inner">
			  <div className="main-page-container-home-section">
				  <div className="main-page-container-home-section-inner">
					  <div className="main-page-container-home-section-heading">
						  Hi, I'm Anuj Kumar.
					  </div>
					  <div className="main-page-container-home-section-subheading">
						  I am a full-stack web developer working on both <b>front-end and back-end development.</b>
					  </div>
					  <div className="main-page-home-buttons">
					      <Link to="/portfolio" className={buttonClasses}>
						  Portfolio</Link>
						  <br />
						  <Link to="/skills" className={buttonClasses}>
						  Skills</Link>
					  </div>
				  </div>
			  </div>
		  </div>
      </div>
    );
  }
}

export default MainPage;
