import React, { useState, useEffect } from 'react';
import './Order.css'
import Sidebar from '../Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateOrder } from '../../../redux/OrderSlice';

const EditOrder = () => {
   const dispatch = useDispatch()
   const params = useParams()
   const order = useSelector(state => state.order.order)
   
   const[username, setUsername] = useState(order?.username)
   const[phone, setPhone] = useState(order?.phone)
   const[comment, setComment] = useState(order?.comment)
   const[status, setStatus] = useState(order?.status)
   const[products, setProducts] = useState(order?.products)

   const onOrderChange = (el, field, value) => {
       if(products.length > 0){
           const index = products.findIndex(it => it._id === el._id)

           console.log('index', index)
         setProducts(...products, products[index][field] = value)
         console.log('products[index]', products[index])
       }
   }



     const updateOrderHandler = () => {
        try {
        const data = new FormData()
                data.append('username', username)
                data.append('phone', phone)
                data.append('status', status)
                data.append('comment', comment)
               //data.append('products', products)
        dispatch(updateOrder({product: data,  id: params.id}))
       
       } catch (error) {
        console.log(error)
        }}

    

    return (
        <div className='edit'>
            <Sidebar />
            <div className='editOrder'>
             <h2 className='admin_header'>Редактировать Заказ</h2>
        <form onSubmit={e => e.preventDefault()} encType="multipart/form-data" className='form'>
        <div>
            <div className='order_subtitle'>Заказчик</div>
                <input
                    required
                    className='form_input'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    />
            </div>
            <div>
                <div className='order_subtitle'>Телефон</div>
                <input
                    className='form_input'
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    />
                </div>
            <div>
            <div className='order_subtitle'>
                Статус
            </div>
            <input type='text' 
                className='form_input'
                placeholder='Статус'
                value={status}
                onChange={e => setStatus(e.target.value)} />
            </div>
             <div>
                <div className='order_subtitle'>Комментарий</div>
                <textarea
                    className='form_input'
                    value={comment}
                    onChange={e => setComment(e.target.value)} />
                </div>
            <div>
            <div className='order_subtitle' style={{marginBottom:'15px'}}>Заказ</div>
            <div className='order_row' style={{fontWeight: 'bold'}}>
                    <input className='orderInput' defaultValue={'Наименование'}/>
                    <input className='orderInput' defaultValue={'Размер/Объем/Вес'}/>
                    <input className='orderInput' defaultValue={'Цвет'}/>
                    <input className='orderInput' defaultValue={'Количество'}/>
                    <input className='orderInput' defaultValue={'Цена, P'}/>
                    <input className='orderInput' style={{fontWeight: 600}} defaultValue={'Сумма'}/>
            </div> 
            {order?.products?.map(it => (
                <div className='order_row'>
                    <input className='orderInput' name ='name' onChange={e => onOrderChange(it, e.target.name, e.target.value )} defaultValue={it?.name}/>
                    <input className='orderInput' name ='size' onChange={e => onOrderChange(it, e.target.name, e.target.value )} defaultValue={it?.size}/>
                    <input className='orderInput' name ='color' onChange={e => onOrderChange(it, e.target.name, e.target.value )} defaultValue={it?.color}/>
                    <input className='orderInput' name ='quantity' onChange={e => onOrderChange(it, e.target.name, Number(e.target.value) )} defaultValue={it?.quantity}/>
                    <input className='orderInput' name ='price' onChange={e => onOrderChange(it, e.target.name, Number(e.target.value) )} defaultValue={it?.price}/>
                    <input className='orderInput' name ='total' onChange={e => onOrderChange(it, e.target.name, Number(e.target.value))} style={{fontWeight: 600}} defaultValue={it?.price * it?.quantity}/>
                </div> 
            ))
         }
            <div className='order_row' style={{fontWeight: 'bold'}}>
                    <input className='orderInput' defaultValue={'Итого'}/>
                    <input className='orderInput' defaultValue={''}/>
                    <input className='orderInput' defaultValue={''}/>
                    <input className='orderInput' defaultValue={''}/>
                    <input className='orderInput' defaultValue={''}/>
                    <input className='orderInput' style={{fontWeight: 600}} defaultValue={order?.products?.reduce((acc, it) => acc + (it.quantity * it.price), 0)}/>
            </div>
         </div>
        <div>
          <button className='form_btn' type='submit' onClick={() => updateOrderHandler()}>
            РЕДАКТИРОВАТЬ ЗАКАЗ
          </button>
        </div>
        </form> 
  </div>
  </div>
           
    )

};

export default EditOrder;
