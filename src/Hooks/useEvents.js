import axios from "axios";
import { useEffect, useState } from "react";

const useEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const events = async () => {
      const { data } = await axios.get(
        "https://benevolent2022.herokuapp.com/events"
      );
      setEvents(data);
    };
    events();
  }, [events]);
  return { events, setEvents };
};

export default useEvents;
