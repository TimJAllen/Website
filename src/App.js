import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { Home, About } from './components/pages';
import './components/styles/App.scss';
import data from './components/statics/site_content.json';

class App extends Component {
	render() {
		console.log(data);
		return (
			<Router>
				<div className='Global-container'>
					<Header />

					<div className='Page'>
						<Route exact path='/' render={(props) => <Home {...props} data={data} />} />
						<Route path='/about' component={About} />
						<Route path='/topics' component={Topics} />
					</div>

					<Footer />
				</div>
			</Router>
		);
	}
}

function Topic({ match }) {
	return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
	return (
		<div>
			<h2>Topics</h2>

			<ul>
				<li>
					<Link to={`${match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
				</li>
			</ul>

			<Route path={`${match.path}/:id`} component={Topic} />
			<Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
		</div>
	);
}

export default App;
