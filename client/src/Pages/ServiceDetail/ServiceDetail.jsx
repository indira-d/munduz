import React from 'react'
import Header from '../../Components/Header/Header'
import './ServiceDetail.css'
import ImageGallery from 'react-image-gallery';
import Footer from '../../Components/Footer/Footer';
import PopularServices from '../../Components/PopularServices/PopularServices';


const ServiceDetail = () => {

		   const images = [
 
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
	<div >
		<Header/>
		<div className='service_details'>
			<div className='service_slider'>
			<ImageGallery 
						thumbnailPosition='bottom'
						items={images} 
						showFullscreenButton={false}
						showPlayButton={false}
						showNav={false}
						/>
			</div>
			<div style={{margin: '40px 0'}}>
				<h2>Другие услуги</h2>
				
			</div>
			<PopularServices />
			
		</div>
		

		<Footer/>
		
	</div>
  )
}

export default ServiceDetail