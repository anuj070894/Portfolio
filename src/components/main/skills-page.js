import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import className from "classnames";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './main-page.css';
import './contact-page.css';
import './skills-page.css';

class SkillsPage extends Component {
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
	const nextMainSectionClasses = className('contact-page-main-section', 'contact-page-main-section-next');
	const nextMainSectionTitleClasses = className('contact-page-main-section-title', 'contact-page-main-section-next-title');
	const skillsPageRowClasses = className("skills-page-row", 'skills-page-features');
	const skillsPageRowFeatureClasses = className("skills-page-row-col", 'skills-page-row-col-4', 'skills-page-row-feature');
	return (
		<div className="main-page-container" ref={this.mainContainerRef}>
		  <div className="main-page-container-inner">
			  <div className="contact-page-main-section">
				<div className="contact-page-main-section-title">
					My Skills & Offer
				</div>
				<p>
					I am a <strong>full-stack web developer</strong> with over <strong>two years of experience.</strong>
				</p>
				<p>
					I have worked on <Link to="/portfolio" className="skills-page-link">multiple projects</Link> codebase and few of the web projects from scratch. One that I worked upon that is quite similar to how zeplin, invision works is for <a href="https://www.adobe.com/in/products/xd.html" className="skills-page-link">Adobe XD</a>. It is called as Design Specs and it requires us to implement front-end codebase and back-end to serve the apis that will provide the fonts, styles and measurements related data to render.
				</p>
				<p>
					My current toolset includes <span className="skills-page-toolset">React, Redux, NodeJS, MongoDB, React-native and Electron</span> and all the other various frameworks, libraries and technologies related to them.
				</p>

				<p>
					Feel free to ask me or <Link to="/contact" className="skills-page-link">contact me</Link> for any questions. I can help you in your project in all from the UI mockups, back-end and front-end web development to fixing the design and installing & configuration of the application on staging/production enviroments.
				</p>
				<p>
					<em>Can do fast implementation in terms of web development</em>
				</p>
				<hr />
			  </div>
			  <div className={nextMainSectionClasses}>
				<div className={nextMainSectionTitleClasses}>
					<FontAwesomeIcon icon="edit"></FontAwesomeIcon> Front-end web development
				</div>
				<p>
					<b>I specialise in applications written in <span className="skills-page-color-red">React</span></b> and I am a huge fan of one-way data flow and redux-like architecture, and sometimes applications with plain javascript.
				</p>
				<p>
					My current experience and skills in front-end include:
				</p>
				<ul>
						<li>web development in react: refatoring an existing app architecture, by using redux in the entire application to improve it's extensibility and reliability;</li>
						<li>full integration of front-end development using tools like Webpack with features like automatic code reload, code minifications, multiple environments support,</li>
						<li>doing quick prototypes/mockups of design and UX in <a href="" className="skills-page-link"><span className="skills-page-color-red">Adobe Photoshop</span></a> and <a href=""  className="skills-page-link"><span className="skills-page-color-red">Adobe XD</span></a>;</li>
						<li>knowledge and some amount of experience in JS ecosystem, by using many libraries like React, Redux, Lodash, jQuery, Raphael and many more;</li>
				</ul>
				<div className={skillsPageRowClasses}>
					<div className={skillsPageRowFeatureClasses}>
						<div className="skills-page-feature-icon">
							3
						</div>
						<div className="skills-page-feature-description">
							single page applications done completely in React
						</div>
					</div>
					<div className={skillsPageRowFeatureClasses}>
						<div className="skills-page-feature-icon">
							16
						</div>
						<div className="skills-page-feature-description">
							blogs written about react-native, electron and NodeJS
						</div>
					</div>
					<div className={skillsPageRowFeatureClasses}>
						<div className="skills-page-feature-icon">
							4
						</div>
						<div className="skills-page-feature-description">
							blogs written about advanced javascript
						</div>
					</div>
				</div>
			  	<hr />
			  </div>
			  <div className={nextMainSectionClasses}>
				<div className={nextMainSectionTitleClasses}>
					<FontAwesomeIcon icon="code"></FontAwesomeIcon> Back-end web development
				</div>
				<p>
					<b>In back-end development, my current stack invloves <span className="skills-page-color-red">NodeJS</span></b>.
				</p>
				<p>
					Nearly every app I have done in the past had the back-end written in NodeJS.
				</p>
				<p>
					What I can do is:
				</p>
				<ul>
						<li>lead development of web apps in NodeJS and mongoose with mongoDB;</li>
						<li>cooperation with APIs, templates, authentication;</li>
						<li>using <a href="https://www.mongodb.com/" className="skills-page-link" target="_blank" rel="noopener noreferrer"><span className="skills-page-color-red">MongoDB</span></a> as database</li>
						<li>refactoring existing applications, by improving code readability, separating concerns into separate functions and classes, splitting out the business logic from app's views and controllers, and moving architecture into more event-based one;</li>
						<li>writing unit and e2e tests;</li>
				</ul>
			  	<hr />
			  </div>
			  <div className={nextMainSectionClasses}>
				<div className={nextMainSectionTitleClasses}>
					<FontAwesomeIcon icon="terminal"></FontAwesomeIcon> What about dev-ops, design, ui?
				</div>
				<p>
					<b>During my time I have created and made designs and mock-ups for many websites. However, on deployment side, I am still woring and learning how to do it the right way. I have deployed few using heroku.</b>
				</p>
				<p>
					Thus, not only I have coded their back-end and front-end code, but often I had to take care of other things needed in a successful web application:
				</p>
				<ul>
						<li>good planning of UI and thinking how it affects the UX;</li>
						<li>consistency in design and typography;</li>
						<li>search engine optimization;</li>
						<li>deployments using <a href="https://www.heroku.com/" className="skills-page-link" target="_blank" rel="noopener noreferrer"><span className="skills-page-color-red">heroku</span></a>;</li>
				</ul>
			  	<hr />
				  <p>
					If your initial thought is that I just can’t be the best one in everything, it's okay. Just send the UI & design job to someone else, and I can take care of all the code development.
				</p>
				<p>
					<b>Of course I do not always work alone.</b> If you already have an existing team for your project, but still need someone to help it, contact me. I’ll fit into your needs.
				</p>
			  </div>
		  </div>

	  </div>
    );
  }
}

export default SkillsPage;
