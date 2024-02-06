import { useEffect, useState } from "react";
import axiosData from "../helpers/api.js";

const useFetchApi = ({ url }) => {
  console.log(url);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axiosData.get(url);
        console.log(response.data.products);
        setData(response.data.products);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [url]);

  return {
    data,
    setData,
    loading,
    setLoading,
  };
};

export default useFetchApi;
