import { USER_LOGIN_SUCCESS,USER_LOGIN_FAID} from "./actionTypes"

export const userloginsuccess=(token)=>{
    return {
        type:USER_LOGIN_SUCCESS,
        payload:token
    }
}
export const userloginfaild=(err)=>{
    return{
        type:USER_LOGIN_FAID,
        payload:err
    }
}