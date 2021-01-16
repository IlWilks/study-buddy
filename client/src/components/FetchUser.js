import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const FetchUser = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { authenticated, setUser } = useContext(AuthContext);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    if (authenticated || !localStorage.getItem("access-token")) {
      setLoaded(true);
      return;
    }
    try {
      const res = await Axios.get("/api/auth/validate_token");
      setUser(res.data.data);
    } catch (err) {
      console.log(err.response);
      console.log("invalid token");
    } finally {
      setLoaded(true);
    }
  };
  return loaded ? props.children : null;
};
export default FetchUser;