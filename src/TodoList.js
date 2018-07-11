import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
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
            console.log(this.ul.querySelectorAll('div').length)
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
    render(){
        return(
            <Fragment>
                <div>
                    {/* input框 */}
                    <input  className="input" value={this.state.inputValue}  onChange={this.handleInputChange} />
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