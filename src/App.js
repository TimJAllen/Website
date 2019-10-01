import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { Banner, About, Projects, Intro, Skills, Experience } from './components/pages';
import './components/styles/App.scss';

class App extends Component {
	render() {
		return (
			<Router>
				<div className='main-container'>
					<Header />
					<Banner />
					<Intro />
					<About />
					<Skills />
					<Experience />
					<Projects />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
