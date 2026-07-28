import {ADD_TODO, ADD_TODO_ERROR, ADD_TODO_LODING, ADD_TODO_SUCCESS} from "./actiontypes"
import { REMOVE_TODO } from "./actiontypes";
const init={loading:false,todos:[],error:false };

export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case ADD_TODO:
            return{
                ...state,
                todos:[...state.todos,payload],
            };
            case ADD_TODO_LODING:
                return {
                    ...state,
                    loading:true
                };
                case ADD_TODO_SUCCESS:
                return {
                    ...state,
                    todos:[...state.todos,payload],
                };
                case ADD_TODO_ERROR :
                    return {
                        ...state,
                
                    }
                default:
                    return state;
         };
        
}
// const init={count:0};

// export const reducer=(state=init,{type,payload})=>{
//     switch(type){
//         case Add_TODO:
//             return{...state,counter:[...state.todos.payload],};
//             default:
//                 return state;
//     }
// }



