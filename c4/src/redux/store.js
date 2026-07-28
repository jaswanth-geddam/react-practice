import { authReducer  } from "./userlogin/reducer";
import {createStore} from "redux"
import {adminauthReducer} from "./adiminlogin/reducer"
import { combineReducers } from "redux";


const root =(combineReducers({
    userstate:authReducer,
    admin:adminauthReducer,
}))
   



export const store=createStore( authReducer,window.__REDUX_DEVTOOLS_EXTENSION__())