import { ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAID} from "./actionTypes"

const init={
    isAuth:false,
    token:""
}

export const adminauthReducer=(state=init,{type,payload})=>{
    switch(type){
        case ADMIN_LOGIN_SUCCESS:{
            return{...state,isAuth:true,token:payload}
        }
        case ADMIN_LOGIN_FAID:{
            return{...state,isAuth:false,token:""}
        }
        default:{
            return{
                ...state
            }
        }
        
    }
}