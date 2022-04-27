import axios from "axios";
import { useEffect, useState } from "react";

const useEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const events = async () => {
      const { data } = await axios.get("http://localhost:5000/events");
      setEvents(data);
    };
    events();
  }, [events]);
  return { events, setEvents };
};

export default useEvents;
