import { useState, useEffect } from "react";

export default function myFetch(props) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(props)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return data;
}

/*import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function myFetch(props) {
  /* FETCH DATA ON CLIENT SIDE */
/* TO RECEIVE THE DATA : const {data, error} = */

/*return useSWR(props, fetcher);
}*/
