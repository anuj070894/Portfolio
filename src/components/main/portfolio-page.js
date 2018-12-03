import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import className from "classnames";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './main-page.css';
import './contact-page.css';
import './skills-page.css';
import './portfolio-page.css';
import xdPrototypeImg from '../../static/images/xd_prototype.png';
import xdSpecsImg from "../../static/images/xd_specs.png"
import xdSpecsAiImg from "../../static/images/xd_specs_ai.png"
import xdPrototypeAnaylitcs from '../../static/images/xd_prototype_analytics.png';
class PortfolioPage extends Component {
  render() {
	const nextMainSectionClasses = className('contact-page-main-section', 'contact-page-main-section-next');
	const nextMainSectionTitleClasses = className('contact-page-main-section-title', 'contact-page-main-section-next-title');
	const skillsPageRowClasses = className("skills-page-row", 'skills-page-features');
	const skillsPageRowFeatureClasses = className("skills-page-row-col", 'skills-page-row-col-4', 'skills-page-row-feature');
	const portfolioTimelineClasses =className('portfolio-timeline', 'portfolio-page-timeline');
	return (
		<div className="main-page-container">
		  <div className="main-page-container-inner">
			  <div className="contact-page-main-section">
					<div className="contact-page-main-section-title">
						Portfolio
					</div>
					<p>
						See my works below. I have majorly worked on the front-end part of it and will mention about the back-end parts where are done by me.
					</p>
					<div className="timeline portfolio-timeline">
						<ul>
							<li className="timeline_element timeline_element--now project">
								<div className="timeline_element-date">
									<time className="timeline_element-date-text">
										Currently
									</time>
								</div>
								<div className="timeline_element-contents">
									<div className="project-text">
										<div className="project-title">React and router upgrade</div>
										<div className="project-description">
											I am busy until December in rewriting the architecture of the react based web app with react and router related libraries and frameworks. But from then on I will be looking for an another interesting project.
											<br />
											<br />Looking for a full-stack developer role to do cool web related stuffs.
											<Link to="/contact" className="portfolio-page-link"> Contact me</Link>. I will answer as soon as possible.
											<hr />
										</div>
									</div>
								</div>
							</li>

							<li className="timeline_element timeline_element--now project">
								<div className="timeline_element-date">
									<time className="timeline_element-date-text">
										October 2018
									</time>
								</div>
								<div className="timeline_element-contents">
									<div className="project-text">
										<div className="project-title">Redux Integration</div>
										<div className="project-description">
											Worked on moving the web app from a nuclearJS based application to a conventional react-redux based application. The tech stack that was used earlier was a bit outdated. With redux, app became quite easy to scale further.
											<br />
											<hr />
										</div>
									</div>
								</div>
							</li>
							<li className="timeline_element project">
								<div className="timeline_element-date">
									<time className="timeline_element-date-text">
										Aug 2018
									</time>
								</div>
								<div className="timeline_element-contents">
									<div className="project-text">
										<a href="https://helpx.adobe.com/in/xd/help/share-embed-designs-prototypes.html" className="project-link" target="_blank" rel="noopener noreferrer">
											<div className="project-title">Prototype Web(XD)</div>
											<div className="project-subtitle">
												From XD, allows to publish your prototype and share it with stakeholders by providing a public or private web link.
											</div>
										</a>
										<div className="project-description">
											<br />
											<strong><a href="https://helpx.adobe.com/in/support/xd.html" target="_blank" rel="noopener noreferrer" className="portfolio-page-link">Adobe XD CC</a> is a desktop tool that allows to design interactive prototypes, wireframes, and graphics using XD.
											</strong>
											<ul>
												<li>
													worked mostly on the collaboration part from the XD Tool and on the web via sharing links and how it should render in the browser
												</li>
												<li>
													wrote crucial features such as onboarding, pinning, some parts of commenting, authentication, timedTransitions;
												</li>
												<li>
													desktop implementation for end points to put the interactions and layers data;
												</li>
											</ul>
										</div>
										<a href="https://helpx.adobe.com/in/xd/help/share-embed-designs-prototypes.html" className="project-readmore button button-red" target="_blank" rel="noopener noreferrer">
											More Details
										</a>
										<div className="project-technologies">
											<div className="technologies-title">
												Technologies
											</div>
											<ul className="tech-tags">
												<li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a></li>
												<li><a href="https://optimizely.github.io/nuclear-js/" target="_blank" rel="noopener noreferrer">NuclearJS</a></li>
												<li><a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack</a></li>
												<li><a href="https://gruntjs.com/" target="_blank" rel="noopener noreferrer">Grunt</a></li>
												<li><a href="https://facebook.github.io/immutable-js/" target="_blank" rel="noopener noreferrer">Immutable</a></li>
												<li><a href="https://github.com/css-modules/css-modules" target="_blank" rel="noopener noreferrer">CSS Modules</a></li>
												<li><a href="http://nightwatchjs.org/" target="_blank" rel="noopener noreferrer">NightWatch</a></li>
												<li><a href="https://jasmine.github.io/" target="_blank" rel="noopener noreferrer">Jasmine</a></li>
											</ul>
										</div>
									</div>
									<div className="project-image">
										<a href="https://helpx.adobe.com/in/xd/help/share-embed-designs-prototypes.html" className="project-link" target="_blank" rel="noopener noreferrer">
											<img src={xdPrototypeImg} alt="XD Web Prototypes">
											</img>
										</a>
									</div>
									<hr />
								</div>
							</li>
							<li className="timeline_element project">
								<div className="timeline_element-date">
									<time className="timeline_element-date-text">
										May 2018
									</time>
								</div>
								<div className="timeline_element-contents">
									<div className="project-text">
										<a href="https://helpx.adobe.com/in/xd/help/share-embed-designs-prototypes.html" className="project-link" target="_blank" rel="noopener noreferrer">
											<div className="project-title">Enrich Analytics for Prototype Owners(Hackathon Winners)</div>
											<div className="project-subtitle">
												Enrich prototype owners with analytics for their shared links in prototype web app.
											</div>
										</a>
										<div className="project-description">
											<br />
											<strong>The owner of the XD Web Prototype links can see enrich analytics through behavioral charts using google sankey charts, heatmaps and an chrome extension to capture the video of how the users of the link are responding with the prototype link to examine and analyse how it can be enhanced
											</strong>
											<ul>
												<li>
													worked on the web part to implement these features;
												</li>
											</ul>
										</div>
										<a href="https://helpx.adobe.com/in/xd/help/share-embed-designs-prototypes.html" className="project-readmore button button-red" target="_blank" rel="noopener noreferrer">
											More Details
										</a>
										<div className="project-technologies">
											<div className="technologies-title">
												Technologies
											</div>
											<ul className="tech-tags">
												<li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a></li>
												<li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">NodeJS</a></li>
											</ul>
										</div>
									</div>
									<div className="project-image">
										<a href="https://helpx.adobe.com/in/xd/help/share-embed-designs-prototypes.html" className="project-link" target="_blank" rel="noopener noreferrer">
											<img src={xdPrototypeAnaylitcs} alt="XD Web Prototypes">
											</img>
										</a>
									</div>
									<hr />
								</div>
							</li>
							<li className="timeline_element project">
								<div className="timeline_element-date">
									<time className="timeline_element-date-text">
										Jan 2018
									</time>
								</div>
								<div className="timeline_element-contents">
									<div className="project-text">
										<a href="https://helpx.adobe.com/in/xd/help/design-specs-for-developers.html" className="project-link" target="_blank" rel="noopener noreferrer">
											<div className="project-title">Design Specs Web(XD)</div>
											<div className="project-subtitle">
												View design specs published from Adobe XD, which enable you to inspect and comment on the flows, measurements, and styles.
											</div>
										</a>
										<div className="project-description">
											<br />
											<strong>The Design Specs feature is an early look at improving the communication between designers and developers. A designer can generate a public URL in XD for sharing with a developer. On accessing the link, a developer can inspect and comment on the flows, measurements, and design styles.
											</strong>
											<ul>
												<li>
													worked mostly on the web part on design specs and how it should simplify the communication between designers and developers
												</li>
												<li>
													wrote crucial features such as ux flows, pan & zoom services, authentication, search, ui of header and footer, onboarding, landing page, inspect layers and measurements;
												</li>
												<li>
													unit test cases, ui automation test cases, e2e test cases;
												</li>
											</ul>
										</div>
										<a href="https://helpx.adobe.com/in/xd/help/design-specs-for-developers.html" className="project-readmore button button-red" target="_blank" rel="noopener noreferrer">
											More Details
										</a>
										<div className="project-technologies">
											<div className="technologies-title">
												Technologies
											</div>
											<ul className="tech-tags">
												<li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a></li>
												<li><a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack</a></li>
												<li><a href="https://gulpjs.com/" target="_blank" rel="noopener noreferrer">Gulp</a></li>
												<li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">NodeJS</a></li>
												<li><a href="https://github.com/css-modules/css-modules" target="_blank" rel="noopener noreferrer">CSS Modules</a></li>
												<li><a href="http://nightwatchjs.org/" target="_blank" rel="noopener noreferrer">NightWatch</a></li>
												<li><a href="https://jasmine.github.io/" target="_blank" rel="noopener noreferrer">Jasmine</a></li>
											</ul>
										</div>
									</div>
									<div className="project-image">
										<a href="https://helpx.adobe.com/in/xd/help/design-specs-for-developers.html" className="project-link" target="_blank" rel="noopener noreferrer">
											<img src={xdSpecsImg} alt="XD Web Prototypes">
											</img>
										</a>
									</div>
									<hr />
								</div>
							</li>
							<li className="timeline_element project">
								<div className="timeline_element-date">
									<time className="timeline_element-date-text">
										June 2017
									</time>
								</div>
								<div className="timeline_element-contents">
									<div className="project-text">
										<a href="https://www.dropbox.com/sh/x95c2d5ul2pc5ac/AABVjLnct0bAE224iD_lFs5Ga?dl=0" className="project-link" target="_blank" rel="noopener noreferrer">
											<div className="project-title">Designer-Developer Workflow for Adobe Illustrator(Hackathon Winners)</div>
											<div className="project-subtitle">
												View design specs published from Adobe Illustrator, which enable you to inspect styles and measurements for .ai files.
											</div>
										</a>
										<div className="project-description">
											<br />
											<strong>Created a workflow to improve the communication between designers and developers. A designer can generate a public URL in Illustrator for sharing with a developer. On accessing the link, a developer can inspect the flows, measurements, and design styles.
											</strong>
											<ul>
												<li>
													worked on all the parts on design specs for illustrator and how it should simplify the communication between designers and developers
												</li>
												<li>
													wrote end-points to put the data of .ai files on community platform for Adobe and ui to show the specs view for .ai files;
												</li>
												<li>
													created a card view for all the artboards in the browser to give a seamless flow to go to specs view;
												</li>
											</ul>
										</div>
										<a href="https://www.dropbox.com/sh/x95c2d5ul2pc5ac/AABVjLnct0bAE224iD_lFs5Ga?dl=0" className="project-readmore button button-red" target="_blank" rel="noopener noreferrer">
											More Details
										</a>
										<div className="project-technologies">
											<div className="technologies-title">
												Technologies
											</div>
											<ul className="tech-tags">
												<li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a></li>
												<li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">NodeJS</a></li>
											</ul>
										</div>
									</div>
									<div className="project-image">
										<a href="https://www.dropbox.com/sh/x95c2d5ul2pc5ac/AABVjLnct0bAE224iD_lFs5Ga?dl=0" className="project-link" target="_blank" rel="noopener noreferrer">
											<img src={xdSpecsAiImg} alt="Illustrator Design Specs">
											</img>
										</a>
									</div>
									<hr />
								</div>
							</li>
						</ul>
					</div>
				</div>
		  </div>

	  </div>
    );
  }
}

export default PortfolioPage;
