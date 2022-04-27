import axios from "axios";
import { useEffect, useState } from "react";

const useVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    const users = async () => {
      const { data } = await axios.get(
        "https://benevolent2022.herokuapp.com/user"
      );
      setVolunteers(data);
    };
    users();
  }, [volunteers]);
  return { volunteers, setVolunteers };
};

export default useVolunteers;
