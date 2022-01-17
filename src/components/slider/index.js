import React, { useEffect, useState } from 'react'
import { SliderContainer } from './style'
import Swiper from 'swiper'
// import "swiper/css/swiper.css"
import 'swiper/dist/css/swiper.min.css'

function Slider(props) {
  const { bannerList } = props
  const [sliderSwiper, setSliderSwiper] = useState(null)

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      })
      setSliderSwiper(newSliderSwiper)
    }
  }, [bannerList.length, sliderSwiper])

  return (
    <SliderContainer>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          {bannerList.map((slider, index) => {
            return (
              <div className='swiper-slide' key={index}>
                <div className='slider-nav'>
                  <img
                    src={slider.imageUrl}
                    width='100%'
                    height='100%'
                    alt='推荐'
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </SliderContainer>
  )
}

export default React.memo(Slider)
