import React,{Component} from 'react';
// import axios from 'axios';
import store from './store'
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes' 
import {getInputChangeAciton,getAddItemAciton,getDeleteItemAciton,getInitList} from './store/actionCreator' 
import TodoListUI from './TodoListUI'
import './style.css'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state=store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)

    }
    handleInputChange(e){
        const value = e.target.value
        const action = getInputChangeAciton(value)
        store.dispatch(action)

    }
    handleStoreChange(){
        this.setState(store.getState())

    }
    handleBtnClick(){
        const action=getAddItemAciton()
        store.dispatch(action)
    }
    handleItemDelete(index){
        const action =getDeleteItemAciton(index)
        store.dispatch(action)

    }
    componentDidMount(){
        const action = getInitList()
        store.dispatch(action)

        // axios.get('http://localhost:3003/list').then((res)=>{
        //     console.log(res)
        //     const data = res.data
        //     const action = getInitDataAction(data)
        //     store.dispatch(action)

        // })
    }
    render(){
        return(
            <TodoListUI 
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            list={this.state.list}
            handleItemDelete={this.handleItemDelete}/>
            // <Fragment >
            //     <div style={{marginTop:"20px",marginLeft:"20px"}}>
            //         {/* input框 */}
            //         <Input 
            //             placeholder="todo info" 
            //             style={{width:"300px",marginRight:"10px"}} 
            //             value={this.state.inputValue}  
            //             onChange={this.handleInputChange}/>
                
            //         <Button onClick={this.handleBtnClick} type="primary">确定</Button>
            //     </div>
            //     <List
            //         style={{width:"500px",marginTop:"20px",marginLeft:"20px"}}
            //         bordered
            //         dataSource={this.state.list}
            //         renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
            //         />
            // </Fragment>
        )
    }
}
export default TodoList;