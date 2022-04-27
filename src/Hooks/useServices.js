import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://benevolent2022.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  return { services, isLoading, setServices };
};

export default useServices;
