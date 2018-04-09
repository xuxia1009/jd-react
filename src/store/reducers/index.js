import home from './home.js'
import shopcart from './shopcart.js'
import classify from './classify.js'
import find from './home.js'
import mine from './home.js'
import {combineReducers} from 'redux'
const reducer=combineReducers({
    home,
    shopcart,
    classify,
    find,
    mine
})
export default reducer