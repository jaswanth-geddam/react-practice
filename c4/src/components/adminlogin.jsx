import { useState } from "react"
import { store } from "../redux/store"
import { Navigate } from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { userloginsuccess } from "../redux/userlogin/action"


export const AdminLogin=()=>{
    const isAuth=useSelector(store=>store.isAuth)
    const [email,setEmail]=useState("")
    const [pass, setPass]=useState("")
    const dispatch =useDispatch()

    const handlelogin =()=>{
        const action=userloginsuccess(Math.floor(Math.random()*9))
        dispatch(action)

    }
    if(isAuth){
       return <Navigate to={"/Adimindashboard"} />

    }



    return (<div>
        <input value ={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="enter email or user name" />
        <input value ={pass}type="password" onChange={(e)=>setPass(e.target.value)}placeholder="enter passward" />
        <button onClick={handlelogin}>Login</button>
    </div>)

}