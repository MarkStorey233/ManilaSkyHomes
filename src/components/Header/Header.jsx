import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/images/logo.png';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { CgClose } from 'react-icons/cg';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	const [menuOpened, setMenuOpened] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const getMenuStyles = (menuOpened) => {
		if (document.documentElement.clientWidth <= 800) {
			return {
				top: !menuOpened && '-100%',
			};
		}
	};

	const handleOurValueClick = () => {
		if (location.pathname === '/') {
			document
				.getElementById('our-value')
				.scrollIntoView({ behavior: 'smooth' });
		} else {
			navigate('/');
			setTimeout(() => {
				document
					.getElementById('our-value')
					.scrollIntoView({ behavior: 'smooth' });
			}, 100);
		}
		setMenuOpened(false);
	};

	const handleGettingStartedClick = () => {
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
		<section className='h-wrapper'>
			<div className='flexCenter paddings innerWidth h-container'>
				<Link to='/'>
					<img
						src={Logo}
						alt='Website Logo'
						width={100}
					/>
				</Link>

				<OutsideClickHandler
					onOutsideClick={() => {
						setMenuOpened(false);
					}}
				>
					<div
						className='flexCenter h-menu'
						style={getMenuStyles(menuOpened)}
					>
						<NavLink to='/Listing'>Properties</NavLink>
						<a
							onClick={handleOurValueClick}
							style={{ cursor: 'pointer' }}
						>
							Our Value
						</a>
						<a
							onClick={handleGettingStartedClick}
							style={{ cursor: 'pointer' }}
						>
							Getting Started
						</a>
						<button className='button'>Contact</button>
					</div>
					<div
						className='menu-icon'
						onClick={() => setMenuOpened((prev) => !prev)}
					>
						{menuOpened ? (
							<CgClose size={30} />
						) : (
							<BiMenuAltRight size={30} />
						)}
					</div>
				</OutsideClickHandler>
			</div>
		</section>
	);
};

export default Header;
