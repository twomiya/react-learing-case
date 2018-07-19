import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,Init_TODO_DATA} from './actionTypes';
import axios from 'axios'
export const getInputChangeAciton = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAciton = ()=>({
    type:ADD_TODO_ITEM
})

export const getDeleteItemAciton = (index)=>({
    type:DELETE_TODO_ITEM,
    index
})

export const getInitDataAction =(data)=>({
    type:Init_TODO_DATA,
    data
})

// 获取原始数据
export const getLodoList = ()=>{
    return(dispatch)=>{
        axios.get('http://localhost:3003/list').then((res)=>{
            console.log(res)
            const data = res.data
            const action = getInitDataAction(data)
            dispatch(action)

        })
    }
}