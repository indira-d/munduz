import React from 'react'
import Header from '../../Components/Header/Header';
import './ProductDetail.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './ProductDetail.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../../Components/Footer/Footer'
import {Link} from 'react-router-dom'


const ProductDetail = ({props}) => {

	const params = useParams()
	const products = useSelector(state=> state.products.products)
	const product = products.find(it => it._id === params.id)

	const images = [
      {
        original: `/uploads/${product.img}`,
        thumbnail: `/uploads/${product.img}`,
      },
      {
        original: '/uploads/finiki.svg',
        thumbnail: '/uploads/finiki.svg'
      },
      {
        original: '/uploads/chalap.svg',
        thumbnail: '/uploads/chalap.svg'
      },
	    {
        original: '/uploads/maksym.svg',
        thumbnail: '/uploads/maksym.svg',
      },
      {
        original: '/uploads/finiki.svg',
        thumbnail: '/uploads/finiki.svg'
      },
      {
        original: '/uploads/chalap.svg',
        thumbnail: '/uploads/chalap.svg'
      },
	    {
        original: '/uploads/maksym.svg',
        thumbnail: '/uploads/maksym.svg',
      },
      {
        original: '/uploads/finiki.svg',
        thumbnail: '/uploads/finiki.svg'
      },
      {
        original: '/uploads/chalap.svg',
        thumbnail: '/uploads/chalap.svg'
      }
]

  return (
	<div className='product_detail_container'>
		<Header />
		<div className='productDetail'>
			<div className='slider_block'>
				<section className='slider'>
					<ImageGallery 
						thumbnailPosition='left'
						items={images} 
						showFullscreenButton={false}
						showPlayButton={false}
						showNav={false}
						/>
					</section>
					<section className='product_detail_text'>
						<h2>{product.name}</h2>
						<div className="product_detail_price"> {product.price} P</div>
						<div  className='product_features'>Описание товара</div>
						<div className='product_weight'>
							<div className='product_weight_label'>
								Вес/Объем/Размер
							</div>
							<div className='product_weight_value'>{product.size}</div>
						</div>
						<div className='product_weight'>
							<div className='product_weight_label'>
								Цвет
							</div>
							<div className='product_weight_value'>{product.color}</div>
						</div>
						<div style={{marginTop: '40px'}}>
							<Link to='/cart' className='product_detail_btn' style={{textDecoration: 'none', fontSize:'14px'}}>В корзинy</Link>
						</div>			
					</section>
				</div>
				<div className='product_detail_description'>
					<div className='product_detail_subheader'>Описание</div>
					<div>
						{product.description}
					</div>
				</div>
			</div>
			<Footer />	
	</div>
  )
}

export default ProductDetail
