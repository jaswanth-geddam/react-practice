import { useState } from "react"




export const AdminDashBoard =()=>{
    const [jpbs,setJobs]=useState([])
    const [title,setTitle]=useState("")
    const [salary,setSalary]=useState("")

    const handlepost =()=>{
        setJobs(title,salary)
    }

return (
    <div>
        <input type="text" placeholder="enter jobtitle" onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" placeholder="enter jobtitle" onChange={(e)=>setSalary(e.target.value)}/>
        <button onClick={handlepost}></button>
    </div>
    
)    

}
