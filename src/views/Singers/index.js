/**
 * 歌手列表组件
 */
import React, { useEffect, useRef } from 'react'
import Horizon from '@/base-ui/horizon'
import Scroll from '@/base-ui/scroll'
import Loading from '@/base-ui/loading'
import LazyLoad, { forceCheck } from 'react-lazyload'
import { NavContainer, ListContainer, SingerList, ListItem } from './style'
import { categoryTypes, areaTypes, alphaTypes } from '@/utils/category-data'
import * as actionTypes from './store/actionCreators'
import { useDispatch, useSelector } from 'react-redux'

function Singers(props) {
  const scrollRef = useRef(null)

  /**
   * 组件连接 Redux
   */
  const {
    category,
    area,
    alpha,
    singerList,
    enterLoading,
    listOffset,
    pullUpLoading,
    pullDownLoading,
  } = useSelector((state) => ({
    category: state.singers.category,
    area: state.singers.area,
    alpha: state.singers.alpha,
    singerList: state.singers.singerList,
    enterLoading: state.singers.enterLoading,
    listOffset: state.singers.listOffset,
    pullUpLoading: state.singers.pullUpLoading,
    pullDownLoading: state.singers.pullDownLoading,
  }))
  const dispatch = useDispatch()
  // 获取热门歌手列表
  const getHotSingerDispatch = () => {
    dispatch(actionTypes.getHotSingerList())
    // dispatch(actionTypes.refreshMoreHotSingerList())
  }
  // 修改各个分类，然后获取对应分类的歌手列表
  const updateCategory = (newVal) => {
    dispatch(actionTypes.changeListOffset(0))
    dispatch(actionTypes.changeCategory(newVal))
    dispatch(actionTypes.getSingerList())
  }
  const updateArea = (newVal) => {
    dispatch(actionTypes.changeListOffset(0))
    dispatch(actionTypes.changeArea(newVal))
    dispatch(actionTypes.getSingerList())
  }
  const updateAlpha = (newVal) => {
    dispatch(actionTypes.changeListOffset(0))
    dispatch(actionTypes.changeAlpha(newVal))
    dispatch(actionTypes.getSingerList())
  }
  // 上拉加载
  const pullUpRefresh = (hot) => {
    dispatch(actionTypes.changePullUpLoading(true))
    // 分类未被选择，则显示热门歌手
    if (hot) {
      dispatch(actionTypes.getMoreHotSingerList())
    } else {
      dispatch(actionTypes.getMoreSingerList())
    }
  }
  // 下拉刷新
  const pullDownRefresh = (category, area, alpha) => {
    dispatch(actionTypes.changePullDownLoading(true))
    dispatch(actionTypes.changeListOffset(0))
    if (category === '' && area === '' && alpha === '') {
      dispatch(actionTypes.getHotSingerList())
    } else {
      dispatch(actionTypes.getSingerList())
    }
  }

  useEffect(() => {
    if (!singerList.length && !category && !area && !alpha) {
      getHotSingerDispatch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * 点击分类栏，获取对应分类的歌手列表
   */
  let handleCategoryClick = (val) => {
    // val 为子组件传递过来的 item.key
    if (category === val) return // 避免相同分类，重复点击触发重复请求
    updateCategory(val)
    scrollRef.current.refresh()
  }
  let handleAreaClick = (val) => {
    if (area === val) return
    updateArea(val)
    scrollRef.current.refresh()
  }
  let handleAlphaClick = (val) => {
    if (alpha === val) return
    updateAlpha(val)
    scrollRef.current.refresh()
  }
  useEffect(() => {
    if (!singerList.length && !category && !alpha) {
      getHotSingerDispatch()
    }
    // eslint-disable-next-line
  }, [])

  /**
   * 上拉加载，下拉刷新
   */
  const handlePullUp = () => {
    pullUpRefresh(category === '' && area === '' && alpha === '')
  }
  const handlePullDown = () => {
    pullDownRefresh(category, area, alpha)
  }

  const renderSingerList = () => {
    return (
      <SingerList>
        {singerList.map((item, index) => {
          return (
            <ListItem key={index}>
              <div className='img-wrapper'>
                <LazyLoad
                  placeholder={
                    <img
                      width='100%'
                      height='100%'
                      src={require('../../assets/img/singers.png')}
                      alt='singer'
                    />
                  }
                >
                  <img
                    src={`${item.picUrl}?param=300x300`}
                    width='100%'
                    height='100%'
                    alt='singer'
                  />
                </LazyLoad>
              </div>
              <span className='name'>{item.name}</span>
            </ListItem>
          )
        })}
      </SingerList>
    )
  }

  return (
    <div>
      <NavContainer>
        <Horizon
          list={categoryTypes}
          title={'分类(默认热门)：'}
          handleClick={handleCategoryClick}
          oldVal={category}
        ></Horizon>
        <Horizon
          list={areaTypes}
          title={'地区：'}
          handleClick={handleAreaClick}
          oldVal={area}
        ></Horizon>
        <Horizon
          list={alphaTypes}
          title={'首字母：'}
          handleClick={handleAlphaClick}
          oldVal={alpha}
        ></Horizon>
      </NavContainer>
      {/* ListContainer 提供窗口固定高度 */}
      <ListContainer>
        <Scroll
          ref={scrollRef}
          onScroll={forceCheck}
          pullUp={handlePullUp}
          pullDown={handlePullDown}
          pullUpLoading={pullUpLoading}
          pullDownLoading={pullDownLoading}
        >
          {renderSingerList()}
        </Scroll>
      </ListContainer>
      {enterLoading ? <Loading></Loading> : null}
    </div>
  )
}

export default React.memo(Singers)
