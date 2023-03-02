import React, {useState} from 'react'
import Header from '../../Components/Header/Header'
import './CategoryList.css'
import CatalogueSidebar from '../../Components/CatalogueSidebar/CatalogueSidebar';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CarouselItem from '../../Components/CarouselItem/CarouselItem';
import { products } from '../../data';

const CategoryList = () => {

  const categories = useSelector(state => state.categories.categories)
  const params = useParams()
  const products = (useSelector(state => state.products.products))

  const [subcategoryProducts, setSubcategoryProducts] = useState(
  )

  const onSubcategoryChangeHandler = (subcategory) => {
    const result = products.filter(it => it.subcategory === subcategory._id)
   
    if(result){
      setSubcategoryProducts(result)
    }
  }
  
  console.log('subcategoryProducts', subcategoryProducts)
  return (
	<div >
    <Header />
    <div className='categoryList'>
       <section className='cateryList_wrapper'>
        <CatalogueSidebar />
    </section>
    <section className='categoryList_content'>
      {
        categories.filter((it) => it._id === params.id).map((el, index) => (
          <div>
            <h2>{el.name}</h2>
            <div className='subtitle'>{subcategoryProducts?.length} товар(а) в категории </div>
            <div>{el.subcategories.map(it => 
            <button 
              className='category_btn'
              onClick={() => onSubcategoryChangeHandler(it)}
              >{it.name}</button>
            )}</div>
          </div> 
        ))
      }

      <div className='subcategories_product'>
        {subcategoryProducts?.map(it => (
          <CarouselItem
            data={it}
            key={it?._id}
          />
            ))
          }
      </div>

    </section>
    </div>
   
  
  </div>
  )
}

export default CategoryList