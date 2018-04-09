import * as types from '../constants/shopcart'
const initalState={
    name:"shopcart",
    shopcartList:null
}
const shopcart=(state=initalState,action)=>{
    switch(action.type){
        case types.SHOPC:
            return { ...state, shopcartList: action.shopcartList};
        case 'REQ':
            return state
        default:
            return state
    }
}
export default shopcart