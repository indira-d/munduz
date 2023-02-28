import React, {useEffect} from 'react'
import CategoryItem from '../../Components/Categories/CategoryItem'
import Header from '../../Components/Header/Header'
import Slider from '../../Components/Slider/Slider'
import s from '../../commonStyles.module.css'
import PopularProducts from '../../Components/PopularProducts/PopularProducts'
import Footer from '../../Components/Footer/Footer';
import CarouselSlider from '../../Components/Carousel/CarouselSlider'
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/ProductSlice'
import { getAllSubcategories } from '../../redux/SubcategorySlice'
import { getAllCategories } from '../../redux/CategorySlice'
import axios from 'axios'



const Home = () => {

	const dispatch = useDispatch()



	useEffect(() => {
		dispatch(getAllProducts())
		dispatch(getAllCategories())
		dispatch(getAllSubcategories())
	}, [dispatch])


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