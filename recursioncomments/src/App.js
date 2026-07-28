import { useState, useEffect } from "react";
import Comment from "./comments";


const URL = "http://localhost:3004/comments";

 function App() {
  const [comments, setComments] = useState([]);
  

  const fetchDataFromAPI = async () => {
    let response = await fetch(URL);
    response = await response.json();
    setComments(response);
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <div>
      {
        comments.map(( item) => <Comment commentItem={item} key={item.id} />)}
    </div>
  );
}
export default App