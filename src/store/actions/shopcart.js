import * as types from '../constants/shopcart'
export const getShopList=(shopcart)=>{
    return {
        type:types.SHOPC,
        shopcartList: shopcart
    }
}
export const getReq=()=>{
    return {
        type:'REQ'
    }
}