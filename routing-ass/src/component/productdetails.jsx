import { useParams } from "react-router-dom"

export const Productdetails=()=>{
    const{name,price,id}=useParams();
 return (
     <div>
         <h1>title: {name}</h1>
         <h1>price: {price}</h1>
         <h1>id:{id}</h1>
     </div>
 )   
}