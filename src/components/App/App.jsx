import React from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import './App.css';
import Companies from '../Companies/Companies';
import Properties from '../Properties/Properties';
import Value from '../Value/Value';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const App = () => {
	return (
		<>
			<div className='App'>
				<div>
					<div className='white-gradient' />
					<Header />
					<Hero />
				</div>
				<Companies />
				<Properties />
				<Value />
				<Contact />
				<Footer />
			</div>
		</>
	);
};

export default App;
