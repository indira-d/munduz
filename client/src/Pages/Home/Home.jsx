import React from 'react'
import CategoryItem from '../../Components/Categories/CategoryItem'
import Header from '../../Components/Header/Header'
import Slider from '../../Components/Slider/Slider'
import s from '../../commonStyles.module.css'
import PopularProducts from '../../Components/PopularProducts/PopularProducts'
import Footer from '../../Components/Footer/Footer';
import CarouselSlider from '../../Components/Carousel/CarouselSlider'


const Home = () => {
  return (
	<div className={s.page}>
		<Header />
		<Slider />
		<CategoryItem />
		<PopularProducts />
		<Footer />
	</div>
  )
}

export default Home