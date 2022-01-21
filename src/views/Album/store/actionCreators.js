import * as actionTypes from './constants'
import { getBannerListRequest, getRecommendListRequest } from '@/api/index'

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data,
})
export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data,
})
export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data,
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerListRequest()
      .then((data) => {
        const action = changeBannerList(data.banners)
        dispatch(action)
      })
      .catch(() => {
        console.log('轮播图数据错误')
      })
  }
}

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest()
      .then((data) => {
        dispatch(changeRecommendList(data.result))
        dispatch(changeEnterLoading(false))
      })
      .catch(() => {
        console.log('推荐歌单数据错误')
      })
  }
}
