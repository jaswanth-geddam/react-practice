import { useEffect } from "react"
import axios from "axios" 
import { useState } from "react"
import { Pagination } from "./pagination"
import "./songes.css"
import { Link, useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
var Songes = function (match){
    const [data,setData]=useState([])
    const [page,setPage]=useState([])
    // const id=useParams()
    // console.log(id.id)
    useEffect(()=>{
       axios.get(`http://localhost:2233/home`).then(res=>{
           setData(res.data);setPage(res.data.slice(0,3));
       })
    },[])
    // const getSongs = async() =>{
    //     const res = await fetch(`http://localhost:2233/home`)
    //     const data = await res.json()
    //    console.log(data)
        
    // }
    const pageHandle=(pageNumber)=>{
         setPage(data.slice(pageNumber*3-3,pageNumber*3));
         console.log("a")
    

    }
   
    return(<div>
        
        
        <center>
            <h1>Albums</h1>
            {data.length>=1?
             <div>{page.map((item)=>(
             <div className="album" key={item._id}>
                  <img src={item.cover_Photo} alt="" />
               
             </div>
              ))}
             <Pagination data={data} pageHandle={pageHandle} />
              </div>  
        :<p>data is</p>  
        }
      
    
    </center>
    </div>)
}
export {Songes}