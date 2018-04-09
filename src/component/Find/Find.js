import React,{Component} from 'react'
import './Find.css'
import { Table } from 'antd';

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    render(text) {
        return <a href="#">{text}</a>;
    },
}, {
    title: '年龄',
    dataIndex: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `李大嘴${i}`,
        age: 32,
        address: `西湖区湖底公园${i}号`,
    });
}

const pagination = {
    total: data.length,
    showSizeChanger: true,
    onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
    },
    onChange(current) {
        console.log('Current: ', current);
    },
};

class Find extends Component{
    render(){
        return (
            <div className="Find">
                <Table columns={columns} dataSource={data} pagination={pagination} />
            </div>
        )
    }
}
export default Find