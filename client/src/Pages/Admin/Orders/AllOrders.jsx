import React, {useEffect, useState} from 'react';
import Sidebar from "../Sidebar";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {deleteOrder, getAllOrders, getOrder} from "../../../redux/OrderSlice";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Link} from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import './Order.css'
import moment from "moment";
import 'moment/locale/ru'
moment.locale('ru')


const AllOrders = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.order.orders)


    useEffect(() => {
        const request = async (req, res) => {
            try {
                res = await axios.get('http://localhost:8000/orders')
                if(res.data){
                    dispatch(getAllOrders(res.data))
                }
            } catch (error) {
                console.log(error)
            }
        }
        request()
    }, [])

    return (
        <div className={'orders'}>
           <Sidebar />
            <h2 className='admin_header'>Все Заказы</h2>
            <TableContainer component={Paper} sx={{ margin: '50px 0px' }}>
                <Table sx={{ minWidth: 600}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">№</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Заказчик</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Телефон</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Заказ</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Комментарий</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Время заказа</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left">Статус</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}} className='tableCell' align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders?.map((row, index) => (
                            <TableRow
                                className='tableRow'
                                key={row?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" className='tableCell'>{index+1}.</TableCell>
                                <TableCell align="left" className='tableCell'>{row?.username}</TableCell>
                                <TableCell align="left" className='tableCell'>{row?.phone}</TableCell>
                                <TableCell align="left" className='tableCell'>
                                    {
                                        row?.products?.map(it =>
                                            (<div className={'order_row'}>
                                                <div style={{width: '100px'}}>{it.name}</div>
                                                <div>{it.size}</div>
                                                <div>{it.color}</div>
                                                <div>{it.quantity} шт</div>
                                                <div>{it.price} P</div>
                                                <div style={{fontWeight: 'bold'}}>{it.price * it.quantity} P</div>
                                            </div>)
                                    )}
                                    <div align="left" className='tableCellTotal' >
                                        <div>Итого: </div>
                                        <div>{row.products.reduce((acc, it) => acc + (it.price * it.quantity), 0)} P</div>
                                    </div>
                                </TableCell>
                                <TableCell align="left" className='tableCell'>{row?.comment}</TableCell>
                                <TableCell align="left" className='tableCell'>{moment(row?.createdAt).format('LLL')}</TableCell>
                                <TableCell align="left" className='tableCell'>{row.status}</TableCell>
                                <TableCell  className='lastCell' >
                                    <Link to={`/editOrder/${row._id}`}
                                          className='admin_table_btn'
                                          onClick={() => dispatch(getOrder(row._id))}>
                                        <EditIcon fontSize='small' className='btns'/>
                                    </Link>
                                    <button className='admin_table_btn' onClick={() => dispatch(deleteOrder(row._id))}>
                                        <DeleteOutlineIcon fontSize='small' className='btns'/>
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default AllOrders;