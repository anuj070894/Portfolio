import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './main-page.css';
import './contact-page.css';
import './about-page.css';

class AboutPage extends Component {
  render() {
	return (
	  <div className="main-page-container">
		  <div className="main-page-container-inner">
			  <div className="contact-page-main-section">
				  <div className="contact-page-main-section-title">
				      About Me
				  </div>
				  <p>
					  <em>
						  Working as a Full-stack web developer at Adobe Systems, Bangalore. Includes technologies - React, Redux, NodeJS and React-native. Working on web since my 1st year of college(appx. 6 years)
					  </em>
				  </p>
				  <p>
					  Looking for new opportunities and freelancing work on web development.
				  </p>
				  <p>
					  <strong>
					  	(To know about what I can offer as a developer & more, check out <Link to="/skills" className="about-page-skills-link">My Skills</Link>.)
					  </strong>
				  </p>
			  </div>
		  </div>
	  </div>
    );
  }
}

export default AboutPage;
