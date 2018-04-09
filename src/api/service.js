import axios from 'axios'
import {SHOPC} from './interface'

export const getShopCart=()=>{
    return axios.get(SHOPC)
}