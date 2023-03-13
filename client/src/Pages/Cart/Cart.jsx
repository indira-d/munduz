import React, {useState} from 'react'
import Header from '../../Components/Header/Header'
import './Cart.css'
import CartItem from '../../Components/CartItem/CartItem';
import Footer from '../../Components/Footer/Footer';
import PopularProducts from '../../Components/PopularProducts/PopularProducts';
import { useSelector } from 'react-redux';
import {  Modal } from 'antd';
import {useDispatch} from "react-redux";
import {addOrder} from "../../redux/OrderSlice";

const Cart = () => {
    const dispatch = useDispatch()
	const cart = useSelector(state => state.cart.cart)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phone, setPhone] = useState()
    const [username, setUsername] = useState()
    const [comment, setComment] = useState()

    const showModal = () => {
        setIsModalOpen(true);
    };

    const tt = cart.map(it => ({
        name: it.product.name,
        size: it.product.size,
        color: it.product.color,
        price: it.product.price,
        discount: it.product.discount,
        quantity: it.quantity}))

    console.log('tt', tt)

    const makeOrder = async () => {



        dispatch(addOrder(

                {
                    products: cart.map(it => ({
                        _id: it.product._id,
                        name: it.product.name,
                        size: it.product.size,
                        color: it.product.color,
                        price: it.product.price,
                        discount: it.product.discount,
                        quantity: it.quantity
                    })),
                        phone,
                        username,
                        comment,
                        status: 'new'
                }


        ))

        setIsModalOpen(false);

    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
  return (
	<div>
		<Header/>
		<h2 className='cart_header' style={{width: '80%', margin: '15px auto'}}>Корзина</h2>
		<div className='cart'>
			<div className='cart_items_wrapper'>
				{
					cart.map(it => (
						<CartItem data={it}/>
					))
				}
			</div>
			<div className='cart_form'>
                <div className="cart_banner">
					<img src='/uploads/Баннер.svg' className="cart_banner_img"/>
				</div>
				<div className="cart_details">
					<div className="cart_details_title">
						Сумма заказа
					</div>
					<div className="cart_detail_item">
						<div>{
                            cart.map(it =>
                                <div style={{paddingBottom: '15px'}}>
                                    <div className={'cart_order'}>
                                        <div>{it.product.name} &nbsp; ({it.quantity} шт)</div>
                                        <div>{it.product.price * it.quantity} P</div>
                                    </div>
                                </div>
                                )
                             }

                            <div className="cart_detail_total" style={{fontWeight: '600'}}>
                                <div>Итого</div>
                                <div> P</div>
                            </div>
                        </div>

                    </div>
				</div>
                <Modal
                    width={350}
                    title="Оставьте ваш номер телефона"
                    open={isModalOpen}
                    onCancel={handleCancel}
                    cancelButtonProps={{style: { display: 'none' }}}
                    okButtonProps={{ style: { display: 'none' } }}
                >

                    <div className={'cart_modal'}>
                        <div>Ваш номер телефона</div>
                        <input className={'cart_modal_input'}
                               onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div className={'cart_modal'}>
                        <div>Ваше имя</div>
                        <input
                            className={'cart_modal_input'}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={'cart_modal'}>
                        <div>Комментарий</div>
                        <textarea className={'cart_modal_input'}
                                  onChange={e => setComment(e.target.value)}
                        />
                    </div>
                    <button className='modal_btn' onClick={makeOrder}>Оформить заказ</button>
                </Modal>
				<button className='product_detail_btn' onClick={showModal}>Оформить заказ</button>
			</div>
		</div>
		<h2 className='cart_header' style={{width: '80%', margin: '15px auto'}}>Также может вам понравиться</h2>
		<PopularProducts />
		<Footer />
	</div>
  )
}

export default Cart