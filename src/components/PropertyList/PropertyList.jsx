import React from 'react';
import './PropertyList.css';
import { ListingData } from '../../Utils/ListingData';
import { FaBath, FaBed, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PropertyList = () => {
	return (
		<div className='l-wrapper'>
			<div className='l-container'>
				<h1>Available Properties</h1>
				<div className='card-container'>
					{ListingData.map((item) => (	
						<Link
							to={`/details/${item.id}`}
							key={item.id}
						>
							<div className='card'>
								<img
									src={item.img}
									alt={item.title}
									className='card-img'
								/>
								<div className='card-content'>
									<h2>{item.title}</h2>
									<p>{item.address}</p>
									<div className='card-content-container'>
										<div className='icon-text'>
											<FaBed size={20} />
											<span>{item.bedroom} </span>
										</div>
										<div className='icon-text'>
											<FaBath size={20} />
											<span>{item.bathroom} </span>
										</div>
										<div className='icon-text'>
											<FaDollarSign size={20} />
											{item.price}
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default PropertyList;
