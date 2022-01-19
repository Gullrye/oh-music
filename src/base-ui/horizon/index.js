/**
 * 水平滚动列表
 */
import React from 'react'
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
    padding: 5px 0;
    color: grey;
    font-size: ${style['font-size-m']};
  }
`
const ListItem = styled.span`
  padding: 5px 5px;
  border-radius: 10px;
  font-size: ${style['font-size-m']};
  white-space: nowrap;
  box-sizing: border-box;
  &.selected {
    color: #fff;
    background: ${style['theme-color']};
    opacity: 0.9;
  }
`

function Horizon(props) {
  const { list, oldVal, title } = props
  const { handleClick } = props

  const clickHandle = (item) => {
    handleClick(item.key)
  }
  return (
    <Scroll direction={'horizontal'} refresh={true}>
      <div style={{ width: 'max-content' }} className='scroll-content'>
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
  oldVal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 当前 item 的值
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
