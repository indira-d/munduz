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
   const [selection, setSelection] = useState('')
   const [isPopular, setIsPopular] = useState(false)
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
            <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '20px'}}>
                <div>
                    <div className='subtitle'>Наименование</div>
                    <input
                    required
                    className='form_input'
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <div className='subtitle'>Описание</div>
                    <input
                    className='form_input'
                    onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <div className='subtitle'>Категория</div>
                    <Select
                        className={'select'}
                        size='large'
                        onChange = { value => onCategoryChangeHandler(value)}
                        options={categories?.map(it => ({value: it._id, label: it.name}))}
                    />
                </div>
                <div>
                    <div className='subtitle'>Подкатегория</div>
                    <Select
                        className={'select'}
                        size='large'
                        onChange={value => setSubcategory(subcategories.find(it => it._id === value))}
                        options={subcategories?.map(el => ({value: el._id, label: el.name}))}
                    />
                </div>
                <div>
                    <div className='subtitle'>Цена</div>
                    <input type='number' 
                    required
                    className='form_input'
                    onChange={e => setPrice(Number(e.target.value))} />
                </div>
                <div>
                    <div className='subtitle'>Автор</div>
                    <input
                        required
                        className='form_input'
                        onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <div>
                    <div className='subtitle'>Aдрес</div>
                    <input type='text' 
                    className='form_input'
                    onChange={e => setAddress(e.target.value)} />
                </div>
                <div>
                    <div className='subtitle'>Телефон</div>
                    <input type='text' 
                    className='form_input'
                    defaultValue={''}
                    onChange={e => setPhone(e.target.value)} />
                </div>
                <div>
                    <div className='subtitle'>Скидка</div>
                    <input type='number' 
                        className='form_input'
                        placeholder='Скидка'
                        id="discount"
                        defaultValue={'0'}
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
                        id='img'
                        onChange={e => setImg(e.target.files[0])}>
                    </input>
                </div>
                <div>
                    {img && <img src={URL.createObjectURL(img)} alt={img.name} className='form_img'/> }
                </div>
                <div>
                    <div className='subtitle'>avatar</div>
                    <input type='file' 
                        filename='avatar' 
                        className='form_input'
                        id='avatar'
                        onChange={e => setAvatar(e.target.files[0])}></input>
                </div>
                <div>
                    {avatar && <img src={URL.createObjectURL(avatar)} alt={avatar.name} className='form_img'/> }
                </div>
                <div>
                    <button onClick={(e) => submitHandler(e)} className='form_btn'type='submit'>
                        ДОБАВИТЬ УСЛУГУ
                    </button>
                </div>
            </div>
        </form> 
	</div>
  </div>
  )
}

export default AddService