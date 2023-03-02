import React from 'react'
import './Header.css'
import phone from '../../images/phone_icon.svg'
import logo from '../../images/logo.svg'
import s from '../../commonStyles.module.css'
import cart from '../../images/Group 830.png'
import category from '../../images/category.png'
import search from '../../images/glass.svg'
import {Link} from 'react-router-dom'



const Header = () => {
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
					<Link to={'/admin'} className='top_menu_item'>Админ панель</Link>
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
						<button className={s.button}>
							<img src={category} className='button_icon'/>
							Каталог</button>
						<button className={s.button}>
							<img src={cart} className='button_icon'/>
							Корзина</button>
					</div>
				</div>
			</div>
			
			
			<section className='categories'>
				<button className="category_item">Продукты питания</button>
				<button className="category_item">Овощи и фрукты</button>
				<button className="category_item">Молочная продукция</button>
				<button className="category_item">Выпечка</button>
				<button className="category_item">Бакалея</button>
				<button className="category_item">Сухофрукты</button>
				<button className="category_item">Напитки</button>
				<button className="category_item">Полуфабрикаты</button>
				<button className="category_item" style={{fontSize: '20px', width: '50px'}}>...</button>
			</section>
			</section>
	</div>
  )
}

export default Header