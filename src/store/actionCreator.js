import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes';
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