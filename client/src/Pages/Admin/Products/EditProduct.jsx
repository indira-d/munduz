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
import { useParams } from 'react-router-dom';

const EditProduct = () => {
 
   const dispatch = useDispatch()
   const product = useSelector(state => state.products.product)
   const [row, setRow] = useState()
   const categories = useSelector(state => state.categories.categories)
   const all_subcategories = useSelector(state => state.subcategories.subcategories)
   const [subcategories, setSubcategories] = useState()
   const [newImg, setNewImg] = useState('')
   const params = useParams()

   console.log('params',params)

   const onCategoryChangeHandler = (value) => {
       setRow({...row, category: value})
       setSubcategories(categories.find(it => it._id === value).subcategories)
   }

   const submitHandler = () => {
          const data = new FormData()
            data.append('name', row?.name)
            data.append('price', row?.price)
            data.append('img', row?.img)
            data.append('description', row?.description)
            data.append('category', row?.category)
            data.append('subcategory', row?.subcategory)
            data.append('color', row?.color)
            data.append('size', row?.size)
            data.append('inStock', row?.inStock)
            data.append('discount', row?.discount)
            data.append('popular', row?.popular)
            data.append('type', row?.type)
            

      dispatch(updateProduct(product,  params.id))
            // navigate('/')
   }

   const onImgChangeHandler = (e) => {
       e.preventDefault()
      setRow({...row, img: e.target.files[0]})
      setNewImg(e.target.files[0])
   }

   useEffect(() => {
    if(product){
        if(Object.keys(product).length !== 0){
        
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
          value={categories?.filter(it => (it._id === row?.category))?.map(el => ({value: el._id, label: el.name})) }
          name='category'
          size='large'
          onChange = {value => onCategoryChangeHandler(value)}
          options={categories?.map(it => ({value: it._id, label: it.name}))}
        />
        <Select
            placeholder='Подкатегория'
            className={'select'}
            value={all_subcategories?.filter(it => (it._id === row?.subcategory))?.map(el => ({value: el._id, label: el?.subcategory}))}
            name='subcategory'
            size='large'
            onChange={value => setRow({...row, subcategory: value})}
            options={subcategories?.map(el => ({value: el._id, label: el.name}))}
          />
          <input type='text' 
            className='form_input'
            placeholder='Тип'
            defaultValue={row?.type}
            name="type"
            onChange={e => setRow({...row, [e.target.name]: e.target.value})} />

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
            value={ row && row.inStock === true ? {value: true, label: 'В наличии'} : {value: false, label: 'Отсутствует'}}
            onChange={value => setRow({...row, inStock: value})}
            options={[{value: true, label: 'В наличии'}, {value: false, label: 'Отстутствует'}]}
      />
         <Select
            placeholder='Хит'
            className={'select'}
            size='large'
            name='popular'
            value={ row && row.popular === true ? {value: true, label: 'Хит'} : {value: false, label: 'Нет'}}
            onChange={value => setRow({...row, popular: value})}
            options={[{value: true, label: 'Хит'}, {value: false, label: 'Нет'}]}
      />

      
          <input type='file' 
            filename='img' 
            className='form_input'
            name='img'
            onChange={e => onImgChangeHandler(e)}>
          </input>
          <div>
            {
            newImg
            ? <img src={URL.createObjectURL(newImg)} alt={row?.img?.name} className='form_img'/>
            : <img src={`/uploads/${row?.img}`} alt={row?.img?.name} className='form_img'/>   
          }
        </div>    
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