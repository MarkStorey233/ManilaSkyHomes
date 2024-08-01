import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Listing from './Pages/Listing';
import PropertyDetails from './components/PropertyDetails/PropertyDetails.jsx';
import Header from './components/Header/Header.jsx';
import Details from './Pages/Details.jsx';

const Index = () => {
	return (
		<>
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
			</Routes>
		</>
	);
};

export default Index;
