import { createSelector } from 'reselect'  //优化redux数据
const getNum=(arg)=>{
    let num=0;
    arg!==null && arg.filter(x=>{
        num+=x.quantity
    })
    return num
}
export const getZNum=createSelector(
    [getNum],
    (x)=>x
)
const getPrice=(arg)=>{
    //arg是state
    let price=0;
    arg!==null && arg.filter(x=>{
        price+=x.quantity*x.price/100
    })
    return price.toFixed(2)
}
export const getZPrice=createSelector(
    [getPrice],  //所有方法的集合
    x=>x  //这个函数所接受的参数是第一个方法的返回值   getPrice的返回值
)