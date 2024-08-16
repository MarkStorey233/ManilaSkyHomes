import React, { useEffect } from 'react';
import './footer.css';
import Logo from '../../assets/images/logo.png';
import { LuCalendarSearch } from 'react-icons/lu';
import { BsEnvelope } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';

const Footer = () => {
	useEffect(() => {
		AOS.init({
			offset: 120,
			delay: 0,
			duration: 400,
			easing: 'ease',
		});
	}, []);

	const handleBookAppointmentClick = () => {
		if (location.pathname === '/') {
			document
				.getElementById('contact-form')
				.scrollIntoView({ behavior: 'smooth' });
		} else {
			navigate('/');
			setTimeout(() => {
				document
					.getElementById('contact-form')
					.scrollIntoView({ behavior: 'smooth' });
			}, 100);
		}
		setMenuOpened(false);
	};

	return (
		<footer className='f-wrapper'>
			<div className='row innerWidth paddings f-container'>
				<div
					className='col'
					data-aos='zoom-in'
					data-aos-duration='200'
					data-aos-delay='300'
				>
					<img
						className='Logo'
						src={Logo}
						alt='Logo'
					/>
					<p>Connect with us and find homes without stress</p>
				</div>
				<div
					className='col col_two'
					data-aos='zoom-in'
					data-aos-duration='300'
					data-aos-delay='400'
				>
					<div>Address: 750 Shaw Blvd,</div>
					<div> Mandaluyong, 1554, </div>
					<div> Metro Manila, Philippines </div>
					<div className='flexStart footer-email'>
						<BsEnvelope size={20} />
						customercare@manilaskyhomes.com
					</div>
				</div>
				<div
					className='col col-three'
					data-aos='zoom-in'
					data-aos-duration='800'
					data-aos-delay='1200'
				>
					<ul>
						<li>
							<a href='#'> Company </a>
						</li>
						<li>
							<Link to='/about'> About Us </Link>
						</li>
						<li>
							<a href='#'> What we Do </a>
						</li>
						<li>
							<a href='#'> Contact us </a>
						</li>
					</ul>
				</div>
				<div
					className='col col-four'
					data-aos='zoom-in'
					data-aos-duration='800'
					data-aos-delay='1400'
				>
					<LuCalendarSearch size={50} />
					<span className='primaryText'> Book a Meeting </span>
					<span>
						We are happy to answer your questions and take you on a
						product demo
					</span>
					<button
						className='button'
						onClick={handleBookAppointmentClick}
					>
						Book a demo
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
