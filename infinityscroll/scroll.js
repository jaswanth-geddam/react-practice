var contaner=document.getElementById("container")
var p=1


const display=(data)=>{
    data.results.map((data)=>{
        const email=document.createElement("div")
        email.id="email"
        let h=document.createElement("h1")
        h.innerHTML=data.email
        //console.log(data.email)
        email.appendChild(h)
        contaner.appendChild(email)
    
    })
}

const getdata =async (s)=>{
    const res=await fetch(`https://randomuser.me/api/?page=${s}&results=25`)
    const data=await res.json()
    display(data)
    //console.log(data)
}

getdata()

const loadmore= async()=>{
    const {scrollTop, clientHeight,scrollHeight}=contaner

    if(scrollHeight-scrollTop===clientHeight){
        const data =await getdata(p)
        display(data)
            p+p+1
    }
}
loadmore()
p+p+1
contaner.addEventListener("scroll",loadmore)










