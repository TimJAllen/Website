import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { Banner, About, ProjectList, Intro, Skills, Experience } from './components/pages';
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
					<ProjectList />
					<Footer />
				</div>
			</Router>
		);
	}
}

// function Topic({ match }) {
// 	return <h3>Requested Param: {match.params.id}</h3>;
// }

// function Topics({ match }) {
// 	return (
// 		<div>
// 			<h2>Topics</h2>

// 			<ul>
// 				<li>
// 					<Link to={`${match.url}/components`}>Components</Link>
// 				</li>
// 				<li>
// 					<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
// 				</li>
// 			</ul>

// 			<Route path={`${match.path}/:id`} component={Topic} />
// 			<Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
// 		</div>
// 	);
// }

export default App;
