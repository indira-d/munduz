import React from 'react'
import './Footer.css'
import logo from '../../images/logo.svg'
import footer from '../../images/phone.svg'

const Footer = () => {
  return (
	<div className='footer'>
		
		<div className="footer_container">
			<div className="footer_logo">
				<img src={logo}/>
			</div>
			<div className='footer_items_wrapper'>
				<div className="footer_item">
				    <h3 className='footer_subtitle'>Товары</h3>
					<div className="footer_item_name">Продукты питания</div>
					<div className="footer_item_name">Овощи и фрукты</div>
					<div className="footer_item_name">Молочная продукция</div>
					<div className="footer_item_name">Выпечка</div>
			</div>
			<div className="footer_item">
					<h3 className='footer_subtitle'>Категории</h3>
					<div className="footer_item_name">Продукты питания</div>
					<div className="footer_item_name">Овощи и фрукты</div>
					<div className="footer_item_name">Молочная продукция</div>
					<div className="footer_item_name">Выпечка</div>
			</div>
			<div className="footer_item">
				<h3 className='footer_subtitle'>Другие страницы</h3>
					<div className="footer_item_name">О нас</div>
					<div className="footer_item_name">FAQ</div>
					<div className="footer_item_name">Контакты</div>
			</div>
			</div>

			
			</div>
		<div className="footer_links">
			 <div className="footer_links_block">
				<div className="footer_title">Подписывайтесь на нас в инстаграмм</div>
				<div className="footer_description">Самые яркие впечатления</div>
				<button className="subscribe">Подписаться</button>
				<img src={footer} alt="" className="footer_links_img" />
			</div>
		

			<div className="footer_icons">
				<div className="footer_icon">
					<div className="odnoklassniki" />
					<div className="footer_icon_text">Одноклассники</div>
				</div>	
				<div className="footer_icon">
					<div className="telegram" />
					<div className="footer_icon_text">Telegram</div>
				</div>	
				<div className="footer_icon">
					<div className="vk" />
					<div className="footer_icon_text">VKontacte</div>
				</div>	
			</div>
		</div>
	</div>
  )
}

export default Footer