import React from 'react'
import { Slider } from 'infinite-react-carousel'
import Carousel from "infinite-react-carousel"

const CustomCarousel = ({ data, slidesToShow, renderItem, arrowsScroll }) => {

  const settings = {
    slidesToShow: slidesToShow,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // wheel: true,
    arrowsScroll: arrowsScroll,
    className: "custom-carousel",
  }
  
  return (
    <div className='carousel-wrapper'>
      <Carousel {...settings}>
        {data.map((item) => (
          <div key={item.id} className="carousel-item">
            {renderItem(item)}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CustomCarousel
