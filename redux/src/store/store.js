import { createStore } from "redux";
import { reducer } from "./reducer";
import { combineReducers } from "redux";
import {counterReducer }from "./action-reducer";


const rootreducer=combineReducers({
    reducer:reducer,
    counterReducer:counterReducer
  
   
})



export const store=createStore( rootreducer);
