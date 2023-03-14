import React, {useState} from 'react'
import './AddProduct.css'
import {useDispatch, useSelector} from 'react-redux'
import { addProduct } from '../../../redux/ProductSlice';
import Sidebar from '../Sidebar';
import { Select} from 'antd';
const AddProduct = () => {
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
   const [isPopular, setIsPopular] = useState(false)
   const [selection1, setSelection1] = useState('')
   const [selection2, setSelection2] = useState('')

   const categories = useSelector(state => state.categories.categories)
   const dispatch = useDispatch()

   console.log('isPipular', isPopular)

   const submitHandler = () => {

    try {
         const data = new FormData()
            data.append('name', name)
            data.append('price', price)
            data.append('img', img)
            data.append('description', description)
            data.append('category', category)
            data.append('subcategory', subcategory)
            data.append('color', color)
            data.append('size', size)
            data.append('inStock', inStock)
            data.append('discount', discount)
            data.append('popular', isPopular)
            data.append('selection1', selection1)
            data.append('selection2', selection2)

       dispatch(addProduct(data))
      
    } catch (error) {
      console.log('error',error)
    }          
   }

   const onCategoryChangeHandler = (value) => {
    console.log('value', value)
       setCategory(value)
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
       <div style={{display: 'flex', flexWrap: 'wrap'}}>
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
            onChange={value => setSubcategory(value)}
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
          <div className='subtitle'>Размер</div>
          <input type='text' 
            className='form_input'
            onChange={e => setSize(e.target.value)} />
        </div>
        
        <div>
          <div className='subtitle'>Цвет</div>
            <input type='text' 
            className='form_input'
            defaultValue={''}
            onChange={e => setColor(e.target.value)} />
        </div>
        <div>
          <div className='subtitle'>Скидка</div>
          <input type='number' 
          className='form_input'
          defaultValue={'0'}
          onChange={e => setDiscount(Number(e.target.value))} />
        </div>
        <div>
          <div className='subtitle'>В наличии</div>
           <Select
            className={'select'}
            size='large'
            defaultValue={inStock}
            onChange={value => setInStock(value)}
            options={[{value: true, label: 'В наличии'}, {value: false, label: 'Отстутствует'}]}
      />
        </div>
        <div>
          <div className='subtitle'>Хит</div>
          <Select
            className={'select'}
            size='large'
            value={isPopular}
            onChange={value => setIsPopular(value)}
            options={[{value: true, label: 'Да'}, {value: false, label: 'Нет'}]}
          />
        </div>
        <div>
          <div className='subtitle'>Подборка 1</div>
          <input type='text' 
              className='form_input'
               defaultValue={''}
              onChange={e => setSelection1(e.target.value)} />
        </div>
        <div>
          <div className='subtitle'>Подборка 2</div>
          <input type='text' 
              className='form_input'
              defaultValue={''}
              onChange={e => setSelection2(e.target.value)} />
        </div>
        <div>
          <div className='subtitle'>Изображение</div>
          <input type='file' 
              filename='img' 
              className='form_input'
              onChange={e => setImg(e.target.files[0])}>
            </input>
        </div> 
          <div>
              {img && <img src={URL.createObjectURL(img)} alt={img.name} className='form_img'/> }
          </div>
        
        </div>
          <div>
          <button onClick={submitHandler} className='form_btn' type='submit'>
            ДОБАВИТЬ ТОВАР
          </button>
          </div>
        </form> 
      </div>
  )
}

export default AddProduct