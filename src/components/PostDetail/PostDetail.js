import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetail from '../CommentDetail/CommentDetail';

const PostDetail = () => {
  const {postId}=useParams();
  const [post,setPost]=useState({}); 
  useEffect(()=>{
    const url=`https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPost(data))
  },[])

  const postDetailStyle={
    backgroundColor:'#0069D9',
    color: '#fff',
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '5px 5px 5px #888888'
  }
  return (
    <div style={postDetailStyle}>
      <h1>This is post detail component {postId}</h1>
      <p><b>User ID:</b> {post.userId}</p>
      <p><b>ID:</b> {post.id}</p>
      <p><b>Title:</b> {post.title}</p>
      <p><b>Body:</b> {post.body}</p>
      <CommentDetail></CommentDetail>
    </div>
  );
};
export default PostDetail;