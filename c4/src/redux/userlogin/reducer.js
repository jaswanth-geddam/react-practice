import { USER_LOGIN_SUCCESS,USER_LOGIN_FAID} from "./actionTypes"

const init={
    isAuth:false,
    token:""
}

export const authReducer=(state=init,{type,payload})=>{
    switch(type){
        case USER_LOGIN_SUCCESS:{
            return{...state,isAuth:true,token:payload}
        }
        case USER_LOGIN_FAID:{
            return{...state,isAuth:false,token:""}
        }
        default:{
            return{
                ...state
            }
        }
        
    }
}