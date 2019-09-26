import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextButton } from './../prefabs';
import { Project } from './';

export class Home extends Component {
	render() {
		const { projects } = this.props.data;
		console.log(this.props);
		return (
			<div className='content'>
				<h2>Home</h2>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<TextButton text={'Test 1'} onClick={() => {}} />
					<TextButton text={'Long test button name'} onClick={() => {}} />
				</div>
				<TextButton text={'Test 1'} onClick={() => {}} />
				<TextButton text={'Long test button name'} onClick={() => {}} />
				{projects.map((p) => <Project project={p} key={p.name} />)}
			</div>
		);
	}
}

Home.propTypes = {
	data: PropTypes.object.isRequired
};

export default Home;
