import * as types from '../constants/home'

export const getNavList=(navList)=>{
    return {
        type:types.NAV_LIST,
        navList
    }
}
export const getProductsList=(productslist)=>{
    return {
        type:types.PRODUCTS_LIST,
        productslist
    }
}
export const cleanList=()=>{
    return {
        type:types.CLEAN_LIST
    }
}