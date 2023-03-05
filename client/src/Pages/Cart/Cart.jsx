import React from 'react'
import Header from '../../Components/Header/Header'
import './Cart.css'
import CartItem from '../../Components/CartItem/CartItem';
import Footer from '../../Components/Footer/Footer';
import PopularProducts from '../../Components/PopularProducts/PopularProducts';

const Cart = () => {
  return (
	<div>
		<Header/>
		<h2 className='cart_header' style={{width: '80%', margin: '15px auto'}}>Корзина</h2>
		<div className='cart'>
			
			<div className='cart_items_wrapper'>
				<CartItem />
				<CartItem />
				<CartItem />
			</div>
			<div className='cart_form'>
                <div className="cart_banner">
					<img src='/uploads/cart_banner.svg' className="cart_banner_img"/>
				</div>
				<div className="cart_details">
					<div className="cart_details_title">
						Сумма заказа
					</div>
					<div className="cart_detail_item">
						<div>Товары 2 шт</div>
						<div>244 P</div>
					</div>
					<div className="cart_detail_item" style={{fontWeight: '600'}}>
						<div>Итого</div>
						<div>244 P</div>
					</div>
				</div>
				<button className='product_detail_btn'>Оформить заказ</button>
			</div>

		</div>
		<h2 className='cart_header' style={{width: '80%', margin: '15px auto'}}>Также может вам понравиться</h2>
		<PopularProducts />

		<Footer />
	</div>
  )
}

export default Cart