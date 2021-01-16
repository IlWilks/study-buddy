import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Form, Header, } from 'semantic-ui-react';
import GroupShow from './GroupShow';


export default (props) => {
  const [value, setValue] = useState("")
  const [groups, setGroups] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [editTerm, setEditTerm] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(()=> {
    getGroups();
  }, []);

  const getGroups = async () => {
    try {
      let res = await axios.get(`/api/groups`);
      setGroups(res.data);
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
    console.log(id)
    let res = await axios.delete(`/api/groups/${id}`)
    let newGroups = groups.filter((g) => g.id !== res.data.id);
    setGroups(newGroups);
    } catch (err) {
      console.log(err)
    }
}

const handleEdit = async (id, term) => {
  try {
    console.log(id)
    let res = await axios.put(`/api/groups/${id}`, term)
    let newGroups = groups.map((d) => (d.id !== id ? d : res.data));
    setGroups(newGroups);
    } catch (err) {
      console.log(err)
    }
}

const handleNew = async (id, test) => {
  try {
    let res = await axios.post(`/api/groups/${id}`, test)
    setGroups([...groups, test])
  } catch (err) {
    console.log(err)
  }
}

  return (
    <>
      <div className="Searchbar">
        <input type="text" placeholder="Search groups"
                onChange={e => {setSearchTerm(e.target.value)}}/>
      </div>
      <Form onSubmit={handleNew}>
      <Form.Input
        label={"Title"}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Form.Input
        label={"Desc"}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <Form.Button type="submit">Add Department</Form.Button>
    </Form>
      <div className="groups">
        {groups.filter((val) => {
          if (searchTerm == "") {
            return val
          }
          else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map(g => {
            return(
                <Card>
                  <Card.Content>
                    <Card.Header as={Link} to={`/${g.id}`}>{g.title}</Card.Header>
                    <Card.Description>{g.description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                  <Form onSubmit={() => handleEdit(g.id, {editTerm})}>
                    <Form.Input
                      label={"Title"}
                      value={editTerm}
                      onChange={(e) => {
                        setEditTerm(e.target.value);
        }}
      />
      <Form.Button type="submit">Submit</Form.Button>
    </Form>
        <div className='ui two buttons'>
          <Button basic color='yellow'>
            Edit Group
          </Button>
          <Button onClick={() => handleDelete(g.id)} basic color='red'>
            Delete Group
          </Button>
        </div>
      </Card.Content>
                </Card>
            ) })}
      </div>
    </>
  )
 
}


// import Axios from 'axios'
// import { useEffect, useState } from 'react'
// import { Card, Image, Button, Segment, Header } from 'semantic-ui-react'

// export default (props) => {
//   const [channel, setChannel] = useState([])
//   useEffect(()=> {
//     getChannels()
//   },[])
//   const getChannels = async () => {
//     try {
//       let res = await Axios.get('/api/groups/1/channels')
//       console.log(res.data)
//       setChannel(res.data)
//     }
//     catch (err) {
//       console.log(err)
//     }
//   }
//   const renderChannels = () => {
//     return channel.map((channel) => (
//       <Card key={`channel-${channel.id}`}>
//         <Card.Content>
//           <Card.Header>{channel.subject}</Card.Header>
//           <Card.Description>{channel.description}</Card.Description>
//         </Card.Content>
//       </Card>
//     ));
//   };
//   return (
//     <>
//       <div>channels</div>
//       </>
//   );
// };

