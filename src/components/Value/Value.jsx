import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemState,
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../Utils/accordion';

import './value.css';
import valueImg from '../../assets/images/value.png';

const Value = () => {
	return (
		<div className='v-wrapper'>
			<div className='paddings innerWidth flexCenter v-container'>
				{/* Left Side */}
				<div className='v-left flexStart'>
					<div className='img-container'>
						<img
							src={valueImg}
							alt='Value Image'
						/>
					</div>
				</div>

				{/* Right Side */}
				<div className='flexColStart v-right'>
					<span className='orangeText'>Our Value</span>
					<span className='primaryText'>Value We Give to You</span>
					<span className='secondaryText'>
						We are always ready to help by providing the best
						services for you.
						<br />
						We believe a good place to live can make your life
						better.
					</span>

					<Accordion
						className='accordion'
						allowMultipleExpanded={false}
						preExpanded={[0]}
					>
						{data.map((item, index) => (
							<AccordionItem
								className='accordionItem'
								key={index}
								uuid={index}
							>
								<AccordionItemHeading>
									<AccordionItemButton className='accordionButton flexCenter'>
										<AccordionItemState>
											{({ expanded }) => (
												<>
													<div
														className={`flexCenter icon ${
															expanded
																? 'expanded'
																: 'collapsed'
														}`}
													>
														{item.icon}
													</div>
													<span className='primaryText'>
														{item.heading}
													</span>
													<div
														className={`flexCenter icon ${
															expanded
																? 'expanded'
																: 'collapsed'
														}`}
													>
														<MdOutlineArrowDropDown
															size={50}
														/>
													</div>
												</>
											)}
										</AccordionItemState>
									</AccordionItemButton>
								</AccordionItemHeading>
								<AccordionItemPanel className='accordionPanel'>
									<p className='secondaryText'>
										{item.detail}
									</p>
								</AccordionItemPanel>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default Value;
