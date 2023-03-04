import React from 'react'
import './CategoryItem.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';



const CategoryItem = (props) => {
	const categories = useSelector(state => state.categories.categories )
  
	return (
	<div className='category_wrapper' 
	style={props && props.style ? props.style : {}}
	>
		{
			 categories
			 ?.filter((el, index) => index <= (props.numberOfItems ? props.numberOfItems : index)  )
			 ?.map(it =>  (
				<Link to={`/category/${it?._id}`} className='categoryItem' style={{ textDecoration: 'none' }}>
					<div className="categoryTitle">{it?.name}</div>
					<img src={`/uploads/${it?.img}`} alt={it.name} className="categoryImg" />
				</Link>
				))	
		}	
	</div>
  )
}

export default CategoryItem
