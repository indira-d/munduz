import React from 'react'
import {categories} from '../../data'
import './CategoryItem.css'
import {Link} from 'react-router-dom'


const CategoryItem = () => {
  return (
	<div className='category_wrapper'>
		{
			categories.map(it => (
				<Link to='/catalogue' className='categoryItem' style={{ textDecoration: 'none' }}>
					<div className="categoryTitle">{it.title}</div>
					<img src={it.img} alt="" className="categoryImg" />
				</Link>
			))
		}
		
	</div>
  )
}

export default CategoryItem
