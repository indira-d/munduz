import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {getAllServices} from '../../../redux/ServiceSlice'
import { Link } from 'react-router-dom';
import s from './Service.module.css'
import Sidebar from '../Sidebar';


const AllServices = () => {

  const dispatch = useDispatch()
  const services = useSelector(state => state.services.services)

	useEffect(() => {
      const request = async (req, res) => {
      try {
        res = await axios.get('http://localhost:8000/services')
     
        if(res.data){
          dispatch(getAllServices(res.data))
        }
      } catch (error) {
        console.log(error)
      }
  }
  request()

  }, [dispatch])


  return (
	<div className={s.all_services} >
		   <Sidebar />
		   <h2 className='admin_header'>Все услуги</h2>
		   <TableContainer component={Paper} sx={{ margin: '50px 0px' }}>
      <Table sx={{ minWidth: 600}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">№</TableCell>
			      <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Изображение</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Наименование</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Описание</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Категория</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Подкатегория</TableCell>
			      <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Цена</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Скидка</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Аватар</TableCell>
			      <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Автор</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Адрес</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Телефон</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left"></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {services?.map((row, index) => (
            <TableRow
              key={row?._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" className='tableCell'>{index+1}</TableCell>
              <TableCell align="left" className='tableCell'>{row && row.img ? <img src={`/uploads/${row.img}`} className='table_img' alt={row.name}/> : ''} </TableCell>
              <TableCell align="left" className='tableCell'>{row?.name}</TableCell>
              <TableCell align="left" className='tableCell'>{row?.description}</TableCell>
              <TableCell align="left" className='tableCell'>{row?.category?.name}</TableCell>
			        <TableCell align="left" className='tableCell'>{row?.subcategory?.name}</TableCell>
              <TableCell align="left" className='tableCell'>{row?.price}</TableCell>
              <TableCell align="left" className='tableCell'>{row?.discount}</TableCell>
              <TableCell align="left" className='tableCell'>{row && row.avatar ? <img src={`/uploads/${row.avatar}`} className='table_img' alt={row.avatar}/> : ''} </TableCell>
              <TableCell align="left" className='tableCell'>{row?.author}</TableCell>
              <TableCell align="left" className='tableCell'>{row?.address}</TableCell>
              <TableCell align="left" className='tableCell'>{row?.phone}</TableCell>
              <TableCell  className='lastCell' >
                {/* <Link to={`/editProduct/${row._id}`} 
                    className='admin_table_btn'
                    onClick={() => dispatch(getProduct(row._id))}>
                    <EditIcon fontSize='small' className='btns'/>
                </Link> */}
                {/* <button className='admin_table_btn' onClick={() => dispatch(deleteProduct(row._id))}>
                    <DeleteOutlineIcon fontSize='small' className='btns'/>
                </button> */}
			        </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>

  )
}

export default AllServices
