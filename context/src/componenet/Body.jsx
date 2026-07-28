import { useContext } from "react";
import {CartContext} from "../context/cartcontext"


export const Body =()=>{
    const {handlecartUpdate}=useContext(CartContext)
    return (

        <div>
            <button onClick={()=>{handlecartUpdate(1)}}>

            add</button>
        </div>
    )
}