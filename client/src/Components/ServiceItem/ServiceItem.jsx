import React from 'react'
import './ServiceItem.css'
import {Link} from 'react-router-dom'

const ServiceItem = ({data}) => {
  return (
	<div className="service_item_wrapper">
		<Link to={`/service/${data._id}`}>
			<div className='service_img_block'>
				<img src={`/uploads/${data.img}`} alt='' className="service_img" />
			</div>
			
			<div className='service_text'>
				<div className='service_address'>
					<img src={'/uploads/metro.svg'}></img>
					<div className='address'>{data.address}</div>
				</div>
				<div className="carousel_name">{data?.name}</div>
				<div className="carousel_description">{data?.description}</div>
			</div>
		</Link>	
	</div>
  )
}

export default ServiceItem