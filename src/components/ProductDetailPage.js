import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetailPage = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => setDetails(json))
        .catch((err) => alert("something went wrong"));
    }
  }, [id]);
  return (
    <div>
      <h1>{details.title}</h1>
      <p>{details.description}</p>
    </div>
  );
};
