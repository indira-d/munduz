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
			margin: '0px 0',
			position: 'absolute',
			right: '10%'
			}}> Смотреть все</Link>
		<h2 style={{width: '80%', margin: '40px auto'}}>Популярные товары</h2>
		<PopularProducts />
		<h2 style={{width: '80%', margin: '50px auto'}}>Прекрасно подойдет для Нооруза</h2>
		<CategoryItem numberOfItems={4}/>
		<h2 style={{width: '80%', margin: '40px auto'}}>Популярные услуги</h2>
		<PopularServices />
		<h2 style={{width: '80%', margin: '40px auto'}}>Дети это любят</h2>
		<PopularProducts />
		<h2 style={{width: '80%', margin: '40px auto'}}>Самое вкусное в напитках</h2>
		<PopularProducts />
		<h2 style={{width: '80%', margin: '50px auto'}}>Для семейного застолья</h2>
		<CategoryItem numberOfItems={4}/>
		<h2 style={{width: '80%', margin: '30px auto'}}>Скоро приедут гости?</h2>
		<PopularServices />
		<Footer />
	</div>
  )
}

export default Home