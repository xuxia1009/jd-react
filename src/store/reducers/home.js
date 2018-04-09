import * as types from '../constants/home.js'
const iniltalState={
    name:'home',
    navList:null,
    productslist:null
}
const home=(state=iniltalState,action)=>{
    switch(action.type){
        case types.NAV_LIST:
            return {...state,navList:action.navList}
        case types.PRODUCTS_LIST:
            return {...state,productslist:action.productslist}
        case types.CLEAN_LIST:
            return {...state,productslist:null}
        default:
            return state
    }
}
export default home