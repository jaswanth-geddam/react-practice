
import './App.css';
import { useState, useEffect } from "react";

var toplanets=4

const URL = "https://findfalcone.herokuapp.com/planets"

 function App() {
  const [planets, setPlanets] = useState([]);
  const [p,setP]=useState(0)
  const [veh,setVeh]=useState([])
  

  const fetchDataFromAPI = async () => {
    let response = await fetch(URL);
  
    response = await response.json();
  
 
    console.log(response)
    setPlanets(response);
  };
  const fetchDataFromAP = async () => {
   
    let veschiles = await fetch("https://findfalcone.herokuapp.com/vehicles");
  
    veschiles  = await veschiles.json();
    console.log(veschiles )
    setVeh(veschiles)
  
    
  };
  var p1=0;
  var p2=0;
  var p3=0;
  var p4=0;
  var p5=0;
  var p6=0
  //Enchai
  // Jebing
  // Sapir
  // Lerbin
  // Pingasor
  const handlePlanets = (x)=>{
  console.log(x)
  if(x==="Donlon"){
    if(p1==0){
      p1++
      setP(1)
    }
    else{
      p1--
    }
   
  }
  if(x==="Enchai"){
    if(p2==0){
      p2++
    }
    else{
      p2--
    }
  }
  if(x==="Sapir"){
    if(p3==0){
      p3++
    }
    else{
      p3--
    }
  }
  if(x==="Lerbin"){
    if(p4==0){
      p4++
    }
    else{
      p4--
    }
  }
  if(x==="Pingasor"){
    if(p5==0){
      p5++
    }
    else{
      p5--
    }
  }   
  if(x==="Jebing"){
    if(p5==0){
      p5++
    }
    else{
      p5--
    }
  } 
  var sum=0
  sum=p1+p2+p3+p4+p5+p6
  if(sum>4){
    alert("plese enter 4 planets")
    
  }
  console.log(p1+p2+p3+p4+p5+p6)

  
 
  
  }
  const handleveh=(el)=>{
    console.log(el.name)

  }

  useEffect(() => {
    fetchDataFromAPI();
    fetchDataFromAP();
  }, []);


  return (
    <div>
    <div>{ planets.map(( item,id) => 
    <div>
    <div className={item.name} key={id}>{item.name}</div>
    <button onClick={()=>handlePlanets(item.name)}>select</button>
    </div>
    )}</div>
    {p==1? <div className="vechical">  {veh.map((el)=><dv><  button onClick={()=>handleveh(el)}>{el.name}</button><br></br></dv>)}  </div> :<p></p>}
   
    </div>
  );
}
export default App