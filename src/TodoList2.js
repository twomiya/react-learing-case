import React,{Component,Fragment} from 'react';
// import axios from 'axios';
import { Input,Button,List } from 'antd';
import store from './store'
import './style.css'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state=store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        store.subscribe(this.handleStoreChange)

    }
    handleInputChange(e){
        const value = e.target.value
        const action = {
            type:'change_input_value',
            value
        }
        store.dispatch(action)

    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    handleBtnClick(){
        const action={
            type:'add_todo_item'
        }
        store.dispatch(action)
    }
    handleItemDelete(index){
        const action = {
            type:"delete_todo_item",
            index
        }
        store.dispatch(action)

    }
    render(){
        console.log('render')
        return(
            <Fragment >
                <div style={{marginTop:"20px",marginLeft:"20px"}}>
                    {/* input框 */}
                    <Input 
                        placeholder="todo info" 
                        style={{width:"300px",marginRight:"10px"}} 
                        value={this.state.inputValue}  
                        onChange={this.handleInputChange}/>
                
                    <Button onClick={this.handleBtnClick} type="primary">确定</Button>
                </div>
                <List
                    style={{width:"500px",marginTop:"20px",marginLeft:"20px"}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
                    />
            </Fragment>
        )
    }
}
export default TodoList;