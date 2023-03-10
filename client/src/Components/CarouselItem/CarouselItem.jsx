import React from 'react'
import noImage from '../../images/no_img.png'
import './CarouselItem.css'

const CarouselItem = ({data}) => {
  return (
	<div className="carousel_item_wrapper">
		<div className='popular'>ХИТ</div>
		<img src={`/uploads/${data?.img}`} alt='' className="carousel_img" />
		<div className="carousel_price">{data?.price} cом</div>
		<div className="carousel_name">{data?.name}</div>
		<div className="carousel_description">{data?.description}</div>
		<button className="carousel_btn"> В корзину</button>
	</div>
  )
}

export default CarouselItem