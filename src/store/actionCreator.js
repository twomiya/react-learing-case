import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,InIt_TODO_DATA,GET_INIT_LIST} from './actionTypes';
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
    type:InIt_TODO_DATA,
    data
})

export const getInitList = (data)=>({
    type:GET_INIT_LIST,
    data
})
// // 获取原始数据(thunk)
// export const getLodoList = ()=>{
//     return(dispatch)=>{
//         axios.get('http://localhost:3003/list').then((res)=>{
//             console.log(res)
//             const data = res.data
//             const action = getInitDataAction(data)
//             dispatch(action)

//         })
//     }
// }