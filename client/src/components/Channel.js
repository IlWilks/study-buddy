import axios from "axios";
import { Form, Button, Card , Image} from "semantic-ui-react";
import {useEffect, useState} from 'react';
const Channel = (props) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({
    body: '',
    photo: ''
  })
  const [body, setBody] = useState('');
  const [photo, setPhoto] = useState('');
  const getComments = () =>{
    axios.get(`/api/channels/${props.match.params.id}/comments`)
    .then((res)=>{
      console.log(res.data);
      setComments(res.data);
    })
    .catch((err)=>{
      console.log(err);
    });
  };
  useEffect(()=>{
    getComments();
  },[])
  const renderComments = () =>{
    return comments.map((comment)=>(
      <Card key={comment.id}>
        <Image src={comment.photo}/>
        <Card.Content>{comment.body}</Card.Content>
      </Card>
    ))
  }
  const handleSubmit = (e) => {
    console.log(comment);
    axios.post(`/api/channels/${props.match.params.id}/comments`, comment)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    })
    window.location.reload();
  }
  const handleChange = (e) => {
    setComment({...comment, [e.target.name]: e.target.value})
  }
  return (
    <>
      <h1>Channel Name</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input 
        label='Body'
        placeholder='Comment here...'
        name='body'
        onChange={handleChange}
        />
        <Form.Input 
        label='Photo'
        placeholder='url to image'
        name='photo'
        onChange={handleChange}
        />
        <Button type='submit'>add</Button>
      </Form>
      <Card.Group>
        {renderComments()} 
      </Card.Group>
    </>
  )
}
export default Channel;