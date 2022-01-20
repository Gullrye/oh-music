import produce from 'immer'
import * as actionTypes from './constants'

const INITIAL_STATE = {
  rankList: [],
  loading: true,
}

export const rankReducer = produce((draft, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_RANK_LIST:
      draft.rankList = action.data
      break
    case actionTypes.CHANGE_LOADING:
      draft.loading = action.data
      break
    default:
      return draft
  }
}, INITIAL_STATE)
