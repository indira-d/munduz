import React from 'react'
import noImage from '../../images/no_img.png'
import './CarouselItem.css'

const CarouselItem = ({data}) => {
	console.log('data', data)
  return (
	<div className="carousel_item_wrapper">
			 <div>
				<img src={data.img ? data.img : noImage} alt='' className="carousel_img" />
				<div className="carousel_price">{data?.price} cом</div>
				<div className="carousel_description">{data?.description}</div>
				<button className="carousel_btn"> В корзину</button>
			</div>
	</div>
  )
}

export default CarouselItem