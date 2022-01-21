import produce from 'immer'
import * as actionTypes from './constants'

const INITIAL_STATE = {
  bannerList: [],
  recommendList: [],
  enterLoading: true,
}

export const recommendReducer = produce((draft, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      draft.bannerList = action.data
      break
    case actionTypes.CHANGE_RECOMMEND_LIST:
      draft.recommendList = action.data
      break
    case actionTypes.CHANGE_ENTER_LOADING:
      draft.enterLoading = action.data
      break
    default:
    return draft
  }
}, INITIAL_STATE)
