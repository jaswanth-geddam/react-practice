import { useContext } from "react"

import {CartContext} from "../context/cartcontext"


export const Cart=()=>{
    const {cart} =useContext(CartContext);

    return  <div>no of: {cart}</div>
}
