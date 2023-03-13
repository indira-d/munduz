import React, {useState, useEffect} from 'react'
import './AddProduct.css'
import {useDispatch, useSelector} from 'react-redux'
import Sidebar from '../Sidebar';
import { updateProduct } from '../../../redux/ProductSlice';
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

   const onCategoryChangeHandler = (value) => {
       setRow({...row, category: value})
       setSubcategories(categories.find(it => it._id === value).subcategories)
   }

   console.log('row2', row)

   const submitHandler = () => {
    try {
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
            data.append('popular', row?.popular ? row.popular : false)
            data.append('selection1', row?.selection1 ? row.selection1 : '')
            data.append('selection2', row?.selection2 ? row.selection2 : '')
            

      dispatch(updateProduct({product: data,  id: params.id}))
    } catch (error) {
      console.log(error)
    }}

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
            size: product?.size,
            _id: product?._id,
            inStock: product?.inStock,
            discount: product?.discount,
            selection1: product?.selection1 || '',
            selection2: product?.selection2 || ''
          })
          }}    
   }, [product])


  return (
	<div className='admin'>
    <Sidebar />
    <h2 className='admin_header'>Редактировать товар</h2>
        <form onSubmit={e => e.preventDefault()} encType="multipart/form-data" className='form'>
       <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <div>
          <div className='subtitle'>Наименование</div>
          <input
            required
            className='form_input'
            value={row?.name}
            onChange={e => setRow({...row, name: e.target.value})}
          />
        </div>
        <div>
          <div className='subtitle'>Описание</div>
          <input
          className='form_input'
          defaultValue={row?.description}
          onChange={e => setRow({...row, description: e.target.value})}
        />
        </div>
        <div>
          <div className='subtitle'>Категория</div>
          <Select
          className={'select'}
          value={categories?.filter(it => (it._id === row?.category))?.map(el => ({value: el._id, label: el.name})) }
          size='large'
          onChange = {value => onCategoryChangeHandler(value)}
          options={categories?.map(it => ({value: it._id, label: it.name}))}
        />
        </div>
        <div>
          <div className='subtitle'> Подкатегория</div>
          <Select
            className={'select'}
            value={all_subcategories?.filter(it => (it._id === row?.subcategory))?.map(el => ({value: el._id, label: el?.subcategory}))}
            size='large'
            onChange={value => setRow({...row, subcategory: value})}
            options={subcategories?.map(el => ({value: el._id, label: el.name}))}
          />
        </div>
        <div>
          <div className='subtitle'>Цена</div>
          <input type='number' 
            required
            className='form_input'
            defaultValue={row?.price}
            onChange={e => setRow({...row, price: Number(e.target.value)})} />
        </div>
        <div>
          <div className='subtitle'>
            Размер/Объем/Вес
          </div>
          <input type='text' 
            className='form_input'
            defaultValue={row?.size}
            onChange={e => setRow({...row, size: e.target.value})} />
        </div>
          <div>
            <div className='subtitle'>Цвет</div>
             <input type='text' 
              className='form_input'
              defaultValue={row?.color}
              onChange={e => setRow({...row, color: e.target.value})} />
            </div>
         
          <div>
            <div className='subtitle'>Скидка</div>
            <input type='number' 
              className='form_input'
              defaultValue={row?.discount}
              onChange={e => setRow({...row, discount: Number(e.target.value)})} />
          </div>
          <div>
            <div className='subtitle'>В наличии</div>
            <Select
              className={'select'}
              size='large'
              value={ row && row.inStock === true ? {value: true, label: 'В наличии'} : {value: false, label: 'Отсутствует'}}
              onChange={value => setRow({...row, inStock: value})}
              options={[{value: true, label: 'В наличии'}, {value: false, label: 'Отстутствует'}]}
            />
          </div>
          <div>
            <div className='subtitle'>Хит</div>
            <Select
              className={'select'}
              size='large'
              value={ row && row.popular === true ? {value: true, label: 'Хит'} : {value: false, label: 'Нет'}}
              onChange={value => setRow({...row, popular: value})}
              options={[{value: true, label: 'Хит'}, {value: false, label: 'Нет'}]}
            />
          </div>
          <div>
            <div className='subtitle'>Подборка 1</div>
            <input type='text' 
              className='form_input'
              defaultValue={row?.selection1}
              onChange={e => setRow({...row, selection1: e.target.value})} />
          </div>
          <div>
            <div className='subtitle'>Подборка 2</div>
              <input type='text' 
              className='form_input'
              defaultValue={row?.selection2}
              onChange={e => setRow({...row, selection2 : e.target.value})} />
          </div>
          <div>
            <div className='subtitle'>Изображение</div>
            <input type='file'
              className='form_input'
              name='img'
              onChange={e => onImgChangeHandler(e)}>
            </input>
          </div>
            
          <div>
            {
            newImg
              ? <img src={URL.createObjectURL(newImg)} alt={row?.img?.name} className='form_img'/>
              : <img src={`/uploads/${row?.img}`} alt={row?.img?.name} className='form_img'/>   
            }
        </div>    
        </div>
        <div>
          <button onClick={submitHandler} className='form_btn' type='submit'>
            РЕДАКТИРОВАТЬ ТОВАР
          </button>
          </div>
        </form> 
  </div>
  )
}

export default EditProduct