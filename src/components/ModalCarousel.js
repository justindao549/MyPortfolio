import React from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import { Carousel as BootstrapCarousel, Row, Col } from 'react-bootstrap';
import image1 from '../app/assets/WTF-ReactNative/WelcomeScreen.png';
import image2 from '../app/assets/WTF-ReactNative/LoginScreen.png';
import image3 from '../app/assets/WTF-ReactNative/HomeScreen.png';
import image4 from '../app/assets/WTF-ReactNative/SearchScreen.png';
import image5 from '../app/assets/WTF-ReactNative/RecipeScreen.png';
import image6 from '../app/assets/WTF-ReactNative/FavoritesScreen.png';
import overview from '../app/assets/WTF-ReactNative/FlowCharts/Overview.png';
import login from '../app/assets/WTF-ReactNative/FlowCharts/Login.png';
import home from '../app/assets/WTF-ReactNative/FlowCharts/Home.png';
import search from '../app/assets/WTF-ReactNative/FlowCharts/Search.png';
import searchRecipe from '../app/assets/WTF-ReactNative/FlowCharts/SearchRecipe.png';
import favorites from '../app/assets/WTF-ReactNative/FlowCharts/Favorites.png';

const images = [
	{
		src: image1,
		title: 'Overview',
		description: `This mobile recipe app allows users to explore, rate, and bookmark recipes. It utilizes the following technologies: 
		\n1. React Native: Powers the frontend, creating an intuitive user interface with various screens and navigation features.
		\n2. Express and Node.js: These form the backend of the application, managing server-side logic and handling HTTP requests.
		\n3. MongoDB: This NoSQL database is used for data storage and retrieval. Mongoose assists with data modeling, enabling operations like user creation, searching, and updates.`,
		flowchart: overview,
	},
	{
		src: image2,
		title: 'Login Screen',
		description: `1. React Native: The login screen is set up using React Native components. It contains two input fields for email and password.The received data (if the login was successful) is stored locally using AsyncStorage, and Redux actions are dispatched to update the state of the application.
		\n2. Express and Node.js: The /api/login endpoint receives the email and password, finds the associated user in the MongoDB database and verifies the password. If the login is successful, a JSON Web Token (JWT) is generated and returned to the front-end. Other endpoints exist for registration, profile viewing, recipe rating, fetching top recipes, adding and viewing bookmarked recipes, and searching recipes.
		\n3. MongoDB: User and recipe data, along with associated information (like ratings), is stored in a MongoDB database.`,
		flowchart: login,
	},
	{
		src: image3,
		title: 'Home Screen',
		description: `1. React Native: Displays a list of the top recipes and user profile fetched from the server. It utilizes Redux to manage the user state when the component is first mounted.
		\n2. Express and Node.js: Sets up express and MongoDB connections, creates API routes for user authentication (profile fetching), recipe rating, fetching top recipes, and user actions such as bookmarking a recipe.
		\n3. MongoDB: User data, recipe data, and ratings are stored here. The backend fetches and updates data from the database based on requests coming from the frontend.`,
		flowchart: home,
	},
	{
		src: image4,
		title: 'Search Screen',
		description: `The main functionalities of this screen are searching for recipes, viewing recipe categories, and interacting with individual recipe results. It communicates with the backend via HTTP requests to retrieve and display data.`,
		flowchart: search,
	},
	{
		src: image5,
		title: 'Recipe Screen',
		description:
			'Fetches and displays all related Recipe info. User actions include Rating, and Bookmarking their favorites. Please note from a process standpoint, Bookmarks follows the same path as user Ratings. It is posting to Users Collection, instead of Ratings Collection.',
		flowchart: searchRecipe,
	},
	{
		src: image6,
		title: 'Favorite Screen',
		description: `1. <b>User Action (View Favs):</b> This is where the user interacts with the React Native interface, for example, by clicking a button to view their favorite items.<br />2. <b>Dispatch Redux Action with JWT:</b> After the user's action, the React Native interface dispatches an action to the Redux store. This action includes a JSON Web Token (JWT) which is used for user authentication.<br />3. <b>Fetch Request with JWT:</b> Express and Node.js server receives the action from Redux, extracts the JWT from the action, and makes a fetch request to the MongoDB database.<br />4. <b>Return Requested Data:</b> MongoDB, after verifying the validity of the JWT, retrieves the requested data and returns it back to the Express and Node.js server.<br />5. <b>Pass Data Back:</b> The Express and Node.js server, after receiving the data from MongoDB, passes this data back to the Redux store.<br />6. <b>Redux Action Payload with Data:</b> The Redux store receives this data and updates its current state using the returned data.<br />7. <b>Fetch Data from Redux Store:</b> The React Native UI now fetches this updated data from the Redux store.<br />8. <b>Update State in React Native:</b> Finally, React Native updates its state based on the new data from the Redux store, which may result in a re-render of the UI components.`,
		flowchart: favorites,
	},
];

const ModalCarousel = ({ isOpen, toggle }) => (
	<Modal isOpen={isOpen} toggle={toggle} centered className="custom-modal">
		<ModalBody>
			<BootstrapCarousel
				className="custom-carousel"
				interval={null}
				style={{
					backgroundColor: 'rgba(124, 124, 124, 0.9)',
					borderRadius: '20px',
					height: '100%',
					width: '75vw',
				}}>
				{images.map((image, index) => (
					<BootstrapCarousel.Item key={index}>
						<Button
							close
							onClick={toggle}
							style={{
								position: 'absolute',
								right: '10px',
								zIndex: '1000',
								height: '25px',
							}}
						/>
						<Row>
							<Col lg={4} className="d-flex justify-content-center ">
								<img
									className="d-flex align-items-center "
									src={image.src}
									alt={`Slide ${index}`}
									style={{
										objectFit: 'contain',
										padding: '30px',
										paddingBottom: '50px',
										maxHeight: '800px',
									}}
								/>
							</Col>
							<Col lg={8} className="d-flex justify-content-center">
								<div
									style={{
										padding: '30px',
										color: 'white',
										paddingBottom: '40px',
									}}>
									<h3 className=" d-flex justify-content-center">
										{image.title}
									</h3>
									<pre
										style={{
											whiteSpace: 'pre-wrap',
											fontFamily: 'sans-serif',
											fontSize: '16px',
										}}
										dangerouslySetInnerHTML={{ __html: image.description }}
									/>
									<img
										src={image.flowchart}
										alt={`Flowchart for ${image.title}`}
										style={{ width: '100%', objectFit: 'contain' }}
									/>
								</div>
							</Col>
						</Row>
					</BootstrapCarousel.Item>
				))}
			</BootstrapCarousel>
		</ModalBody>
	</Modal>
);

export default ModalCarousel;
