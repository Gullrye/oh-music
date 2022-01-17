import styled from 'styled-components'
import style from '@/assets/global-style'

export const ListWrapper = styled.div`
  .title {
    width: 100%;
    line-height: 60px;
    padding-left: 6px;
    font-weight: 700;
    font-size: 16px;
  }
`
export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const ListItem = styled.div`
  position: relative;
  width: 32%;

  .img-wrapper {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    img {
      z-index: 1;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
    &::after {
      z-index: 2;
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      /* 给图片上的图标和文字提供一个遮罩。字体颜色是白色，在面对白色图片背景时，文字会看不清，因此提供一个阴影来衬托出文字 */
      background: linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));
    }
    .play-count {
      z-index: 3;
      position: absolute;
      right: 2px;
      top: 2px;
      line-height: 15px;
      font-size: ${style['font-size-s']};
      color: ${style['font-color-light']};
      text-shadow: 1px 0 0 rgba(0,0,0,0.2);
      .play {
        font-size: 20px;
        vertical-align: top;
      }
    }
  }
  .desc {
    overflow: hidden;
    height: 50px;
    margin-top: 2px;
    padding: 0 2px;
    line-height: 1.4;
    font-size: ${style['font-size-s']};
    text-align: left;
    color: ${style['font-color-desc']};
  }
`
