import React from 'react'
import { addToCart } from '../../redux/CartSlice'

import './CarouselItem.css'
import { useDispatch } from 'react-redux';

const CarouselItem = ({data}) => {
	const dispatch = useDispatch()
  return (
	<div className="carousel_item_wrapper">
		<div className='popular'>ХИТ</div>
		<img src={`/uploads/${data?.img}`} alt='' className="carousel_img" />
		<div className="carousel_price">{data?.price} cом</div>
		<div className="carousel_name">{data?.name}</div>
		<div className="carousel_description">{data?.description}</div>
		<button className="carousel_btn" onClick={() => dispatch(addToCart({product: data, quantity: 1}))}> 
		В корзину
		</button>
	</div>
  )
}

export default CarouselItem