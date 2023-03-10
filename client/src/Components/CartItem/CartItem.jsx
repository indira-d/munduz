import React, {useState} from 'react'
import './CartItem.css'
import { Divider } from '@mui/material/Divider';
import {CloseOutlined} from '@ant-design/icons'


const CartItem = () => {
  const [quantity, setQuantity] = useState(1)

  return (
	<div className='cart_item'>
		<div className='cart_img_block'>
			<img src={'/uploads/maksym.svg'} className='cart_img'/>
		</div>
		<div className="cart_descriprion">
			<div className='cart_text'>
				<div className="cart_product_name">
					Максым
				</div>
				<div className="cart_product_price">
					250 P
				</div>
			</div>
			<div className='cart_row'>
				<div className="cart_product_name">
					Размер/Объем/Вес
				</div>
				<div className="cart_product_price">
					1 литр
				</div>
			</div>
			<div className='cart_row'>
				<div className="cart_product_name">
					Цвет
				</div>
				<div className="cart_product_price">
					 -
				</div>
			</div>
			
			<div className='cart_btns'>
				<div >
					<button className="delete_btn">
						<div className='delete_btn_icon'>
							<CloseOutlined />
						</div>
						Удалить</button>
				</div>
				<div className="counter_btns">
					<button className='counter_btn' onClick={() => setQuantity(quantity + 1)}>+</button>
					<div style={{marginLeft: '7px', marginRight: '7px', fontSize: '11px'}}>{quantity} шт</div>
					<button className='counter_btn' onClick={() => (quantity >= 2 ? setQuantity(quantity- 1) : 1)}>-</button>
				</div>
			</div>
		</div>
	</div>

  )
}

export default CartItem