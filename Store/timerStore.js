import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import timerReducer from '../Reducers/timerReducer';

const store = createStore(
    combineReducers({
        timer: timerReducer
    }),
    applyMiddleware(
        thunk
    )
);

export default store;