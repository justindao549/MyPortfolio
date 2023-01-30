import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/Subheader';
import React from 'react';

const HomePage = () => {
	return (
		<Container>
			<SubHeader current="Home" />
			<Row className="text-center ">
				<h2 className="text-7xl py-4 text-[#fb5a6e] font-sans font-bold uppercase text-center">
					Justin Dao.
				</h2>

				<h3 className="text-3xl py-3 text-[#212f4f] font-sans  uppercase tracking-widest ">
					<span className="text-[#fb5a6e]"> {'<'} </span>Software Developer
					<span className="text-[#fb5a6e]"> {'>'} </span>
				</h3>
				<h1 className="text-sm text-gray-500 pt-5 px-20">
					I've got a passion for all things technology and design, from software
					engineering to UI/UX.
				</h1>
				<h1 className="text-sm text-gray-500 pb-14 px-20">
					Turning ideas into real life products is my calling!
				</h1>
			</Row>
			<Row className="font-sans text-gray-500 shadow">
				<div className="d-flex flex-row flex-nowrap my-3 px-3 justify-content-evenly ">
					<div>
						<img className="w-15 h-10" src="./icon_html.png" />
						HTML 5
					</div>
					<div>
						<img className="w-15 h-10" src="./icon_css.png" />
						CSS
					</div>
					<div>
						<img className="w-15 h-10" src="./icon_javascript.png" />
						JS
					</div>
					<div>
						<img className="w-15 h-10" src="./icon_react-native.png" />
						React
					</div>
					<div>
						<img className="w-15 h-10" src="./icon_mongodb.png" />
						Mongo DB
					</div>
					<div>
						<img className="w-15 h-10" src="./icon_node-js.png" />
						Node JS
					</div>
					<div>
						<img className="w-15 h-10" src="./icon_tailwindcss.png" /> Tailwind
					</div>
					<div>
						<img className="w-15 h-10" src="./icon_bootstrap.png" /> Bootstrap
					</div>
				</div>
			</Row>
			<Row className="pt-4">
				<div className="hexagon">
					<div className="shape"></div>
				</div>
				<div className="hexagon">
					<div className="shape"></div>
				</div>
				<div className="hexagon">
					<div className="shape"></div>
				</div>
			</Row>
		</Container>
	);
};

export default HomePage;
