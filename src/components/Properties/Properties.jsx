import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './properties.css';
import 'swiper/css';

import data from '../../Utils/slider.json';
import { sliderSettings } from '../../Utils/common';
import SliderButtons from './SliderButtons/SliderButtons';

const Properties = () => {
	return (
		<>
			<section className='r-wrapper p-wrapper'>
				<div className='paddings innerWidth p-container'>
					<div className='r-head flexColStart'>
						<span className='orangeText'> Best Choices</span>
						<span className='primaryText'> Popular Properties</span>
					</div>

					<Swiper {...sliderSettings}>
						<SliderButtons />
						{data.map((card, i) => (
							<SwiperSlide key={i}>
								<div className='flexColStart r-card'>
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
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default Properties;
