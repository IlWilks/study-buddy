import axios from "axios";
import { useEffect, useState } from "react";

export default (props) => {
  const [value, setValue] = useState("")
  const [groups, setGroups] = useState([])

  useEffect(()=> {
    getGroup();
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
  return (
    <>

    </>
  )
 
}