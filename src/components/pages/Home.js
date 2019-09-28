import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextButton } from './../prefabs';
import { ProjectList } from './';
import { ParallaxBanner } from 'react-scroll-parallax';
import par from './../../statics/images/img.jpg';

export class Home extends Component {
	render() {
		const { data } = this.props;
		return (
			<div className='content'>
				<div>
					<ParallaxBanner
						// className='your-class'
						layers={[
							{
								image: par,
								amount: 0.4,
								children: <TextButton text={'Test 1'} onClick={() => {}} />,
								expand: true
							}
						]}
						style={{
							height: '500px'
						}}
					/>
					<div className='float-children'>
						<TextButton text={'GGGGG 1'} onClick={() => {}} />
					</div>
				</div>

				<h1>Banner Children</h1>

				<TextButton text={'Long test button name'} onClick={() => {}} />

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
