import { ADD_TODO } from "./actiontypes";
import { ADD_TODO_SUCCESS } from "./actiontypes";
import { ADD_TODO_LODING,ADD_TODO_ERROR } from "./actiontypes";

export const addtodo=(data)=>({
        type:ADD_TODO,
        payload: data,
})
export const removeTodo=(id)=>({
    type:ADD_TODO,
    payload: id,
})
export const addTodoSucess=()=>({
    type:ADD_TODO_SUCCESS,
    
})
export const addTodoLoding=()=>({
    type:ADD_TODO_LODING,
    
})
export const addTodoError=()=>({
    type:ADD_TODO_ERROR,
    
})
     
