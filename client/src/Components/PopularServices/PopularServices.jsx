import React from 'react'
import './PopularServices.css'
import Carousel from 'better-react-carousel';
import CarouselItem from '../CarouselItem/CarouselItem';
import { useSelector } from 'react-redux';
import ServiceItem from '../ServiceItem/ServiceItem';

const PopularServices = () => {

	const services = useSelector(state => state.services.services)
  return (
	<div className='services'>
		<h2>Популярные услуги</h2>
			<div className='popular_items'>
		 <div className="carousel_wrapper">
      <Carousel cols={5} rows={1} gap={5} loop >
      	{
			services.map(el =>  
              <Carousel.Item>
                <ServiceItem data={el} key={el.id}/>
              </Carousel.Item>
             )
        }
    </Carousel>
    </div>
		</div>
	</div>
  )
}

export default PopularServices