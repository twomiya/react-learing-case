import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,Init_TODO_DATA} from './actionTypes' 
const defaultState={
    inputValue:'',
    list:[]

}
//reducer
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type===ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        console.log(newState)
        return newState

    }
    if(action.type===DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState

    }

    if(action.type===Init_TODO_DATA){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState

    }
    return state

}