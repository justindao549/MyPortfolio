import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';

import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/About" element={<AboutPage />} />
				<Route path="/Portfolio" element={<PortfolioPage />} />
			</Routes>
		</div>
	);
}

export default App;
