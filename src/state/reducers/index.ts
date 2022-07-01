import { combineReducers } from "redux"
import convertedResult from "./converter"
import rateList from "./ratesGetter"
const reducers = combineReducers({
  convertedResult,
  rateList,
})

export default reducers;

export type State = ReturnType<typeof reducers>
