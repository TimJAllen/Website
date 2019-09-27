import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextButton } from './../prefabs';
import { ProjectList } from './';

export class Home extends Component {
	render() {
		const { data } = this.props;
		return (
			<div className='content'>
				<h2>Home</h2>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<TextButton text={'Test 1'} onClick={() => {}} />
					<TextButton text={'Long test button name'} onClick={() => {}} />
				</div>
				<TextButton text={'Test 1'} onClick={() => {}} />
				<TextButton text={'Long test button name'} onClick={() => {}} />
				<ProjectList data={data} />
			</div>
		);
	}
}

Home.propTypes = {
	data: PropTypes.object.isRequired
};

export default Home;
