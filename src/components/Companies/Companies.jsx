import React from 'react';
import './Companies.css';

import CompanyOne from '../../assets/images/prologis.png';
import CompanyTwo from '../../assets/images/tower.png';
import CompanyThree from '../../assets/images/equinix.png';
import CompanyFour from '../../assets/images/realty.png';

const Companies = () => {
	return (
		<div>
			<section className='c-wrapper'>
				<div className='paddings innerWidth flexCenter c-container'>
					<img
						src={CompanyOne}
						alt='Company one'
					/>
					<img
						src={CompanyTwo}
						alt='Company Two'
					/>
					<img
						src={CompanyThree}
						alt='Company three'
					/>
					<img
						src={CompanyFour}
						alt='Company four'
					/>
				</div>
			</section>
		</div>
	);
};

export default Companies;
