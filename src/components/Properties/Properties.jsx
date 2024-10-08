import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './properties.css';
import 'swiper/css';

import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import data from '../../Utils/slider.json';
import { sliderSettings } from '../../Utils/common';
import SliderButtons from './SliderButtons/SliderButtons';
import { Link } from 'react-router-dom';

const Properties = () => {
	useEffect(() => {
		Aos.init({
			offset: 120,
			delay: 0,
			duration: 200,
			easing: 'ease',
		});
	}, []);
	return (
		<>
			<section className='p-wrapper'>
				<div className='paddings innerWidth p-container'>
					<div className='r-head flexColStart'>
						<span className='orangeText'> Best Choices</span>
						<span className='primaryText'> Popular Properties</span>
					</div>

					<Swiper {...sliderSettings}>
						<SliderButtons />
						{data.map((card, i) => (
							<SwiperSlide key={i}>
								<Link to={`/details/${card.id}`}>
									<div
										className='flexColStart r-card'
										data-aos='zoom-in'
									>
										<img
											src={card.image}
											alt='home'
										/>

										<span className='secondaryText r-price'>
											<span style={{ color: 'orange' }}>
												$
											</span>
											<span>{card.price}</span>
										</span>

										<span className='primaryText'>
											{card.name}
										</span>
										<span className='secondaryText'>
											{card.detail}
										</span>
									</div>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default Properties;
