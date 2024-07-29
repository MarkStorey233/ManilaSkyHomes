import React, { useEffect } from 'react';
import './Companies.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import CompanyOne from '../../assets/images/prologis.png';
import CompanyTwo from '../../assets/images/tower.png';
import CompanyThree from '../../assets/images/equinix.png';
import CompanyFour from '../../assets/images/realty.png';

const Companies = () => {
	useEffect(() => {
		AOS.init({
			offset: 120,
			delay: 0,
			duration: 600,
			easing: 'ease-in-sine',
		});
	}, []);

	return (
		<div>
			<section className='c-wrapper'>
				<div className='paddings innerWidth flexCenter c-container'>
					<img
						data-aos='zoom-in'
						data-aos-duration='800'
						data-aos-delay='600'
						src={CompanyOne}
						alt='Company one'
					/>
					<img
						data-aos='zoom-in'
						data-aos-duration='800'
						data-aos-delay='600'
						src={CompanyTwo}
						alt='Company Two'
					/>
					<img
						data-aos='zoom-in'
						data-aos-duration='800'
						data-aos-delay='600'
						src={CompanyThree}
						alt='Company three'
					/>
					<img
						data-aos='zoom-in'
						data-aos-duration='800'
						data-aos-delay='600'
						src={CompanyFour}
						alt='Company four'
					/>
				</div>
			</section>
		</div>
	);
};

export default Companies;
