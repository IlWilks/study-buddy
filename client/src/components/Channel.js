import axios from "axios";
import { Form, Button, } from "semantic-ui-react";
import {useEffect, useState} from 'react';

const Channel = (props) => {

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({})
  const [body, setBody] = useState('');
  const [photo, setPhoto] = useState('');
  
  const getComments = () =>{
    axios.get(`/api/channels/5/comments`)
    .then((res)=>{
      console.log(res.data);
      setComments([...comments, comment])
    })
    .catch((err)=>{
      console.log(err);
    });
  };
  
  useEffect(()=>{
    getComments();
  },[])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
    setComment({body: body, photo: photo })
    axios.post(`/api/channels/5/comments`, comment)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // const handleChange = (e) => {
  //   setComment({[e.target.name]: e.target.value})
  // }

  return (
    <>
      <h1>Channel Name</h1>
      <p>Comments</p>
      <p>Add Comment Form</p>
      <Form onSubmit={handleSubmit}>
        <Form.Input 
        label='Body'
        placeholder='Comment here...'
        name='body'
        onChange={(e)=>setBody(e.target.value)}
        />
        <Form.Input 
        label='Photo'
        placeholder='url to image'
        name='photo'
        onChange={(e)=>setPhoto(e.target.value)}
        />
        <Button type='submit'>add</Button>
      </Form>
    </>
  )
}

export default Channel;