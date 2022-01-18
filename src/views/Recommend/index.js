/**
 * 推荐组件
 */
import React, { useEffect } from 'react'
import Slider from '@/components/slider'
import RecommendList from '@/components/list'
import Scroll from '@/base-ui/scroll'
import { Content } from './style'
import * as actionTypes from './store/actionCreators'
import { useDispatch, useSelector } from 'react-redux'

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
      <Scroll className='list'>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
      {enterLoading ? 'loading' : null}
    </Content>
  )
}

export default React.memo(Recommend)
