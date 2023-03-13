import React, {useEffect} from 'react'
import Sidebar from '../Sidebar'
import './Category.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, getAllCategories, } from '../../../redux/CategorySlice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getAllSubcategories } from '../../../redux/SubcategorySlice';
import { Link } from 'react-router-dom';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

const AllCategories = () => {
	const dispatch = useDispatch()
	const categories = useSelector(state => state.categories.categories)
	const subcategories = useSelector(state => state.subcategories.subcategories)


	useEffect(() => {
      const request = async (req, res) => {
      try {
        res = await axios.get('http://localhost:8000/categories')
     
        if(res.data){
          dispatch(getAllCategories(res.data))
        }
      } catch (error) {
        console.log(error)
      }
  }

   const getSubcategories = async (req, res) => {
      try {
        res = await axios.get('http://localhost:8000/subcategories')
     
        if(res.data){
          dispatch(getAllSubcategories(res.data))
        }
      } catch (error) {
        console.log(error)
      }
  }
  request()
  getSubcategories()


  }, [dispatch])


  return (
	<div className='category'>
		<Sidebar />
		
		<div className='all_categories' >
		   <Sidebar />
		   <h2 className='admin_header'>Все Категории</h2>
		   <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}} align="left">№</TableCell>
			      <TableCell sx={{fontWeight: 'bold'}} align="left">Изображение</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="left">Категория</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="left">Подкатегории</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="left">Подборка 1</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="left">Подборка 2</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="left"></TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories?.map((row, index) => (
            <TableRow key={row?.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left"> {index +1}</TableCell>
              <TableCell align="left"><img src={`/uploads/${row?.img}`} className='table_img' alt={row?.name}/></TableCell>
              <TableCell align="left">{row?.name}</TableCell>
              <TableCell align="left">{row?.subcategories.map(it => <div>
                {it?.name}
              </div>)}</TableCell>
              <TableCell align="left">{row?.selection1}</TableCell>
               <TableCell align="left">{row?.selection2}</TableCell>
			  <TableCell sx={{fontWeight: 'bold'}} align="left">
			  <Link to={`/editCategory/${row?._id}`} className='admin_table_btn'
				   //onClick={() => dispatch(getCategory(row._id))}
          >
					<EditOutlined />
				</Link>
				<button 
          className='admin_table_btn' 
          onClick={() => dispatch(deleteCategory(row?._id))}
        >
					<DeleteOutlined />
				</button> 
			  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	</div>
</div>
  )
}

export default AllCategories
