import React, {useState} from 'react'
import './Admin.css'
import {useDispatch, useSelector} from 'react-redux'
import { addProduct } from '../../../redux/ProductSlice';
import Sidebar from '../Sidebar';
import { Select} from 'antd';


const Admin = () => {
   const [img, setImg] = useState('')
   const [name, setName] = useState()
   const [category, setCategory] = useState()
   const [subcategories, setSubcategories] = useState()
   const [subcategory, setSubcategory] = useState()
   const [color, setColor] = useState('')
   const [description, setDescription] = useState()
   const [size, setSize] = useState()
   const [price, setPrice] = useState()
   const [discount, setDiscount] = useState(0)
   const [inStock, setInStock] = useState(true)
   const categories = useSelector(state => state.categories.categories)
   const dispatch = useDispatch()

   console.log('imG', img.name)

   console.log('category', category)
   console.log('subcategory', subcategory)


   const submitHandler = (e) => {
      e.preventDefault()
    try {
  

        const data = {
                      name, 
                      img: img.name, 
                      description, 
                      category, 
                      subcategory,
                      price,
                      color,
                      size,
                      inStock,
                      discount
                    }
              dispatch(addProduct(data))
      
    } catch (error) {
      console.log('error',error)
    }          
   }

   const onCategoryChangeHandler = (value) => {
       setCategory({_id: value, name: categories.find(it => it._id === value).name})
       setSubcategories(categories.find(it => it._id === value).subcategories)
   }

  return (
	
      <div className='admin'>
        <h2 className='admin_header'>Добавить товар</h2>
        <div style={{fontSize: '12px', color: 'gray', marginLeft: '15px'}}>
          <h4>Перед тем как добавить товар:</h4>
            <div>1. &nbsp; Добавьте категорию;</div>
            <div>2. &nbsp; Добавьте подкатегории;</div> 
        </div>
        <Sidebar />
        <form onSubmit={e => e.preventDefault()} encType="multipart/form-data" className='form'>
       <div>
        <input
          required
          className='form_input'
          id="name"
          label="Наименование"
          placeholder='Наименование'
          onChange={e => setName(e.target.value)}
        />
        <input
          className='form_input'
          id="description"
          label="Описание"
          placeholder='Описание'
          onChange={e => setDescription(e.target.value)}
        />
       
        <Select
          className={'select'}
          placeholder='Категория'
          id='category'
          size='large'
          onChange = { value => onCategoryChangeHandler(value)}
          options={categories?.map(it => ({value: it._id, label: it.name}))}
        />
     <Select
        placeholder='Подкатегория'
        className={'select'}
        id='subcategory'
        size='large'
        onChange={value => setSubcategory(subcategories.find(it => it._id === value))}
        options={subcategories?.map(el => ({value: el._id, label: el.name}))}
      />

        <input type='number' 
          required
          className='form_input'
          placeholder='Цена'
          id="price"
          onChange={e => setPrice(Number(e.target.value))} />
          
          <input type='text' 
          className='form_input'
          placeholder='Размер'
          id="size"
          onChange={e => setSize(e.target.value)} />

          <input type='text' 
            className='form_input'
            placeholder='Цвет'
            id="color"
            defaultValue={''}
            onChange={e => setColor(e.target.value)} />
          
          <input type='number' 
            className='form_input'
            placeholder='Скидка'
            id="discount"
            defaultValue={'0'}
            onChange={e => setDiscount(Number(e.target.value))} />
          
          <Select
            placeholder='Товар на складе'
            className={'select'}
            size='large'
            id='inStock'
            defaultValue={true}
            onChange={value => setInStock(value)}
            options={[{value: true, label: 'В наличии'}, {value: false, label: 'Отстутствует'}]}
      />

      
        <input type='file' 
          filename='img' 
          className='form_input'
          id='img'
          onChange={e => setImg(e.target.files[0])}>
        </input>
        <div>
            {img && <img src={URL.createObjectURL(img)} alt={img.name} className='form_img'/> }
        </div>
        
        </div>
          
          <div>
          <button onClick={(e) => submitHandler(e)} className='form_btn'type='submit'>
            ДОБАВИТЬ ТОВАР
          </button>
          </div>
        
        </form> 
      </div>
  )
}

export default Admin