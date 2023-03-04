import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import s from './Service.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Select} from 'antd';
import { addService } from '../../../redux/ServiceSlice';

const AddService = () => {

   const [img, setImg] = useState('')
   const [avatar, setAvatar] = useState('')
   const [name, setName] = useState()
   const [author, setAuthor] = useState()
   const [category, setCategory] = useState()
   const [subcategories, setSubcategories] = useState()
   const [subcategory, setSubcategory] = useState()
   const [address, setAddress] = useState('')
   const [description, setDescription] = useState()
   const [phone, setPhone] = useState()
   const [price, setPrice] = useState()
   const [discount, setDiscount] = useState(0)
   const categories = useSelector(state => state.categories.categories)
   const dispatch = useDispatch() 


 
   const submitHandler = (e) => {
      e.preventDefault()
    try {
  

        const data = {
                      name, 
                      img: img.name, 
					  avatar: avatar.name,
                      description, 
                      category, 
                      subcategory,
                      price,
                      address,
                      phone,
                      discount,
                      author
                    }
              dispatch(addService(data))
      
    } catch (error) {
      console.log('error',error)
    }          
   }

   const onCategoryChangeHandler = (value) => {
       setCategory({_id: value, name: categories.find(it => it._id === value).name})
       setSubcategories(categories.find(it => it._id === value).subcategories)
   }

  return (
	<div className={s.service}>
		<Sidebar />
	   <div className='admin'>
        <h2 className='admin_header'>Добавить услугу</h2>
        <div style={{fontSize: '12px', color: 'gray', marginLeft: '15px'}}>
          <h4>Перед тем как добавить услугу:</h4>
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

        <input
          required
          className='form_input'
          id="author"
          label="Автор"
          placeholder='Автор'
          onChange={e => setAuthor(e.target.value)}
        />
          
        <input type='text' 
          className='form_input'
          placeholder='Aдрес'
          id="adress"
          onChange={e => setAddress(e.target.value)} />

          <input type='text' 
            className='form_input'
            placeholder='Телефон'
            id="phone"
            defaultValue={''}
            onChange={e => setPhone(e.target.value)} />
          
          <input type='number' 
            className='form_input'
            placeholder='Скидка'
            id="discount"
            defaultValue={'0'}
            onChange={e => setDiscount(Number(e.target.value))} />
          

      <div>
        <input type='file' 
          filename='img' 
          className='form_input'
          id='img'
          onChange={e => setImg(e.target.files[0])}>
        </input>
        
            {img && <img src={URL.createObjectURL(img)} alt={img.name} className='form_img'/> }
        </div>
		 <div>
		<input type='file' 
          filename='avatar' 
          className='form_input'
          id='avatar'
          onChange={e => setAvatar(e.target.files[0])}>
        </input>
       
            {avatar && <img src={URL.createObjectURL(avatar)} alt={avatar.name} className='form_img'/> }
        </div>
        
        </div>  
          <div>
          <button onClick={(e) => submitHandler(e)} className='form_btn'type='submit'>
            ДОБАВИТЬ УСЛУГУ
          </button>
          </div>
        
        </form> 
	  </div>
	</div>
  )
}

export default AddService