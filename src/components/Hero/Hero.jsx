import React from 'react';
import './Hero.css';

import HeroImg from '../../assets/images/hero-image.png';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';

const Hero = () => {
	return (
		<section className='hero-wrapper'>
			<div className='paddings innerWidth flexCenter hero-container '>
				{/* left side */}

				<div className='flexColStart hero-left'>
					<div className='hero-title'>
						<div className='orange-circle' />
						<h1>
							Discover
							<br /> Most Sitable
							<br /> Property
						</h1>
					</div>
					<div className='flexColStart hero-des'>
						<span className='secondaryText'>
							Find a variety of properties that suit you very
							easilty
						</span>
						<span className='secondaryText'>
							Forget all difficulties in finding a residence for
							you
						</span>
					</div>

					{/* Search Bar */}

					<div className='flexCenter searchBar'>
						<HiLocationMarker className='icon' />
						<input type='text' placeholder='Seach properties here'/>
						<button className='button'>Search</button>
					</div>

					<div className='stats'>
						{/* Stat 1 */}
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
						{/* Stat 2 */}
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
						{/* Stat 3 */}

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

						{/* Stat End */}
					</div>
				</div>

				{/* right side */}
				<div className='flexCenter hero-right'>
					<div className='img-container'>
						<img
							src={HeroImg}
							alt='Hero Image'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
