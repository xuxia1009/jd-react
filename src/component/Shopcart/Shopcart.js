import React,{Component} from 'react'
import './Shopcart.css'
import {connect} from 'react-redux'
import { getShopCart } from '../../api/service'
import { getShopList } from '../../store/actions/shopcart'
import axios from 'axios';
import { getZNum,getZPrice } from '../../store/reselect/shopCart'
class Shopcart extends Component{
    constructor(props){
        super(props)
        this.state={
            list:null,
            value:1
        }
    }
    componentDidMount(){
        const {dispatch} =this.props
        axios.get('/api/list')
        .then((res)=>{
            dispatch(getShopList(res.data[0].active_item))
        })
    }
    changeNum(id,type){
        
        axios.post('/api/change_num',{
            id,
            type
        })
        .then((res)=>{
            const { dispatch } = this.props
            dispatch(getShopList(res.data[0].active_item))
        })
    }
    render(){
        let{
            listS,
            num,
            price
        }=this.props

        return (
            <div className="Shopcart">
                {
                    listS !== null 
                    && listS.map((item,index)=>{
                        return (
                            <div key={index} className="shop">
                                <dl className="dl">
                                    <dt>
                                        <img src={item.images.cart} alt=""/>
                                    </dt>
                                    <dd>
                                        <h4>{item.name}</h4>
                                        <p>
                                            <button type="button" onClick={()=>this.changeNum(item.id,-1)}>-</button>
                                            <span>  {item.quantity}  </span>
                                            <button type="button" onClick={()=>this.changeNum(item.id,+1)}>+</button>
                                        </p>
                                        <span>{item.price/100}</span>
                                    </dd>
                                </dl>
                            </div>
                        )
                    })
                }
                <div>总数：{num}</div>
                <div>总价：{price}</div>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {
        listS: state.shopcart.shopcartList,
        num:getZNum(state.shopcart.shopcartList),
        price:getZPrice(state.shopcart.shopcartList)
    }
}

export default connect(mapStateToProps,null,null,{pure:false})(Shopcart)