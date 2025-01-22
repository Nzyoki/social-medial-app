import axios from "axios";
import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom";

function Comments({postId}) {
    const [comments, setComments]=useState([
        {id:1, name:"Kev" ,  body:"Great content"},
        {id:2, name:"Winnie" ,  body:"Nice post" , }]);
    const [newComment, setNewComment]=useState([]); // sets the comments to an empty array

    const handleAddComment=()=>{
        const newCommentEntry={
            id:comments.length+1,
            name:"User",
            body:newComment,
           // avatar:"https://via.placeholder.com/40",
        };
        setComments([...comments, newCommentEntry]);
        setNewComment("");
    };
    return (
    <div className="Comments">
        <h4>Comments</h4>
        {comments.map(comments=>(
            <div key={comments.id} className="comment">
                <p>{comments.name}</p>
                <p>{comments.body}</p>
            </div>
        ))}
        <input 
        type="text" 
        value={newComment} 
        onChange={(e)=>setNewComment(e.target.value)}
        placeholder="Add a comment" />  
        <button onClick={handleAddComment}>Add</button>
    </div>
  );
}

export default Comments;