import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
// import axios from 'axios';
// import { Input,Button,List } from 'antd';
import './style.css'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:"",
            list:[]
        }
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onItemDelete = this.onItemDelete.bind(this)

    }
    handleInputChange(e){
        const value = e.target.value
        this.setState(()=>({
            inputValue:value
        }))
        // this.setState({
        //     inputValue:e.target.value
        // })

    }
    handleBtnClick(){
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }),()=>{
            // console.log(this.ul.querySelectorAll('div').length)
        })
        // this.setState({
        //     list:[...this.state.list,this.state.inputValue],
        //     inputValue:''
        // })

    }
    onItemDelete(index){

        this.setState((prevState)=>{
            const list = [...prevState.list]
            list.splice(index,1)
            return{
                list
            }
        })
        // const list = [...this.state.list]
        // list.splice(index,1)
        // this.setState({
        //     list:list
        // })

    }
    getTodoItem(){
        return this.state.list.map((item,index)=>{
            return(
             //    <div>
             //        <li >
                     <TodoItem 
                         key={item}
                         content={item}
                         index={index}
                         deleteItem={this.onItemDelete}/>
                 //    </li>
                 
             //    </div>
            )
        })
    }
    // componentWillMount(){
    //     console.log('componentWillMount')
    // }
    // componentDidMount(){
    //     console.log('componentDidMount')
    // }
    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate')
    //     return true
    // }
    // componentWillUpdate(){
    //     console.log('componentWillUpdate')
    // }
    // componentDidUpdate(){
    //    console.log('componentDidUpdate') 
    // }
    render(){
        console.log('render')
        return(
            <Fragment >
                <div style={{marginTop:"20px",marginLeft:"20px"}}>
                    {/* input框 */}
                    <input 
                    placeholder="todo info"
                    style={{width:"300px",marginRight:"10px"}}
                    value={this.state.inputValue}  
                    onChange={this.handleInputChange}/>
                    <button onClick={this.handleBtnClick}>确定</button>
                </div>
                <ul ref={(ul)=>this.ul=ul}>
                   {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
}
export default TodoList;