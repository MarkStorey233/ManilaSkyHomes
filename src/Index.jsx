import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Listing from './Pages/Listing';
import Header from './components/Header/Header.jsx';
import Details from './Pages/Details.jsx';
import About from './Pages/About.jsx';
import Footer from './components/Footer/Footer.jsx';

const Index = () => {
	return (
		<>
			<div className='App'>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/listing'
						element={<Listing />}
					/>
					<Route
						path='/details/:id'
						element={<Details />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
				</Routes>
				<Footer />
			</div>
		</>
	);
};

export default Index;
