import React from 'react'
import './Header.css'
import phone from '../../images/phone_icon.svg'
import logo from '../../images/logo.svg'
import s from '../../commonStyles.module.css'
import cart from '../../images/Group 830.png'
import category from '../../images/category.png'
import search from '../../images/glass.svg'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';



const Header = () => {

const categories = useSelector(state => state.categories.categories)
const cart_quantity = useSelector(state => state.cart.cart.length)
  return (
	<div className='header'>
		<section className='top_header'>
			<div className='phone'>
				<div className='top_img'>
					<img src={phone} className='phone_icon' alt='phone'/>
				</div>
				<div className='top_phone'>+7 (3) 314 3214</div>
			</div>
			<div className='top_menu'>
				<div>
					<div className='top_menu_item'>FAQ</div>
					<div className='top_menu_item'>О нас</div>
					<div className='top_menu_item'>Контакты</div>
					<div className='top_menu_item'>Доставка</div>
					<Link to={'/allProducts'} className='top_menu_item'>Админ панель</Link>
				</div>
			</div>
		</section>
		<section className='main_header'>
			<div className='search_block'>
				<Link to='/' className='logo'>
				<img src={logo} className='logo'/>
				</Link>
				<div className='search'>
					<img src={search} className='search_icon'/>
					<input type='text' placeholder='Поиск товаров' className='search_input'/>
				</div>
				<div className='header_items'>
					<div className='catalogue'>
						<Link to='/catalogue' className={s.button} style={{textDecoration: 'none', color: 'black'}}>
							<img src={category} className='button_icon'/>
							Каталог</Link>
						<Link to='/cart' className={s.button} style={{textDecoration: 'none', color: 'black'}}>
							{cart_quantity > 0? <div className='cart_info'>{cart_quantity}</div> : null}
							<img src={cart} className='button_icon'/>
							Корзина
							</Link>
					</div>
				</div>
			</div>
			
			
			<section className='categories'>
				{
					categories
					?.filter((it, index) => (index <= 8))
					?.map(el =>
						<Link to={`/category/${el?._id}`} 
						style={{textDecoration: 'none', color: 'black'}}
						className="category_item">{el?.name}</Link>
					)
				}
				<Link to={`/catalogue`} className="category_item" style={{fontSize: '20px', width: '50px', textDecoration: 'none', color: 'black'}}>...</Link>
			</section>
			</section>
	</div>
  )
}

export default Header