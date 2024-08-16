import React from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import './App.css';
import Properties from '../Properties/Properties';
import Value from '../Value/Value';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const App = () => {
	return (
		<>
			<div>
				<div className='white-gradient' />
				<Hero />
			</div>
			<Properties />
			<Value />
			<Contact />
		</>
	);
};

export default App;
