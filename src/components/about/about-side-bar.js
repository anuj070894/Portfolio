import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import './about-side-bar.css';
import profilePic from "../../static/images/anujkumarprofile.png";
import detectMobile from "../../service/detect-mobile";
import BlogList from './blog-list';

class AboutSideBar extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
		  showSkills: true
	  };
  }

  componentDidMount () {
	window.addEventListener("resize", this.setShowSkillsTrue);
  }

  componentWillMount() {
	if (window.innerWidth < 1024) {
		this.setState({
			showSkills: false
		});
		return;
	  }
  }

  setShowSkillsTrue = () => {
	  if (detectMobile()) {
		return;
	  }
	  if (window.innerWidth < 1024) {
		  this.setState({
			  showSkills: false
		  });
		  return;
	  }
	  this.setState({
		  showSkills: true
	  });
  }

  toggleSkills = () => {
	this.setState((prevState) => {
		return {
			showSkills: !prevState.showSkills
		}
	});
  };

  render() {
    return (
      <div className="about-side-bar">
		  <div className="about-side-bar-bg"></div>
		  <div className="about-side-bar-inner">
			  <Link to="/" className="about-side-image-name">
			  	  <div className="about-side-bar-profile-pic-container">
					  <img src={profilePic} alt="Profile pic of Anuj Kumar" className="about-side-bar-profile-pic"></img>
				  </div>
				  <div className="about-side-bar-profile-content">
					  <div className="about-size-bar-name">
						  Anuj Kumar
					  </div>
					  <div className="about-size-bar-title">
					      Full-stack web developer
					  </div>
				  </div>
			  </Link>
			  <div className="about-side-bar-main-navigation">
				  <div className="about-side-bar-main-navigation-hamburger">
					<hr />
				  	<FontAwesomeIcon icon="bars" size="2x" className="about-side-bar-hamburger-icon" onClick={this.toggleSkills} />
				  	<hr />
				  </div>
				  <div className="about-side-bar-main-navigation-content">
					  {this.state.showSkills ?
						(<ul>
							<li>
								<Link to="/skills">
									Skills
								</Link>
							</li>
							<li>
								<Link to="/portfolio">
									Portfolio
								</Link>
							</li>
							<li>
								<Link to="/contact">
									Contact Me
								</Link>
							</li>
						</ul>) : null}
						{this.state.showSkills ?
							(<ul className="about-side-bar-main-list-two">
								<li>
									<Link to="/about">
										About Me
									</Link>
								</li>
								<li>
									<a href="https://medium.com/@anujbaranwal" target="_blank" rel="noopener noreferrer">
										Personal Blog
									</a>
								</li>
							</ul>) : null}
				  </div>
			  </div>
			  <div className="about-side-bar-social">
				  <div className="about-side-bar-social-title">
					  Get in touch
				  </div>
				  {this.state.showSkills ? (<div className="about-side-bar-social-content">
				      <div className="about-side-bar-social-icons">
						  <a href="https://www.facebook.com/anuj.baranwal.73" target="_blank" rel="noopener noreferrer">
					      	<FontAwesomeIcon icon={["fab", "facebook"]} size="1x"/>
						  </a>
						  <a href="mailto:anujbrnwal070894@gmail.com" rel="noopener noreferrer">
					      	<FontAwesomeIcon icon="envelope" size="1x"/>
						  </a>
						  <a href="https://github.com/anuj070894" target="_blank" rel="noopener noreferrer">
					      	<FontAwesomeIcon icon={["fab", "github"]} size="1x"/>
						  </a>
						  <a href="https://www.instagram.com/anujbrandy/" target="_blank" rel="noopener noreferrer">
					      	<FontAwesomeIcon icon={["fab", "instagram"]} size="1x"/>
						  </a>
						  <a href="https://www.linkedin.com/in/anuj-kumar-9a188968/" target="_blank" rel="noopener noreferrer">
					      	<FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>
						  </a>
						  <a href="https://medium.com/@anujbaranwal" target="_blank" rel="noopener noreferrer">
					      	<FontAwesomeIcon icon={["fab", "medium"]} size="1x" />
						  </a>
				      </div>
				  </div>) : null}
			  </div>
			  <div className="about-side-bar-blog-block">
				  <div className="about-side-bar-blog-title">
					  Recently on my blog
				  </div>
				  <BlogList />
			  </div>
		  </div>
      </div>
    );
  }
}

export default AboutSideBar;
