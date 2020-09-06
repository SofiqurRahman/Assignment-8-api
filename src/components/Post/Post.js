import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Post = (props) => {
  const {userId,id,title,body}=props.post;
  const postStyle={
    border: '1px solid purple',
    margin: '20px',
    padding: '20px',
    borderRadius: '20px'
  }
  
  return (
    <div style={postStyle}>
      <h2>User ID: {userId}</h2>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <Link to={`/post/${id}`}>
        <Button variant="contained" color="primary">
          SEE DETAILS
        </Button>
      </Link>
    </div>
  );
};

export default Post;