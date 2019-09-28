import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { Banner, About, ProjectList, Intro, Skills, Background } from './components/pages';
import './components/styles/App.scss';
import data from './statics/site_content.json';

const HeaderWithRoute = withRouter((props) => <Header {...props} />);

class App extends Component {
	render() {
		console.log(data);
		return (
			<Router>
				<div className='main-container'>
					<HeaderWithRoute />
					<Banner />
					<Intro />
					<About />
					<Skills />
					<Background />
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
