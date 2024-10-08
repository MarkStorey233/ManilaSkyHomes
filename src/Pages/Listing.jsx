import React from 'react';
import Header from '../components/Header/Header';
import PropertyList from '../components/PropertyList/PropertyList';
import Footer from '../components/Footer/Footer';

const Listing = () => {
	return (
		<>
			<div className='App'>
				<Header />
				<PropertyList />
				<Footer />
			</div>
		</>
	);
};

export default Listing;
