import React, {useState} from 'react'
import './CartItem.css'
import {CloseOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart, updateCartQuantity} from '../../redux/CartSlice';

const CartItem = ({data}) => {
    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()

    const updateQuantity = (value) => {
       dispatch(updateCartQuantity({id: data.product._id, quantity: value}))
    }

  return (
	<div className='cart_item'>
		<div className='cart_img_block'>
			<img src={`/uploads/${data.product.img}`} className='cart_img'/>
		</div>
		<div className="cart_description">
			<div className='cart_text'>
				<div className="cart_product_name">
					{data?.product?.name}
				</div>
				<div className="cart_product_price">
					{data?.product?.price} P
				</div>
			</div>
			<div className='cart_row'>
				<div className="cart_product_name">
					Размер/Объем/Вес
				</div>
				<div className="cart_product_price">
					{data?.product?.size}
				</div>
			</div>
			<div className='cart_row'>
				<div className="cart_product_name">
					Цвет
				</div>
				<div className="cart_product_price">
					 {data?.product?.color}
				</div>
			</div>
			<div className='cart_btns'>
				<div>
					<button className="delete_btn" onClick={()=> dispatch(removeFromCart(data?.product?._id))}>
						<div className='delete_btn_icon'>
							<CloseOutlined />
						</div>
						Удалить</button>
				</div>
				<div className="counter_btns">
					<button className='counter_btn' onClick={() => updateQuantity(1)}>+</button>
					<div style={{marginLeft: '7px', marginRight: '7px', fontSize: '11px'}}>{data.quantity} шт</div>
					<button className='counter_btn' onClick={() => updateQuantity(-1)}>-</button>
				</div>
			</div>
		</div>
	</div>
  )
}

export default CartItem