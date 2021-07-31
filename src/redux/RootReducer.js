import {combineReducers, createStore} from "redux";

import ExOttReducer from "./reducers/ExOttReducer";

const rootReducer = combineReducers({
    ExOttReducer,
})

// export default rootReducer

export const store = createStore(rootReducer)