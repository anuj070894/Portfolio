import React, { Component } from 'react';
import className from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './main-page.css';
import './contact-page.css';

class ContactPage extends Component {
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
	const contactPageDLClasses = className('contact-page-dl', 'contact-page-dl-vertical');
	return (
	  <div className="main-page-container" ref={this.mainContainerRef}>
		  <div className="main-page-container-inner">
			  <div className="contact-page-main-section">
				  <div className="contact-page-main-section-title">
				      Contact Me
				  </div>
				  <p>
					  Looking for new opportunites and available to discuss web application projects as freelancing and guidance to people who are new in web development
				  </p>
				  <div className="contact-page-card">
					  <dl className={contactPageDLClasses}>
						  <dt>Email:</dt>
						  <dd>
							  <a href="mailto:anujbrnwal070894@gmail.com">
								  <FontAwesomeIcon icon="envelope" size="1x"/>&nbsp;
								  <span>anujbrnwal070894@gmail.com</span>
							  </a>
						  </dd>
						  <dt>Facebook:</dt>
						  <dd>
							  <a href="https://www.facebook.com/anuj.baranwal.73" target="_blank" rel="noopener noreferrer">
							  	  <FontAwesomeIcon icon={["fab", "facebook"]} size="1x"/>&nbsp;
									<span>anuj.baranwal.73</span>
							  </a>
						  </dd>
						  <dt>Github:</dt>
						  <dd>
							  <a href="https://github.com/anuj070894" target="_blank" rel="noopener noreferrer">
							  	  <FontAwesomeIcon icon={["fab", "github"]} size="1x"/>&nbsp;
									<span>anuj070894</span>
							  </a>
						  </dd>
						  <dt>Instagram:</dt>
						  <dd>
							  <a href="https://www.instagram.com/anujbrandy/" target="_blank" rel="noopener noreferrer">
							  	  <FontAwesomeIcon icon={["fab", "instagram"]} size="1x"/>&nbsp;
									<span>anujbrandy</span>
							  </a>
						  </dd>
						  <dt>LinkedIn:</dt>
						  <dd>
							  <a href="https://www.linkedin.com/in/anuj-kumar-9a188968/" target="_blank" rel="noopener noreferrer">
							  	  <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>&nbsp;
									<span>anuj-kumar-9a188968</span>
							  </a>
						  </dd>
						  <dt>Medium:</dt>
						  <dd>
							  <a href="https://medium.com/@anujbaranwal" target="_blank" rel="noopener noreferrer">
							  	  <FontAwesomeIcon icon={["fab", "medium"]} size="1x"/>&nbsp;
									<span>anujbaranwal</span>
							  </a>
						  </dd>
					  </dl>
				  </div>
			  </div>
		  </div>
	  </div>
    );
  }
}

export default ContactPage;
