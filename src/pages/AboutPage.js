import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import backgroundImage from '../app/assets/background4.jpg';

function AboutPage() {
	return (
		<Container fluid style={containerStyle}>
			<Row className="align-items-center">
				<Col className="d-flex flex-column">
					<h1 className="About-main-heading fade-in">About</h1>
				</Col>
				<div>
					<p className="About-description fade-in2">
						Hey I'm Justin, and its great to meet you!
					</p>
					<p className="About-description fade-in3">
						So here's my story: Not too long ago I was once a Financial Analyst
						for 7.5 years, and I really loved my position and the people that I
						worked with...But for several years, there was this voice in the
						back of my head that wanted to explore the technology field - almost
						a calling.
						<br />
						<br />
						I was faced with two options: either play it safe and continue down
						a road I knew I'd do well in, or risk it all and follow my tech
						dream for an uncertain future.
						<br />
						<br />
						There's a quote I try to live by: 'Twenty years from now you will be
						more disappointed by the things that you didn't do than by the ones
						you did do' - Abraham Lincoln, probably.
						<br />
						<br />
						So here I am, done with my coding bootcamp and a couple of projects
						in hand, chasing my dream!
					</p>
				</div>
			</Row>
		</Container>
	);
}

export default AboutPage;

const containerStyle = {
	backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 25%,
        rgba(0, 0, 0, 0) 100%
      ), linear-gradient(
		to right,
		rgba(0, 0, 0, 1) 0%,
		rgba(0, 0, 0, .5) 50%,
		rgba(0, 0, 0, 0) 100%
	  ),
      url(${backgroundImage})
    `,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	minHeight: '100vh', // Set minimum height to 100% of viewport height
};
