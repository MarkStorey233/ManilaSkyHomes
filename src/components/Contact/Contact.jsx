import React from 'react';
import './Contact.css';

import ContactImg from '../../assets/images/contact.jpg';
import { FaPerson } from 'react-icons/fa6';
import { PiPerson } from 'react-icons/pi';
import { BsEnvelope, BsMessenger, BsPerson } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
	return (
		<>
			<section className='c-wrapper'>
				<div className='flexCenter innerWidth paddings c-container'>
					{/* Left Side */}
					<div className='flexColStart c-left'>
						<span className='orangeText'> Our Contacts</span>
						<span className='primaryText'> Easy to Contact us</span>
						<span className='secondaryText'>
							We always ready to help by providijng the best
							services for you. We beleive a good balance in live
							can make your life better
						</span>

						<div className='flexColStart contactModes'>
							<section className='searchBar'>
								<div className='flexStart'>
									<BsPerson size={30} />
									<input
										className='customInput'
										type='text'
										placeholder='Enter your Name'
									/>
								</div>
								<div className='flexStart'>
									<BsEnvelope size={30} />
									<input
										className='customInput'
										type='email'
										placeholder='Enter your Email'
									/>
								</div>
								<div>
									<textarea
										rows={5}
										name=''
										id=''
										className='customInput'
										placeholder='Enter message'
									></textarea>
								</div>
								<span>
									<button className='button custombutton'>
										Send Email
									</button>
								</span>
							</section>
						</div>
					</div>
					{/* Right Side */}
					<div className='c-right flexColEnd'>
						<div className='img-container'>
							<img
								src={ContactImg}
								alt='Contact Image'
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
