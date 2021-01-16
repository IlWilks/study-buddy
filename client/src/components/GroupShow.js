import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Image, Button, Segment, Header, Container, Icon, Form,} from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default (props) => {
  const [value, setValue] = useState("")
  const [groups, setGroups] = useState([])
  const [channel, setChannel] = useState([])
  const [newChannel, setNewChannel] = useState({
    subject:"",
    description:"",
  })

  useEffect(()=> {
    getGroup();
    getChannels()
  }, []);

  const getGroup = async () => {
    try {
      let res = await axios.get(`/api/groups/${props.match.params.id}`);
      setGroups(res.data);
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  const getChannels = async () => {
    try {
      let res = await axios.get(`/api/groups/${props.match.params.id}/channels`)
      console.log(res.data)
      setChannel(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  // const addChannel = async () => {
  //   try {
  //     let res = await axios.post(`/api/groups/${props.match.params.id}/channels/1`, channel);
  //     setChannel([...channel, res.data]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  const deleteChannel = async (id) => {
    try {
      let res = axios.delete(`/api/groups/${props.match.params.id}/channels/1`)
      let newChannel = channel.filter((c) => c.id !== id);
      setChannel(newChannel);
    } catch (err) {
      console.log(err);
    }
  }
  const handleSubmit = (e) => {
    console.log();
    axios.post(`/api/groups/${props.match.params.id}/channels`, newChannel)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    })
    window.location.reload();
  }
    const renderChannels = () => {
    return channel.map((channel) => (
      <>
      <Segment  key={`channel-${channel.id}`}>
      <Link to={`/channel/${channel.id}`}> 
          <h1>{channel.subject}</h1>
          </Link>
          <p>{channel.description}</p>
            <Button  icon="trash" onClick={() => deleteChannel(channel.id)}>
            </Button>
        </Segment>
        </>
    ));
  };
  const handleChange = (e) => {
    setNewChannel({...newChannel, [e.target.name]: e.target.value})
  }
  return (
  <Container>
    <Form onSubmit={handleSubmit}>
        <Form.Input 
        label='Subject'
        placeholder='Subject here...'
        name='subject'
        onChange={handleChange}
        />
        <Form.Input 
        label='Description'
        placeholder='Desc here'
        name='description'
        onChange={handleChange}
        />
        <Button type='submit'>add</Button>
      </Form>
      <div>{renderChannels()}</div>
      </Container>
  );
}
