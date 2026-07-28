import {AuthContext} from "../context/AuthContext";
import { useContext } from 'react';
export const Navbar=()=>{
    const {cart}=useContext(AuthContext)
    return <div>navbar:{cart}</div>
}