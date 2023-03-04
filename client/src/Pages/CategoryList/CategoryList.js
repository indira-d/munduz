import React, {useState} from 'react'
import Header from '../../Components/Header/Header'
import './CategoryList.css'
import CatalogueSidebar from '../../Components/CatalogueSidebar/CatalogueSidebar';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CarouselItem from '../../Components/CarouselItem/CarouselItem';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';


const CategoryList = () => {
  const categories = useSelector(state => state.categories.categories)
  const params = useParams()
  const products = (useSelector(state => state.products.products))
  const defaultSubcategory = categories.find(it => it._id === params.id).subcategories[0]


  const [isBtnActive, setIsButtonActive] = useState()
  const [subcategoryProducts, setSubcategoryProducts] = useState(products.filter(it => it.subcategory === defaultSubcategory._id))


  console.log('subcategoryProducts', subcategoryProducts)

  const onSubcategoryChangeHandler = (subcategory, e) => {
    const result = products.filter(it => it.subcategory === subcategory._id)
    if(result){
      setSubcategoryProducts(result)
      if(e.target.name === result[0].name){
        setIsButtonActive(true)
      }
    }
  }

  const onMenuCategoryChangeHandler = (value) => {

    console.log('value', value)
      const result = products.filter(it => it.category === value.key)
      setSubcategoryProducts(result)
  }

  const onMenuChangeHandler = (value)=> {
   console.log('value', value)
      const result = products.filter(it => it.subcategory === value.key)
      setSubcategoryProducts(result)
  }

  return (
	<div >
    <Header />
    <div className='categoryList'>
       <section className='cateryList_wrapper'>
        <CatalogueSidebar 
           onMenuChangeHandler={onMenuChangeHandler}
           onMenuCategoryChangeHandler = {onMenuCategoryChangeHandler }
        />
        </section>
    <section className='categoryList_content'>
      {
        categories.filter((it) => it._id === params.id).map((el, index) => (
          <div>
            <h2>{el.name}</h2>
            <div className='subtitle'>{subcategoryProducts?.length} товар(а) в категории </div>
            <div>{el.subcategories.map(it => 
            <button 
              name={it.name}
              className={isBtnActive ? 'active_btn' : 'category_btn'}
              onClick={(e) => onSubcategoryChangeHandler(it, e)}
              >
                {it.name}
              </button>
            )}</div>
          </div> 
        ))
      }
        <div className='subcategories_product'>
          {subcategoryProducts?.map(it => (
            <Link to={`/product/${it._id}`} style={{textDecoration: 'none', color: 'black'}}>
              <CarouselItem
                data={it}
                key={it?._id}
              />
            </Link> 
              ))}
        </div>
      </section>
      </div>
      <Footer />
    </div>
    )
  }

export default CategoryList