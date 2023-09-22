import {createStore,applyMiddleware} from 'redux'
import cakeReducer from './cake/cakeReducer'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


const store  = createStore(cakeReducer,applyMiddleware(logger))

export default store