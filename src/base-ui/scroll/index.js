import React, {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  useMemo,
} from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import LoadingDown from '@/base-ui/loading-down'
import styled from 'styled-components'
import { debounce } from '@/utils/util'

const ScrollContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`
const PullDownLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  height: 30px;
  z-index: 100;
`
const PullUpLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  height: 30px;
  z-index: 100;
`

const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState()
  const scrollContainerRef = useRef()
  const {
    direction,
    click,
    refresh,
    pullUpLoading,
    pullDownLoading,
    bounceTop,
    bounceBottom,
  } = props
  const { pullUp, pullDown, onScroll } = props

  let pullUpDebounce = useMemo(() => {
    return debounce(pullUp, 500)
  }, [pullUp])
  let pullDownDebounce = useMemo(() => {
    return debounce(pullDown, 500)
  }, [pullDown])

  // 1. 创建 better-scroll
  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === 'horizontal',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
    })
    setBScroll(scroll)
    // useEffect 函数需返回一个清除函数。为防止内存泄漏，清除函数会在组件卸载前执行
    return () => {
      setBScroll(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 2. 给实例绑定 scroll 事件
  useEffect(() => {
    if (!bScroll || !onScroll) return
    // better-scroll 官方 api，监听当前实例上的钩子函数
    bScroll.on('scroll', onScroll)
    return () => {
      // 移除自定义事件监听器
      bScroll.off('scroll', onScroll)
    }
  }, [onScroll, bScroll])

  // 3. 进行上拉到底的判断，调用上拉刷新的函数
  useEffect(() => {
    if (!bScroll || !pullUp) return
    const handlePullUp = () => {
      // 距离底部 100 距离内
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUpDebounce()
      }
    }
    bScroll.on('scrollEnd', handlePullUp)
    return () => {
      bScroll.off('scrollEnd', handlePullUp)
    }
  }, [pullUp, pullUpDebounce, bScroll])

  // 4. 进行下拉的判断，调用下拉刷新的函数
  useEffect(() => {
    if (!bScroll || !pullDown) return
    const handlePullDown = (pos) => {
      //判断用户的下拉动作
      if (pos.y > 50) {
        pullDownDebounce()
      }
    }
    bScroll.on('touchEnd', handlePullDown)
    return () => {
      bScroll.off('touchEnd', handlePullDown)
    }
  }, [pullDown, pullDownDebounce, bScroll])

  // 5. 每次重新渲染都要刷新实例，防止无法滑动
  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh()
    }
  })

  // 6. useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。useImperativeHandle 应当与 forwardRef 一起使用
  useImperativeHandle(ref, () => ({
    // 给外界暴露 refresh 方法
    refresh() {
      if (bScroll) {
        bScroll.refresh()
        bScroll.scrollTo(0, 0)
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll
      }
    },
  }))

  // 7.
  const PullUpdisplayStyle = pullUpLoading
    ? { display: '' }
    : { display: 'none' }
  const PullDowndisplayStyle = pullDownLoading
    ? { display: '' }
    : { display: 'none' }

  return (
    <ScrollContainer ref={scrollContainerRef} className='scroll-wrapper'>
      {props.children}
      {/* 上拉加载动画 */}
      <PullUpLoading style={PullUpdisplayStyle}>
        <LoadingDown></LoadingDown>
      </PullUpLoading>
      {/* 下拉刷新动画 */}
      <PullDownLoading style={PullDowndisplayStyle}>
        <LoadingDown></LoadingDown>
      </PullDownLoading>
    </ScrollContainer>
  )
})

// 组件需要接收哪些参数
Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  click: PropTypes.bool,
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  pullUp: PropTypes.func,
  pullDown: PropTypes.func,
  pullUpLoading: PropTypes.bool,
  pullDownLoading: PropTypes.bool,
  bounceTop: PropTypes.bool, // 是否支持向上吸顶
  bounceBottom: PropTypes.bool, // 是否支持向下吸顶
}

// 参数默认值
Scroll.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll: null,
  pullUp: null,
  pullDown: null,
  pullUpLoading: false,
  pullDownLoading: false,
  bounceTop: true,
  bounceBottom: true,
}

export default Scroll
