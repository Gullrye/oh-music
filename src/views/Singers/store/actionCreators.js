import * as actionTypes from './constants'
import { getHotSingerListRequest, getSingerListRequest } from '@/api/index'

export const changeCategory = (data) => ({
  type: actionTypes.CHANGE_CATEGORY,
  data,
})
export const changeArea = (data) => ({
  type: actionTypes.CHANGE_AREA,
  data,
})
export const changeAlpha = (data) => ({
  type: actionTypes.CHANGE_ALPHA,
  data,
})
export const changeSingerList = (data) => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  data,
})
export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data,
})
export const changeListOffset = (data) => ({
  type: actionTypes.CHANGE_LIST_OFFSET,
  data,
})
export const changePullUpLoading = (data) => ({
  type: actionTypes.CHANGE_PULLUP_LOADING,
  data,
})
export const changePullDownLoading = (data) => ({
  type: actionTypes.CHANGE_PULLDOWN_LOADING,
  data,
})
// 获取热门歌手数据
export const getHotSingerList = () => {
  return (dispatch) => {
    getHotSingerListRequest(0)
      .then((data) => {
        dispatch(changeSingerList(data.artists))
        dispatch(changeEnterLoading(false))
        dispatch(changePullDownLoading(false))
        dispatch(changeListOffset(data.artists.length))
      })
      .catch(() => {
        console.log('热门歌手数据错误')
      })
  }
}

export const refreshMoreHotSingerList = () => {
  return (dispatch, getState) => {
    const offset = getState().singers.listOffset
    const singerList = getState().singers.singerList
    getHotSingerListRequest(offset)
      .then((data) => {
        const res = [...singerList, ...data.artists]
        dispatch(changeSingerList(res))
        dispatch(changePullUpLoading(false))
        dispatch(changeListOffset(res.length))
      })
      .catch(() => {
        console.log('热门歌手数据错误')
      })
  }
}
// 获取分类歌手数据
export const getSingerList = () => {
  return (dispatch, getState) => {
    const category = getState().singers.category
    const area = getState().singers.area
    const alpha = getState().singers.alpha
    const offset = getState().singers.listOffset
    getSingerListRequest(category, area, alpha, offset)
      .then((data) => {
        dispatch(changeSingerList(data.artists))
        dispatch(changeEnterLoading(false))
        dispatch(changePullDownLoading(false))
        dispatch(changeListOffset(data.artists.length))
      })
      .catch(() => {
        console.log('歌手分类数据获取失败')
      })
  }
}
