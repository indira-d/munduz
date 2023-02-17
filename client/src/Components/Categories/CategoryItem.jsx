import React from 'react'
import {categories} from '../../data'
import './CategoryItem.css'


const CategoryItem = () => {
  return (
	<div className='category_wrapper'>
		{
			categories.map(it => (
				<div className='categoryItem'>
					<div className="categoryTitle">{it.title}</div>
					<img src={it.img} alt="" className="categoryImg" />
				</div>
			))
		}
		
	</div>
  )
}

export default CategoryItem
