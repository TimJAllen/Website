import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProjectPeak } from './../prefabs';

export class Home extends Component {
	render() {
		const { data } = this.props;
		return (
			<div className='content'>
				<h2>Projects</h2>
				{data.projects.map((p) => <ProjectPeak project={p} key={p.name} />)}
			</div>
		);
	}
}

Home.propTypes = {
	data: PropTypes.object.isRequired
};

export default Home;
