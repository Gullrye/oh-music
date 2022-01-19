import styled from 'styled-components'
import style from '@/assets/css/global-style'

export const ListContainer = styled.div`
  overflow: hidden;
  position: fixed;
  top: 190px;
  bottom: 0;
  left: 0;
  right: 0;
`
export const SingerList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* .title {
    margin: 10px 0 10px 10px;
    color: ${style['font-color-desc']};
    font-size: ${style['font-size-s']};
  } */
`
export const ListItem = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 5px;
  padding: 5px 0;
  border-bottom: 1px solid ${style['border-color']};
  .img-wrapper {
    margin-right: 20px;
    img {
      width: 75px;
      height: 61px;
      border-radius: 3px;
    }
  }
  .name {
    font-size: ${style['font-size-m']};
    font-weight: 500;
    color: ${style['font-color-desc']};
  }
`
