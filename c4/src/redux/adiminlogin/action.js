import { ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAID} from "./actionTypes"

export const adminloginsuccess=(token)=>{
    return {
        type:ADMIN_LOGIN_SUCCESS,
        payload:token
    }
}
export const adminloginfaild=(err)=>{
    return{
        type:ADMIN_LOGIN_FAID,
        payload:err
    }
}