import React,{Component} from 'react'
import './Classify.css'
import { TABLE_LIST } from '../../api/interface'
import axios from 'axios'
import {connect} from 'react-redux'
import * as types from '../../store/constants/classify'
class Classify extends Component{
    constructor(){
        super()
        this.state={
            pagIndex:1
        }
    }
    componentDidMount(){
        const { pagIndex } =this.state
        axios.post(TABLE_LIST,{
            pagIndex: pagIndex,
            num:10
        })
        .then((res)=>{
            const { dispatch } = this.props;
            dispatch({
                type: types.GET_TABLE_JSON,
                tableJson: res.data
            })
        })
    }
    dispatchFn(pagIndex){
        axios.post(TABLE_LIST, {
            pagIndex: pagIndex,
            num: 10
        })
        .then((res) => {
            const { dispatch } = this.props;
            dispatch({
                type: types.GET_TABLE_JSON,
                tableJson: res.data
            })
        })
        
    }
    up(){
        this.setState({
            pagIndex: this.state.pagIndex - 1
        },()=>{
            const { pagIndex } =this.state
            this.dispatchFn(pagIndex)
        })
        
    }
    down(){
        this.setState({
            pagIndex: this.state.pagIndex + 1
        }, () => {
            const { pagIndex } = this.state
            this.dispatchFn(pagIndex)
        })
    }
    render(){
        const { tableJson } =this.props
        console.log(tableJson)
        return (
            <div className="Classify">
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>money</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableJson !== null && tableJson.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.money}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button type="button" onClick={()=>{this.up()}}>上一页</button>
                <button type="button" onClick={()=>{this.down()}}>下一页</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        tableJson:state.classify.tableJson
    }
}
export default connect(mapStateToProps)(Classify)