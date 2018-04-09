import React,{Component} from 'react'
import './Home.css'
import {connect} from 'react-redux'
import axios from 'axios'
import {HOME_LIST} from '../../api/interface.js'
import {getNavList,getProductsList,cleanList} from '../../store/actions/home'
import Nav from './Nav'
import Cont from './Cont'

class Home extends Component{
    componentDidMount(){
        axios.get(HOME_LIST)
        .then((res)=>{
            const navList=res.data.category_list;
            const productslist=res.data.product_list;
            const {dispatch}=this.props;
            dispatch(getNavList(navList))
            dispatch(getProductsList(productslist))
        })
    }
    changeList(id){
        axios.get(`/api/${id}`)
        .then((res)=>{
            const {dispatch}=this.props;
            dispatch(cleanList())
            dispatch(getProductsList(res.data))
        })
    }
    render(){
        const {navList,productslist}=this.props
        return (
            <div className="Home">
                <Nav navList={navList}  changeList={this.changeList.bind(this)}></Nav>
                <Cont productslist={productslist}></Cont>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state.home.productslist,'666666666')
    return {
        navList:state.home.navList,
        productslist:state.home.productslist
    }
}
export default connect(mapStateToProps)(Home)