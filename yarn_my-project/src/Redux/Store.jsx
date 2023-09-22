import {createStore} from 'redux'
import cakeReducer from './cake/cakeReducer'



const Store = createStore(cakeReducer) 

export default Store
