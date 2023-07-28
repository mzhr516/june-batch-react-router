import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onClick = () => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json);
        setIsLoading(false);
        console.log(json);
      });
  };
  return (
    <div>
      {data.length === 0 && <button onClick={onClick}>get data</button>}
      {isLoading === true ? (
        <h1>Loading....</h1>
      ) : (
        data?.products?.map((value, index) => {
          return (
            <p key={value.id}>
              <Link to={`/productDetail/${value.id}`}>
                {" "}
                {index + 1}: {value.title}
              </Link>
            </p>
          );
        })
      )}
    </div>
  );
};
