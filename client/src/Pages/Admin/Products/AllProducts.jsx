import React, {useEffect, useState} from 'react'
import Sidebar from '../Sidebar';
import './AllProducts.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import { getAllProducts, deleteProduct, getProduct } from '../../../redux/ProductSlice';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

import {Link} from 'react-router-dom'
import './AllProducts.css'


const AllProducts = () => {
	
  const dispatch = useDispatch()
  const state_products = useSelector(state => state.products.products)
  const [products, setProducts] = useState()
  const categories = useSelector(state => state.categories.categories)
  const subcategories = useSelector(state => state.subcategories.subcategories)

	useEffect(() => {
      const request = async (req, res) => {
      try {
        res = await axios.get('http://localhost:8000/products')
     
        if(res.data){
          dispatch(getAllProducts(res.data))
        }
      } catch (error) {
        console.log(error)
      }
  }
  request()
  }, [dispatch])

  useEffect(()=>{
     if(state_products){
      setProducts(state_products)
     }

  }, [state_products])


  return (

	<div className='all_products' >
		   <Sidebar />
		   <h2 className='admin_header'>Все товары</h2>
		   <TableContainer component={Paper} sx={{ margin: '50px 0px' }}>
      <Table sx={{ minWidth: 600}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold', width: '10px'}} className='tableHead' align="left">№</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left">Изображение</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left">Наименование</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left">Описание</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left">Категория</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left">Подкатегория</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left">Цена</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left">Скидка</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left">Размер</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left">Цвет</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left">В наличии</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left">Хит</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left">Подборка1</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left">Подборка2 </TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableHead' align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((row, index) => (
            <TableRow 
              className='tableRow'
              key={row?._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" className='tableCell'>{index+1}</TableCell>
              <TableCell align="left" className='tableCell'>{row && row.img ? <img src={`/uploads/${row.img}`} className='table_img' alt={row.name}/> : ''} </TableCell>
              <TableCell align="left" className='tableCell'>{row?.name}</TableCell>
              <TableCell align="left" className='tableCell'>{row?.description}</TableCell>
              <TableCell align="left" className='tableCell'>{categories.find(it => it._id === row?.category)?.name}</TableCell>
              <TableCell align="left" className='tableCell'>{subcategories.find(it => it._id === row?.subcategory)?.subcategory}</TableCell>
              <TableCell align="left" className='tableCell'>{row?.price}</TableCell>
              <TableCell align="left" className='tableCell'>{row?.discount}</TableCell>
              <TableCell align="left" className='tableCell'>{row?.size}</TableCell>
              <TableCell align="left" className='tableCell'>{row?.color}</TableCell>
              <TableCell align="left" className='tableCell'>{row?.inStock ? 'Да' : 'Нет'}</TableCell>
              <TableCell align="left" className='tableCell'>{row?.popular ? 'Да' : 'Нет'}</TableCell>
               <TableCell align="left" className='tableCell'>{row?.selection1}</TableCell>
                <TableCell align="left" className='tableCell'>{row?.selection2}</TableCell>
              <TableCell  className='lastCell' >
                <Link to={`/editProduct/${row?._id}`} 
                    className='admin_table_btn'
                    onClick={() => dispatch(getProduct(row._id))}>
                    <EditOutlined className='btns'/>
                </Link>
                <button className='admin_table_btn' onClick={() => dispatch(deleteProduct(row._id))}>
                    <DeleteOutlined className='btns'/>
                </button>
			        </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	</div>
  )
}

export default AllProducts