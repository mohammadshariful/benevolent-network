import axios from "axios";
import { useEffect, useState } from "react";

const useVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    const users = async () => {
      const { data } = await axios.get("http://localhost:5000/user");
      setVolunteers(data);
    };
    users();
  }, [volunteers]);
  return { volunteers, setVolunteers };
};

export default useVolunteers;
