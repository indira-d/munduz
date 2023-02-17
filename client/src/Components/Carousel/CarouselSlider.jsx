import React from 'react';
import Carousel from 'better-react-carousel';
import CarouselItem from '../CarouselItem/CarouselItem';
import { products } from '../../data'
import './CarouselSlider.css'


const CarouselSlider = () => {
  return (
    <div className="carousel_wrapper">
      <Carousel cols={5} rows={1} gap={10} loop >
      {
			products.filter(it => it.popular === true)
				    .map(el =>  
              <Carousel.Item>
                <CarouselItem data={el} key={el.id}/>
              </Carousel.Item>
             )
            }
    
    </Carousel>
    </div>
    
  )
}

export default CarouselSlider