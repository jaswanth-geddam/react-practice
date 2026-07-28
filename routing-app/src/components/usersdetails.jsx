import { useParams } from "react-router-dom"

export const Userdetails=()=>{
    const{id}=useParams();
 return (
     <div>
         fetch data of user:{id}
     </div>
 )   
}