import React, {useEffect} from 'react'
import Sidebar from '../Sidebar'
import './Category.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteSubcategory, getAllSubcategories } from '../../../redux/SubcategorySlice';
import { DeleteOutlined} from '@ant-design/icons';

const AllSubcategories = () => {
	const dispatch = useDispatch()
	const subcategories = useSelector(state => state.subcategories.subcategories)

	useEffect(() => {
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
		getSubcategories()
  }, [dispatch])


  return (
	<div className='category'>
		<Sidebar />
		<div className='all_categories' >
		   <Sidebar />
		   <h2 className='admin_header'>Все подкатегории</h2>
		   <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}} align="left">№</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="left">Подкатегория</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subcategories?.map((row, index) => (
            <TableRow key={row?.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left"> {index +1}</TableCell>
              <TableCell align="left">{row?.subcategory}</TableCell>
			  <TableCell sx={{fontWeight: 'bold'}} align="left">

				<button 
					className='admin_table_btn' 
					onClick={() => dispatch(deleteSubcategory(row?._id))}
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

export default AllSubcategories
