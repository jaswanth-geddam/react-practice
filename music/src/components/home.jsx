import { Link } from "react-router-dom"
import "./home.css"



export const Home=()=>{
    return (<><center>
        <div className="home"> 
        <Link to="/home"> <h1>HOME</h1></Link>
        <br></br>
        <Link to="/songes/"> <h1>SONGES</h1></Link>
       
     
        </div>
        </center></>)
   
}