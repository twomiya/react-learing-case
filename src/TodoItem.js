import React,{Component} from 'react';
import PropTypes from 'prop-types'
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick(){
        const {deleteItem,index}= this.props
        deleteItem(index)
        // this.props.deleteItem(this.props.index)
    }
    render(){
        const {content,test} = this.props
        return(
                <li>
                    <div onClick={this.handleClick}>
                       {test} --- {content}
                    </div>
                </li>
        )
    }
}

TodoItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number,
    test:PropTypes.string.isRequired
}

TodoItem.defaultProps={
    test:'hello'
}
export default TodoItem