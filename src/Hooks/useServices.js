import axios from "axios";
import { useEffect, useState } from "react";

const useServices = ({ page, size }) => {
  const [services, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const url = `https://benevolent2022.herokuapp.com/services?page=${page}&size=${size}`;
    setLoading(true);
    const getService = async () => {
      try {
        const { data } = await axios.get(url);
        setServices(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getService();
  }, [page, size]);
  /*  useEffect(() => {
    setLoading(true);
    fetch(
      `https://benevolent2022.herokuapp.com/services?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [page, size]); */
  return { services, isLoading, setServices };
};

export default useServices;
