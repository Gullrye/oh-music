import { combineReducers } from "redux";
import { reducer as recommendReducer } from "@/views/Recommend/store/index"

// 将 recommend 下的 reducer 注册到全局 store
export default combineReducers({
  recommend: recommendReducer.recommendReducer
})
