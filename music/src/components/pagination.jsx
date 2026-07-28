import "./songes.css"

const Pagination =({data,pageHandle})=>{
    console.log(data)
    var pageNumber=[]
    for(var i=1;i<Math.floor(data.length/3)+1;i++){
        pageNumber.push(i)
    }
    
    return (
        <div className="button"  >
            <center>
                {pageNumber.map((page,i)=><div key={i} className="pagebutton" >
                    <button onClick={()=>pageHandle(page)}>{page}</button></div>)}
            </center>

        </div>
    )
}
export {Pagination}