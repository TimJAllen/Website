import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextButton } from './../prefabs';
import ImageSrc from './../../statics/images/logo192.png';

export class ProjectPeak extends Component {
	render() {
		const { name, displayName, fullDescription } = this.props.project;

		const Title = () => (displayName ? <h1 className='title'>{displayName}</h1> : '');
		const FullDescription = () => (fullDescription ? <p className='description'>{fullDescription}</p> : '');
		const Button = () => <TextButton text='View Project Page' link={`projects/${name}`} />;
		const Image = () => <img src={ImageSrc} alt='' className='img' />;

		return (
			<div className='Project-Peak'>
				<Image />
				<div className='text-container'>
					<Title />
					<FullDescription />
					<Button />
				</div>
			</div>
		);
	}
}

ProjectPeak.propTypes = {
	project: PropTypes.object.isRequired
};

export default ProjectPeak;
