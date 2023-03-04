import React from 'react'
import './Catalogue.css'
import Header from '../../Components/Header/Header';
import CatalogueSidebar from '../../Components/CatalogueSidebar/CatalogueSidebar';
import CategoryItem from '../../Components/Categories/CategoryItem';
import Footer from '../../Components/Footer/Footer';


const Catalogue = () => {
  return (
	<div className='categories_catalogue'>
		<Header />
		<section className='cat_catalogue_content'>
			<section className='catalogue_sidebar'>
				<CatalogueSidebar />
			</section>
			<section className='catalogue_info'>
				<div className='banner'>
					<div className='banner_text_block'>
						<h2>Вкус молока, прям как в детстве</h2>
						<div className='banner_description'>Вкусные национальные напитки подходят каждому блюду</div>
						<button className='bunner_button'>Перейти!</button>
					</div>
					<div className='banner_img_block'>
						<img src={'/uploads/kefir.svg'} className='banner_img'/>
					</div>
					<div className="cyrcle1"></div>
					<div className="cyrcle2"></div>
				</div>
				<div className='categories_block'>
					<CategoryItem 
						style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(3, 1fr)',
								width: '100%',
								height: '100%',
								
						}}	
					/>
				</div>
			</section>
		</section>
		<Footer />
	</div>


  )
}

export default Catalogue