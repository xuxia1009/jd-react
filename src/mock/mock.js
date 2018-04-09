import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import list from './data/shopcart.json'
import homeList from './data/list.json'
import foodList from './data/food.json'
import fruitList from './data/fruit.json'
import milkList from './data/milk.json'
import scList from './data/sc.json'
import {SHOPC,HOME_LIST,FOOD_LIST,FRUIT_LIST,MILK_LIST,SC_LIST} from '../api/interface.js'
import { tableJson } from './data/table'

const mock=new AxiosMockAdapter(axios);
const getData=()=>{
    mock.onGet(SHOPC).reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,list])
        })
    })
    mock.onGet('/api/hb-newsy').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,homeList])
        })
    })
    mock.onGet('/api/hd-food').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,foodList])
        })
    })
    mock.onGet('/api/hd-fruit').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,fruitList])
        })
    })
    mock.onGet('/api/hb-milk').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,milkList])
        })
    })
    mock.onGet('/api/hb-sc').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,scList])
        })
    })
    mock.onPost('/api/change_num').reply((config)=>{
        const id=JSON.parse(config.data).id;
        const type=JSON.parse(config.data).type;
        const newArr = [...list[0].active_item];
        for(let [index,item] of newArr.entries()){
            if(item.id===id){
                newArr[index].quantity = newArr[index].quantity + type
            }
        }
        list[0].active_item=newArr;
        return new Promise((resolve,reject)=>{
            resolve([200, list])
        })
    })
    mock.onPost('/api/tablejson').reply((config) => {
        const data = JSON.parse(config.data);
        let pagIndex=data.pagIndex;
        let num=data.num;
        let newArr=[];
        newArr = tableJson.slice((pagIndex - 1) * num, pagIndex * num)
        return new Promise((resolve, reject) => {
            resolve([200, newArr])
        })
    })
}
export default getData