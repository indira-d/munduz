import React, { useState } from 'react'
import Sidebar from '../Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from 'antd';
import { updateService } from '../../../redux/ServiceSlice';
import { useParams } from 'react-router-dom';

const EditService = () => {
const service = useSelector(state => state.services.service)

   const [img, setImg] = useState('')
   const [newImg, setNewImg] = useState('')
   const [avatar, setAvatar] = useState('')
   const [newAvatar, setNewAvatar] = useState('')
   const [name, setName] = useState(service?.name)
   const [author, setAuthor] = useState(service?.author)
   const [category, setCategory] = useState({value: service?.category?._id, label: service?.category?.name})
   const [subcategories, setSubcategories] = useState()
   const [subcategory, setSubcategory] = useState({value: service?.subcategory?._id, label: service?.subcategory?.name})
   const [address, setAddress] = useState(service?.address)
   const [description, setDescription] = useState(service?.description)
   const [phone, setPhone] = useState(service?.phone)
   const [price, setPrice] = useState(service?.price)
   const [discount, setDiscount] = useState(service?.discount)
   const [selection, setSelection] = useState('')
   const [isPopular, setIsPopular] = useState(false)

   const categories = useSelector(state => state?.categories?.categories)
   const dispatch = useDispatch() 
   const params = useParams()
   

    const onCategoryChangeHandler = (value) => {
       setCategory({_id: value, name: categories.find(it => it._id === value).name})
       setSubcategories(categories.find(it => it._id === value).subcategories)
    }

    const submitHandler = (e) => {
      e.preventDefault()
    try {
        const data = {
                      name, 
                      img: newImg.name, 
					            avatar: newAvatar.name,
                      description, 
                      category, 
                      subcategory,
                      price,
                      address,
                      phone,
                      discount,
                      author,
                      isPopular,
                      selection
                    }
              dispatch(updateService({service: data, id: params.id}))
      
    } catch (error) {
      console.log('error',error)
    }          
   }

  return (
	<div>
    <Sidebar />
    <div>
      <div className='admin'>
        <h2 className='admin_header'>Редактировать услугу</h2>
        
        <Sidebar />
      <form onSubmit={e => e.preventDefault()} encType="multipart/form-data" className='form'>
       <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '20px'}}>
        <div>
          <div className='subtitle'>Наименование</div>
          <input
            required
            className='form_input'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <div className='subtitle'>Описание</div>
          <input
            className='form_input'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div>
          <div className='subtitle'>Категория</div>
          <Select
              className={'select'}
              size='large'
              value={category}
              onChange = { value => onCategoryChangeHandler(value)}
              options={categories?.map(it => ({value: it?._id, label: it?.name}))}
            />
        </div>
        <div>
          <div className='subtitle'>Подкатегория</div>
           <Select
              className={'select'}
              size='large'
              value={subcategory}
              onChange={value => setSubcategory(subcategories.find(it => it._id === value))}
              options={subcategories?.map(el => ({value: el?._id, label: el?.name}))}
            />
        </div>
        <div>
          <div className='subtitle'>Цена</div>
          <input type='number' 
            required
            className='form_input'
            value={price}
            onChange={e => setPrice(Number(e.target.value))} />
        </div>
        <div>
          <div className='subtitle'>Автор</div>
           <input
              required
              className='form_input'
              value={author}
              onChange={e => setAuthor(e.target.value)}
            />
        </div>
        <div>
          <div className='subtitle'>Aдрес</div>
          <input type='text' 
            className='form_input'
            value={address}
            onChange={e => setAddress(e.target.value)} />
        </div>
        <div>
          <div className='subtitle'>Телефон</div>
           <input type='text' 
            className='form_input'
            value={phone}
            onChange={e => setPhone(e.target.value)} />
        </div>
        <div>
          <div className='subtitle'>Скидка</div>
            <input type='number' 
              className='form_input'
              value={discount}
              onChange={e => setDiscount(Number(e.target.value))} />
        </div>
         <div>
              <div className='subtitle'>Хит</div>
              <Select
                  className={'select'}
                  size='large'
                  value={isPopular}
                  onChange={value => setIsPopular(value)}
                  options={[{value: true, label: 'Хит'}, {value: false, label: 'Нет'}]}
              />
          </div>
          <div>
              <div className='subtitle'>Подборка</div>
              <input type='text' 
                  className='form_input'
                  defaultValue={selection}
                  onChange={e => setSelection(e.target.value)}/>
          </div>
        <div>
          <div className='subtitle'>Изображение</div>
          <input type='file' 
            filename='img' 
            className='form_input'
            onChange={e => setNewImg(e.target.files[0])}>
          </input>
        </div>
        <div>
          {
            newImg
              ? <img src={URL.createObjectURL(newImg)} alt={img.name} className='form_img'/>
              : <img src={`/uploads/${service.img}`} alt={service.img?.name} className='form_img'/> 
          }
        </div>
		 <div>
      <div>
        <div className='subtitle'>Аватар</div>
        <input type='file' 
          filename='avatar' 
          className='form_input'
          value={avatar}
          onChange={e => setNewAvatar(e.target.files[0])}  />
      </div>
            {
            newAvatar
              ? <img src={URL.createObjectURL(newAvatar)} alt={newAvatar.name} className='form_img'/>
              : <img src={`/uploads/${service.avatar}`} alt={service.avatar?.name} className='form_img'/> 
          }
       
            {avatar && <img src={URL.createObjectURL(avatar)} alt={avatar.name} className='form_img'/> }
        </div>
        </div>  
          <div>
          <button onClick={(e) => submitHandler(e)} className='form_btn'type='submit'>
            РЕДАКТИРОВАТЬ УСЛУГУ
          </button>
          </div>
        </form> 
	  </div>
	</div>
</div>

  )
}

export default EditService