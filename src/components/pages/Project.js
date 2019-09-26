import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Project extends Component {
	render() {
		const { name, description, fullDescription } = this.props.project;
		return (
			<div className='Project'>
				<h1 className='title'>{name}</h1>
				<p>{description}</p>
				<p>{fullDescription}</p>
			</div>
		);
	}
}

Project.propTypes = {
	project: PropTypes.object.isRequired
};

export default Project;
