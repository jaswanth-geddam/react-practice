import { useContext } from "react"
import { ThemeContext } from "../context/theam"
import {Cart} from "./cart"
export const Nav=()=>{
    const {theme}=useContext(ThemeContext)
    return <div>
        theme:{theme}
         <Cart />
        
    </div>
}
