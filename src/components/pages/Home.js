import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TextButton } from './../prefabs';

export class Home extends Component {
	render() {
		return (
			<div>
				<h2>Home</h2>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<TextButton text={'Test 1'} />
					<TextButton text={'Long test button name'} />
				</div>
				<TextButton text={'Test 1'} />
				<TextButton text={'Long test button name'} />
				<TextButton text={'Test 1'} />
				<TextButton text={'Long test button name'} />
				<TextButton text={'Test 1'} />
				<TextButton text={'Long test button name'} />
				<TextButton text={'Test 1'} />
				<TextButton text={'Long test button name'} />
				<TextButton text={'Test 1'} />
				<TextButton text={'Long test button name'} />
				<TextButton text={'Test 1'} />
				<TextButton text={'Long test button name'} />
				<TextButton text={'Test 1'} />
				<TextButton text={'Long test button name'} />
				<TextButton text={'Test 1'} />
				<TextButton text={'Long test button name'} />
				<TextButton text={'Test 1'} />
				<TextButton text={'Long test button name'} />
				<TextButton text={'Test 1'} />
				<TextButton text={'Long test button name'} />
			</div>
		);
	}
}

Home.propTypes = {};

export default Home;
