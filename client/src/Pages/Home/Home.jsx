import React, {useEffect} from 'react'
import CategoryItem from '../../Components/Categories/CategoryItem'
import Header from '../../Components/Header/Header'
import Slider from '../../Components/Slider/Slider'
import s from '../../commonStyles.module.css'
import PopularProducts from '../../Components/PopularProducts/PopularProducts'
import Footer from '../../Components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/ProductSlice'
import { getAllSubcategories } from '../../redux/SubcategorySlice'
import { getAllCategories } from '../../redux/CategorySlice'
import PopularServices from '../../Components/PopularServices/PopularServices'
import { Link } from 'react-router-dom';


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
		<CategoryItem numberOfItems={9}/>
		<Link to='/catalogue' 
			style={{textDecoration: 'none', 
			fontSize: '12px',
			color: '#E21ECA',
			fontWeight: '500',
			letterSpacing: '0.5px',
			margin: '20px 0',
			position: 'absolute',
			right: '10%'
			}}> Смотреть все</Link>
		<PopularProducts />
		<PopularServices />
		<Footer />
	</div>
  )
}

export default Home