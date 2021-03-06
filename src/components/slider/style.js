import styled from 'styled-components'
import style from '@/assets/css/global-style'

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background: ${style['background-color']};
  &::before {
    content: '';
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background: ${style['theme-color']};
  }
  .swiper-container {
    position: relative;
    overflow: hidden;
    width: 98%;
    height: 160px;
    margin: auto;
    border-radius: 5px;
    .slider-nav {
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background: ${style['theme-color']};
    }
  }
`
