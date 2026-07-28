

export const DashBoard=()=>{

    const data=[{title:"fullstack",
                salry:"100000",
            locatinon:"eluru"},
            {title:"uiux",
                salry:"100000",
            locatinon:"eluru"},
            {title:"networking",
                salry:"100000",
            locatinon:"eluru"},
            {title:"cybersecurity",
                salry:"100000",
            locatinon:"eluru"}
        ]
    return(
        
       <div>
           {data.map((e)=>(
               <div>
                  <div> title:{e.title}</div>
                  <div> salry:{e.salry}</div>
                  <div>  location:{e.locatinon}</div>
                  <div><button onClick={()=>0}>apply now</button></div>
               </div>
           ))}
       </div>
    )
}