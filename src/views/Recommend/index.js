/**
 * 推荐组件
 */
import React, { useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import Slider from '@/components/slider'
import RecommendList from '@/components/list'
import Scroll from '@/base-ui/scroll'
import Loading from '@/base-ui/loading'
import { Content } from './style'
import * as actionTypes from './store/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import { forceCheck } from 'react-lazyload'

function Recommend(props) {
  const { bannerList, recommendList, enterLoading } = useSelector((state) => ({
    bannerList: state.recommend.bannerList,
    recommendList: state.recommend.recommendList,
    enterLoading: state.recommend.enterLoading,
  }))
  const dispatch = useDispatch()
  const getBannerListDataDispatch = () => {
    dispatch(actionTypes.getBannerList())
  }
  const getRecommendListDataDispatch = () => {
    dispatch(actionTypes.getRecommendList())
  }

  useEffect(() => {
    if (!bannerList.length) {
      getBannerListDataDispatch()
    }
    if (!recommendList.length) {
      getRecommendListDataDispatch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Content>
      <Scroll className='list' onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
      {enterLoading ? <Loading></Loading> : null}
      {/* 将目前所在路由的下一层子路由加以渲染 */}
      {renderRoutes(props.route.routes)}
    </Content>
  )
}

export default React.memo(Recommend)
