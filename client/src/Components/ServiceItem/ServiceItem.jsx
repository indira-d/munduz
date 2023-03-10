import React from 'react'
import noImage from '../../images/no_img.png'
import './ServiceItem.css'

const ServiceItem = ({data}) => {
  return (
	<div className="service_item_wrapper">
		<img src={`/uploads/${data.img}`} alt='' className="service_img" />
		<div className='service_text'>
			<div className='service_address'>
				<img src={'/uploads/metro.svg'}></img>
				<div className='address'>{data.address}</div>
			</div>
			<div className="carousel_name">{data?.name}</div>
			<div className="carousel_description">{data?.description}</div>
		</div>
	
	</div>
  )
}

export default ServiceItem