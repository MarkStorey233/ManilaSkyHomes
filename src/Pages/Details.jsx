import React from 'react';
import PropertyDetails from '../components/PropertyDetails/PropertyDetails';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Details = () => {
	return (
		<>
			<div className='App'>
				<Header />
				<PropertyDetails />
				<Footer />
			</div>
		</>
	);
};
export default Details;
