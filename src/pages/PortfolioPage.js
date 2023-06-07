import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import image1 from '../app/assets/WTF-ReactNative/WelcomeScreen.png';
import backgroundImage from '../app/assets/background4.jpg';
import nitroFit from '../app/assets/nitroFit.png';
import ModalInstruction from '../components/ModalInstruction';
import ModalCarousel from '../components/ModalCarousel';

function PortfolioPage() {
	const [instructionModal, setInstructionModal] = useState(false);
	const instructionToggle = () => setInstructionModal(!instructionModal);

	const [carouselModal, setCarouselModal] = useState(false);
	const carouselToggle = () => setCarouselModal(!carouselModal);

	return (
		<Container fluid style={containerStyle}>
			<div className="align-items-center d-flex flex-column">
				<h1 className="Portfolio-main-heading fade-in">Portfolio</h1>
			</div>
			<Row className="fade-in2 justify-content-center align-items-start ">
				<Col lg="3" className="pr-20 pb-20 pt-10 Portfolio-Title">
					<h2 style={{ fontSize: 20 }}>Mobile App</h2>
					<img
						className="clickable "
						onClick={carouselToggle}
						src={image1}
						style={{
							maxHeight: '550px',
							width: '100%',
							objectFit: 'contain',
							paddingBottom: '5px',
						}}
					/>
					<a
						target="_blank"
						href="https://expo.dev/@jdao549/what-the-fork?serviceType=classic&distribution=expo-go"></a>
					<button
						className="button fade-in2"
						onClick={instructionToggle}
						style={{ textDecoration: 'none', color: 'white' }}>
						Try it now!
					</button>
				</Col>
				<Col lg="6" className="pr-20 pb-20 pt-10 Portfolio-Title">
					<h2 style={{ fontSize: 20 }}>Desktop App</h2>
					<a href="https://nitrofit-react.netlify.app/" target="_blank">
						<img
							className="clickable"
							src={nitroFit}
							style={{
								borderRadius: '30px',
								objectFit: 'contain',
								width: '100%',
								height: '100%',
							}}
						/>
					</a>
				</Col>
			</Row>
			<ModalInstruction isOpen={instructionModal} toggle={instructionToggle} />
			<ModalCarousel isOpen={carouselModal} toggle={carouselToggle} />
		</Container>
	);
}

export default PortfolioPage;

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
	backgroundColor: 'black',
	minHeight: '100vh',
};
