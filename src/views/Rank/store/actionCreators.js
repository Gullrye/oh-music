import * as actionTypes from './constants'
import { getRankListRequest } from '@/api/index'

export const changeRankList = (data) => ({
  type: actionTypes.CHANGE_RANK_LIST,
  data,
})
export const changeLoading = (data) => ({
  type: actionTypes.CHANGE_LOADING,
  data,
})
// 所有榜单内容摘要
export const getRankList = () => {
  return (dispatch) => {
    getRankListRequest()
      .then((data) => {
        dispatch(changeRankList(data.list))
        dispatch(changeLoading(false))
      })
      .catch(() => {
        console.log('榜单数据错误')
      })
  }
}
