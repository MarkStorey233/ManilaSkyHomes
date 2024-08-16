import React, { useEffect } from 'react';
import './Hero.css';

import HeroImg from '../../assets/images/hero-image.png';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { BsPerson, BsSearch } from 'react-icons/bs';

const Hero = () => {
	return (
		<section className='hero-wrapper'>
			<div className='paddings innerWidth hero-container'>
				{/* left side */}

				<motion.div
					className='flexColStart hero-left'
					initial={{ x: '-5rem', opacity: 0 }}
					animate={{ x: '0rem', opacity: 1 }}
					transition={{ duration: 5, type: 'spring' }}
				>
					<div className='hero-title'>
						<div className='orange-circle' />
						<h1>
							Discover
							<br /> Manila Sky
							<br /> Homes
						</h1>
					</div>
					<div className='flexColStart hero-des'>
						<span className='secondaryText'>
							Find your next property at Manila Sky Homes.
						</span>
						<span className='secondaryText'>
							Be it a house and lot or condominium units,
						</span>
						<span> we offer the best spots for you</span>
					</div>

					{/* Search Bar */}

					<div className='flexCenter searchBar'>
						<BsSearch
							size={20}
							id='iconSearch'
						/>

						<input
							type='text'
							style={{ fontSize: '1rem' }}
							placeholder='Seach properties here'
						/>
						<button className='button'>Search</button>
					</div>

					{/* Stat 1
					<div className='stats'>
						<div className='flexColCenter stat'>
							<span>
								<CountUp
									start={8800}
									end={9000}
									duration={4}
								/>
								<span>+</span>
							</span>
							<span className='secondaryText'>
								Premium Products
							</span>
						</div>
								*/}
					{/* Stat 2 
						<div className='flexColCenter stat'>
							<span>
								<CountUp
									start={1950}
									end={2000}
									duration={4}
								/>
								<span>+</span>
							</span>
							<span className='secondaryText'>
								Happy Customers
							</span>
						</div>
								*/}
					{/* Stat 3 

						<div className='flexColCenter stat'>
							<span className='check'>
								<CountUp
									end={28}
									duration={1}
								/>
								<span>+</span>
							</span>
							<span className='secondaryText'>Award Winning</span>
						</div>
						*/}
					{/* Stat End 
					</div>
						*/}
				</motion.div>

				{/* right side */}
				<div className='flexCenter hero-right'>
					<motion.div
						className='img-container'
						initial={{ x: '5rem', opacity: 0 }}
						animate={{ x: '0rem', opacity: 1 }}
						transition={{ duration: 5, type: 'spring' }}
					>
						<img
							src={HeroImg}
							alt='Hero Image'
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
