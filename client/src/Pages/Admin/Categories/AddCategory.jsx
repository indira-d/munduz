import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import './Category.css'
import {useDispatch, useSelector} from 'react-redux'
import { addCategory } from '../../../redux/CategorySlice';
import { Divider } from '@mui/material';
import { addSubcategory } from '../../../redux/SubcategorySlice';
import { Select } from 'antd';


const AddCategory = () => {

   const [img, setImg] = useState()
   const [name, setName] = useState()
   const [categoryId, setCategoryId] = useState()
   const [subcategory, setSubcategory] = useState()
   const [selection1, setSelection1] = useState()
   const [selection2, setSelection2] = useState()
   const categories = useSelector(state => state.categories.categories)
   const dispatch = useDispatch()

    const resetFields = () => {
      setName('')
      setImg('')
    }

   
   const createCategory = () => {
     const formData = new FormData()
            formData.append('img', img)
            formData.append('name', name)
            formData.append('selection1', selection1)
            formData.append('selection2', selection2)
      dispatch(addCategory(formData))
   
   }
    
   const createSubcategory = () => {

      const formData = new FormData()
            formData.append('subcategory', subcategory)
            formData.append('category', categoryId )

      dispatch(addSubcategory({categoryId, subcategory}))
    }

  return (
	<div className='category'>
		<Sidebar />
		    <h2 className='admin_header'>Добавить категорию</h2>
        <form encType="multipart/form-data" className='form' onSubmit={e => e.preventDefault()}>
          <input
            className='form_input'
            placeholder='Категория'
            id="name"
            onChange={e => setName(e.target.value)}
          />
           <input
            className='form_input'
            placeholder='Подборка 1'
            id="selection1"
            onChange={e => setSelection1(e.target.value)}
          />
           <input
            className='form_input'
            placeholder='Подборка 2'
            id="selection2"
            onChange={e => setSelection2(e.target.value)}
          />
          <input type='file'
            className='form_input'
            id='img'
            onChange={e => setImg(e.target.files[0])}>
          </input>
          <div>
              {img && <img src={URL.createObjectURL(img)} alt={img.name} className='form_img'/> }
          </div>
          <div>
            <button type='submit' 
              onClick={createCategory} className='form_btn'>
              ДОБАВИТЬ КАТЕГОРИЮ
            </button>
          </div>
        </form> 

        <Divider />
      <h2 className='admin_header'>Добавить подкатегорию</h2>
        <form encType="multipart/form-data" className='form' onSubmit={e => e.preventDefault()}>
     
          <Select
            className={'select'}
            placeholder='Категория'
            id='category_name'
            size='large'
            onChange = { value=> setCategoryId(value)}
            options={categories?.map(it => ({value: it?._id, label: it?.name}))}
          />
          <input
            className='form_input'
            placeholder='Подкатегория'
            name="subcategory"
            onChange={e => setSubcategory(e.target.value)}
          />
          <div>
            <button type='submit' 
              onClick={createSubcategory} className='form_btn'>
              ДОБАВИТЬ ПОДКАТЕГОРИЮ
            </button>
          </div>
        </form>
	</div>
  )
}

export default AddCategory