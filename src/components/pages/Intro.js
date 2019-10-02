import React, { Component } from 'react';
import Quote from '../prefabs/Quote';

class Intro extends Component {
	render() {
		return (
			<section className='page intro' id='intro'>
				<div className='containers'>
					<div className='left'>
						<h2>Intro</h2>
					</div>
					<div className='right'>
						<p>Bay Area based software developer graduating with Business MIS degree.</p>
						<p>Outgoing and creative entrepreneur with years of experience designing and programming my own apps.</p>
						<p>
							I am excited to develop for any platforms using my broad experience in Java, Python, JavaScript, React
							Native, SQL and many more languages.
						</p>
						<p>
							I am capable of picking up on new programming languages and libraries on the fly, and am very skilled with
							being a team leader, and a technical project manager.
						</p>
					</div>
				</div>
				<div className='divider' />
				<Quote speaker='Nicholas Ayala, cofounder of Connect&#39;d'>
					<p>
						Tim is someone that is willing to put in the extra time and effort to learn what is needed to get the job
						done. When we worked on Connect'd together, there were aspects of the project he didn't originally know -
						but he was able to GET IT DONE. That's probably one of the things that I admire about him most. <br />
						<br />Personally, Tim is a great team player. Open to always working well with others as well as able to
						communicate technical jargon with non-technical individuals. It's really great because he can bridge that
						gap that usually lies between engineering and the business side of things.
					</p>
				</Quote>
			</section>
		);
	}
}

export default Intro;
