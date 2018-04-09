import React,{Component} from 'react'
import './cont.css'

class Cont extends Component{
    render(){
        const { productslist }=this.props;
        return (
            <div className="cont_list">
                {
                    productslist !==null 
                    && productslist.products.map((item,index)=>{
                        return (
                            <div key={index} className="list_img">
                                {
                                    item.image 
                                    ?
                                    <dl>
                                        <dt>
                                            <img src={item.image}/>
                                        </dt>
                                        <dd>
                                            <h4>{item.name}</h4>
                                            <p>{item.subtitle}</p>
                                        </dd>
                                    </dl>
                                    :<h4>{item.name}</h4>
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Cont