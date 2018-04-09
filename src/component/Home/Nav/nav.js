import React,{Component} from 'react'
import './nav.css'

class Nav extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    changeList(id){
        const { changeList }=this.props;
        changeList(id)
    }
    render(){
        const { navList }=this.props;
        return (
            <div className="Nav">
                <ul className="navList">
                    {
                        navList !==null 
                        && navList.map((item,index)=>{
                            return <li key={index} id={item.internal_id} onClick={this.changeList.bind(this,item.internal_id)}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Nav