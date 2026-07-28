import { useEffect, useState } from "react"
import{nanoid} from "nanoid"
// import './App.css';



function RecipeForm(){
    const [title,setTitle]=useState("")
    const [ingredients,setIngredients]=useState("")
    const [time,setTime]=useState("")
    const[image,setImage]=useState("")
    const[instructions,setInstructions]=useState("")
    const [data,setData]=useState([])
   
    const  getdata1=async()=>{
        const res =await fetch("http://localhost:3001/food")
        const result=await res.json();
        console.log(result.food)
        setData([...data,result.food])
    }
    const FormData=()=>{
        var payload={
            title:title,
            ingredients:ingredients,
            time:time,
            image:image,
            instructions:instructions,
            id:nanoid(7)
        };
        fetch("http://localhost:3001/food",{
        method:"POST",
        body:JSON.stringify(payload ),
        headers:{"content-type":"application/json",
    },
        })
       setData([...data,payload])
     
    }
   
   
    const handleItem=(id)=>{
        console.log(id)
       
    }
    
    return(
        <div>
             <div className="form">
             <input onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title" type="text" />
             <input  onChange={(e)=>{setIngredients(e.target.value)}}placeholder="Ingredients" type="text" />
             <input onChange={(e)=>{setTime(e.target.value)}} placeholder="Time To cook" type="text" />
             <input onChange={(e)=>{setImage(e.target.value)}} placeholder="Image" type="file" />
             <input onChange={(e)=>{setInstructions(e.target.value)}} placeholder="Instructions" type="text" />
             <button onClick={FormData}>submit</button>
             </div>
         <div className="c">
            {data.map((e)=>(
                <div  className="data" key={e.id}>
                    <p>Title : {e.title}</p>
                    <p>Ingredients{e.ingredients}</p>
                    <p>Time : {e.time}</p>
                   <img src="https://th.bing.com/th/id/OIP.0BWLyr1gKB9Pz2triv48-QHaE7?w=282&h=188&c=7&r=0&o=5&pid=1.7"  alt="jj"/>
                    {/* <p>instructions:{instructions}</p> */}
                    <button onClick={handleItem}>Orderitem</button>
                    <br>
                    </br>
                    <br></br>
                    <div className="ins">  <p>instructions:{instructions}</p></div>
                </div>
            ))}
            </div>
            <br></br>
            <br></br>
            <br />
            <div>
            
            </div>
        </div>

    )
} 

export default RecipeForm