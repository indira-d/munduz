import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import './Category.css'
import {useDispatch, useSelector} from 'react-redux'
import { addCategory } from '../../../redux/CategorySlice';
import { Divider } from '@mui/material';
import { addSubcategory } from '../../../redux/SubcategorySlice';


const AddCategory = () => {

   const [img, setImg] = useState()
   const [name, setName] = useState()
   const [categoryName, setCategoryName] = useState()
   const [subcategory, setSubcategory] = useState()
   const categories = useSelector(state => state.categories.categories)
   const dispatch = useDispatch()

   
   const createCategory = () => {
     const formData = new FormData()
            formData.append('img', img)
            formData.append('name', name)

      dispatch(addCategory(formData))
   }

   const createSubcategory = () => {
     const categoryId = categories.find(it =>  it.name === categoryName.toString())._id

     if(categoryId){
      const formData = new FormData()
            formData.append('subcategory', subcategory)
            formData.append('category', categoryId )

      dispatch(addSubcategory({categoryId, subcategory}))
     }
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
            label="Категория"
            onChange={e => setName(e.target.value)}
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
          <input
          className='form_input'
          placeholder='Категория'
          id="category_name"
          label="Категория"
          onChange={e => setCategoryName(e.target.value)}
        />

        <input
          className='form_input'
          placeholder='Подкатегория'
          name="subcategory"
          label="Подкатегория"
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