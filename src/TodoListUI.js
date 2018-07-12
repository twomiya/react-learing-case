import React,{Component,Fragment} from 'react'
import { Input,Button,List } from 'antd';

class TodoListUI extends Component{
    render(){
        return(
            <Fragment >
                <div style={{marginTop:"20px",marginLeft:"20px"}}>
                    {/* input框 */}
                    <Input 
                        placeholder="todo info" 
                        style={{width:"300px",marginRight:"10px"}} 
                        value={this.props.inputValue}  
                        onChange={this.props.handleInputChange}/>
                
                    <Button onClick={this.props.handleBtnClick} type="primary">确定</Button>
                </div>
                <List
                    style={{width:"500px",marginTop:"20px",marginLeft:"20px"}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (<List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                    />
            </Fragment>
        )
    }

}

export default TodoListUI