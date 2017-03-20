import {combineReducers} from 'redux'
import boltaart from './boltaart'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    boltaart,
    routing: routerReducer
});

export default rootReducer
