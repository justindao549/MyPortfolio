import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import backgroundImage from '../app/assets/background4.jpg';
import reactIcon from '../app/assets/icon_react2.png';

function ResumePage() {
	return (
		<Container fluid style={containerStyle}>
			<div className="align-items-center d-flex flex-column">
				<h1 className="About-main-heading fade-in">Portfolio</h1>
			</div>

			<Row className="fade-in2 justify-content-center align-items-center">
				<Col md="6">
					<div
						className="projects-section"
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: '100%',
							height: '450px', // Set a fixed height
						}}>
						<h2>Projects</h2>
					</div>
				</Col>
				<Col md="6">
					<div
						className="skills-section"
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(3, 1fr)',
							gap: '20px',
							width: '100%', // Set a fixed width
							height: '450px', // Set a fixed height
						}}>
						<div style={{ gridColumn: '1 / span 3' }}>
							<h2>Software Skills</h2>
						</div>
						<div>
							<img className="skill-icon" src="./icon_html.png" alt="HTML 5" />
							HTML 5
						</div>
						<div>
							<img className="skill-icon" src="./icon_css.png" alt="CSS" />
							CSS
						</div>
						<div>
							<img
								className="skill-icon"
								src="./icon_javascript.png"
								alt="JavaScript"
							/>
							JS
						</div>
						<div>
							<img className="skill-icon" src={reactIcon} alt="React" />
							React
						</div>
						<div>
							<img
								className="skill-icon"
								src="./icon_react-native.png"
								alt="React Native"
							/>
							React Native
						</div>
						<div>
							<img
								className="skill-icon"
								src="./icon_mongodb.png"
								alt="Mongo DB"
							/>
							Mongo DB
						</div>
						<div>
							<img
								className="skill-icon"
								src="./icon_node-js.png"
								alt="Node JS"
							/>
							Node JS
						</div>
						<div>
							<img
								className="skill-icon"
								src="./icon_tailwindcss.png"
								alt="Tailwind"
							/>
							Tailwind
						</div>
						<div>
							<img
								className="skill-icon"
								src="./icon_bootstrap.png"
								alt="Bootstrap"
							/>
							Bootstrap
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default ResumePage;

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
        rgba(0, 0, 0, 1) 100%
      ), url(${backgroundImage})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	height: '100vh',
};
