import { useEffect, useState } from "react";










function Comment({ commentItem }) {
  const [commentText, setCommentText] = useState("");
  const [commentState, setCommentState] = useState(commentItem);
 
  const [hide, setHide] = useState(true);

  const nestedComments = (commentState.replies|| []).map((c) => {
    return <Comment key={c.id} commentItem={c} />;
  });

  function handleCommentAdd(e) {
    e.preventDefault();
    //console.log(e)
    const id = Math.random().toString();
    const body = commentText;
    setCommentText("");
    const commentItemChildren = commentState.replies? [...commentState.replies, { id, body }]: [{ id, body }];
    setCommentState({ ...commentState, replies: commentItemChildren });

    
   
 


  


  
  
  }


  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "White",
        border: "1px black solid",
        marginBottom: "10px"
      }}
    >
      <div
        style={{ color: "black", padding: "10px" }}
      >{`${commentState.body}...`}</div>
      <div style={{ marginBottom: "10px", display: "flex", padding: "10px" }}>
        <form onSubmit={handleCommentAdd}>
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />

          <button
            style={{ marginLeft: "10px" }}
            type="submit"
            disabled={!commentText}
          >
            Reply
          </button>
        </form>
      </div>
      <div>
        <button onClick={() => setHide(!hide)}>{hide ? "Show" : "Hide"}</button>
      </div>
      {!hide && nestedComments}
    </div>
  );
}

export default Comment;
