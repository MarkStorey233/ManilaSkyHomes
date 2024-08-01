import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ListingData } from '../../Utils/ListingData';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './PropertyDetails.css';
import { BsEnvelope, BsPerson } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { FaBed, FaShower } from 'react-icons/fa';
import { BiLocationPlus } from 'react-icons/bi';

const PropertyDetails = () => {
	const { id } = useParams();
	const form = useRef();

	const property = ListingData.find((prop) => prop.id === parseInt(id, 10));

	if (!property) {
		return <div>Property not found</div>;
	}

	const {
		images = [],
		title,
		description,
		address,
		bedroom,
		bathroom,
		price,
		owner,
	} = property;

	const sendEmail = (e) => {
		e.preventDefault();

		// Add your email handling logic here
		emailjs
			.sendForm(
				'service_cois6vs',
				'template_nezbmix',
				form.current,
				'dt48432fCrysnYAET'
			)
			.then(
				() => {
					Swal.fire({
						title: 'Success!',
						text: 'Your email has been sent.',
						icon: 'success',
						confirmButtonText: 'OK',
					});
					form.current.reset(); // Reset form after success
				},
				(error) => {
					Swal.fire({
						title: 'Error!',
						text: `Failed to send email: ${error.text}`,
						icon: 'error',
						confirmButtonText: 'OK',
					});
				}
			);
	};

	return (
		<>
			<div className='pd-wrapper'></div>
			<div className='pd-container'>
				<div className='carousel-container '>
					<Carousel
						showThumbs={false}
						autoPlay
						interval={3000}
						infiniteLoop
					>
						{images.map((image, index) => (
							<div
								className='carouselDiv'
								key={index}
							>
								<img
									src={image}
									alt={`Property Image ${index + 1}`}
								/>
							</div>
						))}
					</Carousel>
				</div>
				<div className='pd_content-container '>
					<div className='pd-left-section '>
						<div className='property-info '>
							<div className='p-facilities flexStart'>
								<div className='flexStart p-facilities-inner'>
									<FaBed
										size={40}
										className='icon'
									/>
									<span className='primaryText'>
										{bedroom}
									</span>
								</div>
								<div className='flexStart p-facilities-inner'>
									<FaShower
										size={40}
										className='icon'
									/>
									<span className='primaryText'>
										{bathroom}
									</span>
								</div>
							</div>
							<div className='p-facilities-bottom'>
								<h1>{title}</h1>
								<div>{description}</div>
								<div className='flexStart location'>
									<BiLocationPlus
										size={30}
										className='icon'
									/>
									{address}
								</div>
							</div>
						</div>
					</div>
					<div className='right-section'>
						<h2>Price: ${price}</h2>
						<h2>Owner: {owner}</h2>
						<form
							data-aos='fade-in'
							data-aos-duration='800'
							data-aos-delay='600'
							className='flexColStart contactModes'
							ref={form}
							onSubmit={sendEmail}
						>
							<section className='searchBar'>
								<div className='flexStart'>
									<BsPerson size={40} />
									<input
										className='customInput'
										type='text'
										name='from_name'
										placeholder='Enter your Name'
										required
									/>
								</div>

								<div className='flexStart'>
									<BsEnvelope size={40} />
									<input
										className='customInput'
										type='email'
										name='from_email'
										placeholder='Enter your Email'
										required
									/>
								</div>
								<div>
									<textarea
										rows={5}
										name='message'
										className='customInput'
										placeholder='Enter message'
										required
									></textarea>
								</div>
								<span>
									<button
										type='submit'
										className='button custombutton'
									>
										Send Email
									</button>
								</span>
							</section>
						</form>
					</div>
				</div>{' '}
			</div>
		</>
	);
};

export default PropertyDetails;
