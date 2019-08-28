import { createStore, combineReducers } from "redux";
import news from "./reducers/news";
import typeSwiper from "./reducers/typeSwiper";
// import recommend from "./reducers/recommend";
const rootReducer = combineReducers({
  news,
  typeSwiper
});
export default createStore(rootReducer);
