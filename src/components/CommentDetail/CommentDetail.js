import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CommentDetail = () => {
  const {postId}=useParams();
  const [comment,setComment]=useState({});
  useEffect(()=>{
    const url=`https://jsonplaceholder.typicode.com/comments/${postId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setComment(data))
  },[])
  return (
    <div>
      <h1>This is comment detail component {postId}</h1>
      <p><b>Post ID:</b> {comment.postId}</p>
      <p><b>ID:</b> {comment.id}</p>
      <p><b>Name:</b> {comment.name}</p>
      <p><b>Email:</b> {comment.email}</p>
      <p><b>Body:</b> {comment.body}</p>
    </div>
  );
};

export default CommentDetail;