import React from 'react'
import CarouselItem from '../CarouselItem/CarouselItem';
import './PopularProducts.css'
import Carousel from 'better-react-carousel';
import { useSelector } from 'react-redux';

const PopularProducts = () => {

  const products = useSelector(state => state.products.products)
  return (
	<section className='popular_products_wrapper'>
		<div className='popular_items'>
		 <div className="carousel_wrapper">
      <Carousel cols={5} rows={1} gap={5} loop >
      {
			products?.filter(it => it.popular === true)
				    .map(el => 
                <Carousel.Item>
                      <CarouselItem data={el} key={el.id}/>
                </Carousel.Item>
             )
            }
    </Carousel>
    </div>
		</div>
	</section>
  )
}

export default PopularProducts