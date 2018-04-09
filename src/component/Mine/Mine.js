import React,{Component} from 'react'
import './Mine.css'
class Mine extends Component{
    constructor(){
        super()
        this.state={
            checkValue:'',
            checkedArr:[]
        }
        this.checkedBox = this.checkedBox.bind(this)
    }
    checkedBox(e){
        let { checkedArr }=this.state;
        const {checked,value} = e.target;
        if (checked && checkedArr.indexOf(value)!==-1){
            checkedArr.push(value);
        }else{
            checkedArr = checkedArr.filter(x=>value!==x)
        }
        this.setState={
            checkedArr
        }
    }
    render(){
        const { checkedArr }=this.state;
        return (
            <div className="Mine">
                鱼香肉丝  :<input type="checkbox" onClick={this.checkedBox} value={checkedArr.indexOf('鱼香肉丝')!==-1}/><br/>
                宫保鸡丁  :<input type="checkbox" onClick={this.checkedBox} value={checkedArr.indexOf('宫保鸡丁')!==-1}/><br/>
                红烧茄子  :<input type="checkbox" onClick={this.checkedBox} value={checkedArr.indexOf('红烧茄子')!==-1}/><br/>
                剁椒鱼头  :<input type="checkbox" onClick={this.checkedBox} value={checkedArr.indexOf('剁椒鱼头')!==-1}/><br/>
                铁板豆腐  :<input type="checkbox" onClick={this.checkedBox} value={checkedArr.indexOf('铁板豆腐')!==-1}/><br/>
            </div>
        )
    }
}
export default Mine