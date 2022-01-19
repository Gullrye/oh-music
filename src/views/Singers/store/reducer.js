import produce from 'immer'
import * as actionTypes from './constants'

const INITIAL_STATE = {
  category: '',
  area: '',
  alpha: '',
  singerList: [],
  enterLoading: true,
  listOffset: 0,
  pullUpLoading: false,
  pullDownLoading: false,
}

export const singersReducer = produce((draft, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      draft.category = action.data
      break
    case actionTypes.CHANGE_AREA:
      draft.area = action.data
      break
    case actionTypes.CHANGE_ALPHA:
      draft.alpha = action.data
      break
    case actionTypes.CHANGE_SINGER_LIST:
      draft.singerList = action.data
      break
    case actionTypes.CHANGE_ENTER_LOADING:
      draft.enterLoading = action.data
      break
    case actionTypes.CHANGE_LIST_OFFSET:
      draft.listOffset = action.data
      break
    case actionTypes.CHANGE_PULLUP_LOADING:
      draft.pullUpLoading = action.data
      break
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      draft.pullDownLoading = action.data
      break
    default:
      return draft
  }
}, INITIAL_STATE)
