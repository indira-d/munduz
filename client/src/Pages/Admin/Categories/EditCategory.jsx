import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../Sidebar'
import { Select } from 'antd';
import { useParams } from 'react-router-dom';
import { updateCategory } from '../../../redux/CategorySlice';


const EditCategory = () => {
  const params = useParams()
  const categories = useSelector(state => state.categories.categories)
  const category = categories.find(it => it._id === params.id)
   const [img, setImg] = useState()
   const [name, setName] = useState(category.name)
   const [selection1, setSelection1] = useState(category.selection1)
   const [selection2, setSelection2] = useState(category.selection2)
   const [subcategories, setSubcategories] = useState(category.subcategories.map(it => ({_id: it._id, name: it.name})))
   const [newImg, setNewImg] = useState('')

   const state_subcategories = useSelector(state => state.subcategories.subcategories)
   const dispatch = useDispatch()
  


   console.log('newImg', newImg.name)
   

    const resetFields = () => {
      setName('')
      setImg('')
    }

    

  const submitHandler = (e) => {
    e.preventDefault()
         const data = new FormData()
            data.append('name', name) 
            data.append('img', newImg?.name)
            data.append('subcategories', subcategories)
            data.append('selection1', selection1)
            data.append('selection2', selection2)

            const formData = {
              name, img: newImg?.name, subcategories, selection1, selection2

            }
        
      dispatch(updateCategory({updatedCategory: formData, id:params.id}))
  }

  const onSubcategoryChangeHandler = (value) => {
      const test = state_subcategories.filter(it => value.some(el => (it.subcategory === el || it._id === el)))
      .map(it => ({_id: it._id, name: it.subcategory}))
      setSubcategories(test)
  }

  return (
		<div className='category'>
		<Sidebar />
		    <h2 className='admin_header'>Редактировать категорию</h2>
        <form encType="multipart/form-data" className='form' onSubmit={e => e.preventDefault()}>
          <input
            className='form_input'
            placeholder='Категория'

            label="Категория"
            onChange={e => setName(e.target.value)}
			      value={name}
          />
          <Select
            className={'select'}
            mode="multiple"
            allowClear
            placeholder="Подкатегории"
            defaultValue={subcategories.map(it => ({value: it._id, label: it.name}))}
            onChange={value => onSubcategoryChangeHandler(value)}
            options={state_subcategories?.map(it => ({value: it?._id, label: it?.subcategory}))}
            />
           <input
            className='form_input'
            placeholder='Подборка 1'
            id="selection1"
			      defaultValue={selection1}
            onChange={e => setSelection1(e.target.value)}
          />
           <input
            className='form_input'
            placeholder='Подборка 2'
            id="selection2"
            label="Подборка 2"
			      defaultValue={selection2}
            onChange={e => setSelection2(e.target.value)}
          />
          <input type='file' 
            filename='img' 
            className='form_input'
            id='img'
            onChange={e => setNewImg(e.target.files[0])}>
          </input>
          <div>
			 {
            newImg
            ? <img src={URL.createObjectURL(newImg)} alt={newImg} className='form_img'/>
            : <img src={`/uploads/${category.img}`} alt={category.name} className='form_img'/>   
          }
              {img && <img src={URL.createObjectURL(img)} alt={img.name} className='form_img'/> }
          </div>

          <div>
            <button
              type='submit'
              onClick={submitHandler} 
			        className='form_btn'>
              РEДАКТИРОВАТЬ
            </button>
          </div>

        </form> 
	</div>
  )
}

export default EditCategory