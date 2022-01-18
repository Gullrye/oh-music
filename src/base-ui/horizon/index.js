/**
 * 水平滚动列表
 */
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Scroll from '@/base-ui/scroll/index'
import { PropTypes } from 'prop-types'
import style from '@/assets/css/global-style'

//样式部分
const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: center;
  overflow: hidden;
  > span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    color: grey;
    font-size: ${style['font-size-m']};
  }
`
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style['font-size-m']};
  padding: 5px 5px;
  border-radius: 10px;
  &.selected {
    color: ${style['theme-color']};
    border: 1px solid ${style['theme-color']};
    opacity: 0.8;
  }
`

function Horizon(props) {
  // const [refreshCategoryScroll, setRefreshCategoryScroll] = useState(false)
  // const Category = useRef(null)
  const { list, oldVal, title } = props
  const { handleClick } = props

  // useEffect(() => {
  //   let categoryDOM = Category.current
  //   let tagElems = categoryDOM.querySelectorAll('span')
  //   let totalWidth = 0
  //   Array.from(tagElems).forEach((ele) => {
  //     totalWidth += ele.offsetWidth
  //   })
  //   totalWidth += 2
  //   categoryDOM.style.width = `${totalWidth}px`
  //   setRefreshCategoryScroll(true)
  // }, [refreshCategoryScroll])

  const clickHandle = (item) => {
    handleClick(item.key)
  }
  return (
    <Scroll direction={'horizontal'} refresh={true}>
      <div style={{width: 'max-content'}} className='scroll-content'>
        <List>
          <span>{title}</span>
          {list.map((item) => {
            return (
              <ListItem
                key={item.key}
                className={oldVal === item.key ? 'selected' : ''}
                onClick={() => clickHandle(item)}
              >
                {item.name}
              </ListItem>
            )
          })}
        </List>
      </div>
    </Scroll>
  )
}

// 组件接收的参数
Horizon.propTypes = {
  list: PropTypes.array, // 列表数据
  oldVal: PropTypes.string, // 当前 item 的值
  title: PropTypes.string, // 列表左边的标题
  handleClick: PropTypes.func,
}
// 默认值
Horizon.defaultProps = {
  list: [],
  oldVal: '',
  title: '',
  handleClick: null,
}

export default React.memo(Horizon)
