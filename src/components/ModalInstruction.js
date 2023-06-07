import React from 'react';
import { Row, Col, Modal, ModalBody, Button } from 'reactstrap';

const ModalInstruction = ({ isOpen, toggle }) => {
	return (
		<Modal
			isOpen={isOpen}
			toggle={toggle}
			className="Modal-Instruction fade-in">
			<div
				className="d-flex justify-content-center align-items-center"
				style={{
					backgroundColor: 'rgba(159, 159, 159, 0.413)',
					borderRadius: '20px',
					padding: '0.5rem 1rem',
					// borderBottom: '1px solid #dee2e6',
					color: 'white',
					fontFamily: 'lemon_milk_Medium',
					justifyContent: 'space-between',
					fontSize: '25px',
				}}>
				<div style={{ flex: 1, textAlign: 'center' }}>Instructions</div>
				<Button close onClick={toggle} style={{ fontSize: '15px' }} />
			</div>
			<ModalBody>
				<Row>
					<Col
						xs="4"
						style={{
							display: 'flex',
							justifyContent: 'center',
							paddingTop: '20px',
							paddingRight: '50px',
							color: 'white',
							fontSize: '20px',
						}}>
						Step 1:
					</Col>
					<Col xs="5" style={{ display: 'flex', justifyContent: 'center' }}>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www">
							<button className="Modal-Body-Button" onClick={toggle}>
								Download Expo Go from Google Play Android{' '}
							</button>
						</a>
					</Col>
				</Row>
				<Row>
					<Col
						xs="4"
						style={{
							display: 'flex',
							justifyContent: 'center',
							paddingTop: '20px',
							paddingRight: '50px',
							color: 'white',
							fontSize: '20px',
						}}>
						Step 2:
					</Col>
					<Col xs="5" style={{ display: 'flex', justifyContent: 'center' }}>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://expo.dev/@jdao549/what-the-fork?serviceType=classic&distribution=expo-go">
							<button className="Modal-Body-Button" onClick={toggle}>
								Scan the QR code, or open link
							</button>
						</a>
					</Col>
				</Row>
			</ModalBody>
		</Modal>
	);
};

export default ModalInstruction;
