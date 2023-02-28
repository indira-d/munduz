import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './Admin.css'
import Button from '@mui/material/Button';
import './Admin.css'
import {useDispatch, useSelector} from 'react-redux'
import Sidebar from '../Sidebar';
import {  updateProduct } from '../../../redux/ProductSlice';
import { Select} from 'antd';

const EditProduct = () => {
 
   const dispatch = useDispatch()
   const product = useSelector(state => state.products.product)
   const [row, setRow] = useState()
   const categories = useSelector(state => state.categories.categories)
   const [subcategories, setSubcategories] = useState()

   const onCategoryChangeHandler = (value) => {
       setRow({...row, category: {_id: value, name: categories?.find(it => it._id === value).name}})
       setSubcategories(categories.find(it => it._id === value).subcategories)
   }
  console.log('subcategories', subcategories)
   console.log('row', row)

   const submitHandler = () => {
      const data = {
        name: row?.name, 
        description: row?.description,
        img: row?.img, 
        category: row?.category, 
        subcategory: row?.subcategory,
        price: row?.price,
        color: row?.color,
        size: row?.size,
        _id: row?._id,
        inStock: row?.inStock,
        discount: row?.discount
      }

      console.log('data55', data)
      dispatch(updateProduct(data))
            // navigate('/')
   }



   useEffect(() => {

    if(Object.keys(product).length !== 0){
      if(product){
        setRow({
        name: product?.name, 
        description: product?.description,
        img: product?.img, 
        category: product.category,
        subcategory: product?.subcategory,
        price: product?.price,
        color: product?.color,
        type: product?.type,
        size: product?.size,
        _id: product?._id,
        inStock: product?.inStock,
        discount: product?.discount
      })
      }}
      
   }, [product])


  return (
	<div className='admin'>
    <Sidebar />
    <h2 className='admin_header'>Редактировать товар</h2>
        <form onSubmit={e => e.preventDefault()} encType="multipart/form-data" className='form'>
       <div>
        <input
          required
          className='form_input'
          name="name"
          label="Наименование"
          defaultValue={row?.name}
          placeholder='Наименование'
          onChange={e => setRow({...row, [e.target.name]: e.target.value})}
        />
        <input
          className='form_input'
          name="description"
          label="Описание"
          defaultValue={row?.description}
          placeholder='Описание'
          onChange={e => setRow({...row, [e.target.name]: e.target.value})}
        />
       
        <Select
          className={'select'}
          placeholder='Категория'
          value={{value: row?.category._id, label: row?.category.name} }
          name='category'
          size='large'
          onChange = {value => onCategoryChangeHandler(value)}
          options={categories?.map(it => ({value: it._id, label: it.name}))}
        />
     <Select
        placeholder='Подкатегория'
        className={'select'}
        value={{value: row?.subcategory?._id, label: row?.subcategory?.name}}
        name='subcategory'
        size='large'
        onChange={e => setRow({...row, subcategory : subcategories.find(it => it._id === e)})}
        options={subcategories?.map(el => ({value: el._id, label: el.name}))}
      />

        <input type='number' 
          required
          className='form_input'
          placeholder='Цена'
          defaultValue={row?.price}
          name="price"
          onChange={e => setRow({...row, [e.target.name]: Number(e.target.value)})} />
          
          <input type='text' 
          className='form_input'
          placeholder='Размер'
          defaultValue={row?.size}
          name="size"
          onChange={e => setRow({...row, [e.target.name]: e.target.value})} />

          <input type='text' 
            className='form_input'
            placeholder='Цвет'
            defaultValue={row?.color}
            name="color"
            onChange={e => setRow({...row, [e.target.name]: e.target.value})} />
          
          <input type='number' 
            className='form_input'
            placeholder='Скидка'
            defaultValue={row?.discount}
            name="discount"
            onChange={e => setRow({...row, [e.target.name]: Number(e.target.value)})} />
          
          <Select
            placeholder='Товар на складе'
            className={'select'}
            size='large'
            name='inStock'
            value={ row.inStock && row.inStock === true ? {value: true, label: 'В наличии'} : {value: false, label: 'Отсутствует'}}
            onChange={value => setRow({...row, inStock: value})}
            options={[{value: true, label: 'В наличии'}, {value: false, label: 'Отстутствует'}]}
      />

      
        <input type='file' 
          filename='img' 
          className='form_input'
          //defaultValue={product.img}
          name='img'
          onChange={e => setRow({...row, [e.target.name]: e.target.files[0]})}>
        </input>
        {/* <div>
            {product.img && <img src={URL.createObjectURL(product.img)} alt={product.img.name} className='form_img'/> }
        </div> */}
        
        </div>
          
          <div>
          <button onClick={(e) => submitHandler(e)} className='form_btn'type='submit'>
            РЕДАКТИРОВАТЬ ТОВАР
          </button>
          </div>
        
        </form> 
    
  </div>
  )
}

export default EditProduct