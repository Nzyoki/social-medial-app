import axios from 'axios';
import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

function NewsFeed() {
    const[posts, setPosts]=useState([
        {id:1, title:"Tech news", body:"Latest updates from the tech world"},
        {id:2, title:"School updates", body:"New features in React"},
    ]);
  return (
    <div className="news-feed">
        <h2>News Feed</h2>
        {posts.map(post=>(
            <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
        ))}
    </div>
  );
}

export default NewsFeed;