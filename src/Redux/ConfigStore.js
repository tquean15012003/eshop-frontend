
import { combineReducers, createStore } from 'redux'
import { ProductReducer } from './Reducers'

const rootReducer = combineReducers({
    ProductReducer
});

export const store = createStore(rootReducer);