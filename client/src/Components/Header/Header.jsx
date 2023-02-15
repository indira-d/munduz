import React from 'react'
import './Header.css'
import phone from '../../assets/phone_icon.svg'
import logo from '../../assets/logo.svg'
import s from '../../commonStyles.module.css'
import cart from '../../assets/Group 830.png'
import category from '../../assets/category.png'
import search from '../../assets/glass.svg'


const Header = () => {
  return (
	<div>
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
				</div>
			</div>
		</section>
		<section className='main_header'>
			<div className='search_block'>
				<div className='logo'>
				<img src={logo} className='logo'/>
				</div>
				<div className='search'>
					<img src={search} className='search_icon'/>
					<input type='text' placeholder='Поиск товаров' className='search_input'>
						
					</input>
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
			
			<div className='categories'>
				<button className="category_item">Продукты питания</button>
				<button className="category_item">Овощи и фрукты</button>
				<button className="category_item">Молочная продукция</button>
				<button className="category_item">Выпечка</button>
				<button className="category_item">Бакалея</button>
				<button className="category_item">Сухофрукты</button>
				<button className="category_item">Напитки</button>
				<button className="category_item">Полуфабрикаты</button>
				<button className="category_item" style={{fontSize: '20px'}}>...</button>
			</div>

		</section>
	</div>
  )
}

export default Header