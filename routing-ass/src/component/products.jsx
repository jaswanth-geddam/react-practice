import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const AllProducts=()=> {
  const [data, setdata] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:3004/data").then((res) => {
      res.json().then((data) => {
     // console.log(data[0])
        setdata(data[0]);
      });
    });
    return (err) => {
      console.log(err);
    };
  }, []);

 


  return (
    <div>
      {data.map((e,i) => (
        <div key={i}>
          <div>name:{e.name}</div>
          <div> price:{e.price}</div>
          <Link to={`/products/${e.name}/${e.price}/${e.id}`}>
            <button>More details</button>
          </Link>
        </div>
      ))}
    </div>

  );
}

