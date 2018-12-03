import React, { Component } from 'react';
import AboutSideBar from './components/about/about-side-bar';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faEnvelope, faEdit, faCode, faTerminal, faBars} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {Route, Switch} from 'react-router-dom';
import MainPage from "./components/main/main-page";
import PortfolioPage from "./components/main/portfolio-page";
import ContactPage from "./components/main/contact-page";
import SkillsPage from "./components/main/skills-page";
import AboutPage from "./components/main/about-page";

library.add(fab, faEnvelope, faEdit, faCode, faTerminal, faBars);

class App extends Component {
  render() {
    return (
      <div className="App">
				<AboutSideBar />
				<Switch>
					  <Route exact path="/" component={MainPage} />
						<Route path="/portfolio" component={PortfolioPage} />
						<Route path="/contact" component={ContactPage} />
						<Route path="/skills" component={SkillsPage} />
						<Route path="/about" component={AboutPage} />
				</Switch>
      </div>
    );
  }
}

export default App;
