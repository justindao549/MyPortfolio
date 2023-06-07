import { Container, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import backgroundImage from '../app/assets/background4.jpg';
import Resume from '../app/assets/Dao, Justin Web Developer.pdf';

const HomePage2 = () => {
	const handleDownloadResume = () => {
		window.open(Resume);
	};
	const handleCopyEmail = () => {
		console.log('Button clicked');
		const email = 'justindao549@gmail.com';
		console.log('Copying email:', email);
		navigator.clipboard
			.writeText(email)
			.then(() => {
				console.log('Successfully copied email.');
				alert('Email copied to clipboard!');
			})
			.catch((error) => {
				console.error('Failed to copy email:', error);
			});
	};

	return (
		<Container fluid style={containerStyle}>
			<Row className="align-items-center">
				<Col className="d-flex flex-column">
					<h1 className="main-heading fade-in">Justin</h1>
					<h2 className="sub-heading fade-in">Dao</h2>
				</Col>
				<h3 className="job-title tracking-wider fade-in">Software Developer</h3>
				<h1 className="description fade-in">
					I've got a passion for all things technology and design, from software
					engineering to UI/UX. <br />
					<br />
					<br /> Turning ideas into real-life products is my calling!
				</h1>
				<br />
				<br />
				<div className="button-container ">
					<button onClick={handleDownloadResume} className="button fade-in">
						Resume
					</button>
					<button className="button fade-in2">
						<a
							href="https://github.com/justindao549"
							target="_blank"
							style={{ textDecoration: 'none', color: 'inherit' }}>
							Github
						</a>
					</button>
					<button className="button fade-in3">
						<a
							href="https://www.linkedin.com/in/justindao1/"
							target="_blank"
							style={{ textDecoration: 'none', color: 'inherit' }}>
							linkedin
						</a>
					</button>
				</div>{' '}
				<div className="button-container ">
					<button onClick={handleCopyEmail} className="button-email fade-in3">
						justindao549@gmail.com
					</button>
				</div>
			</Row>
		</Container>
	);
};

export default HomePage2;

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
	minHeight: '100vh',
};
