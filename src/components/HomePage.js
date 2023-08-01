import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // {
  //   title: 'foo',
  //   body: 'bar',
  //   userId: 1,
  // }

  const onClick = () => {
    setIsLoading(true);

    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((responce) => {
    //     setData(responce.data);
    //     setIsLoading(false);
    //   })
    //   .catch();

    // fetch("https://dummyjson.com/products")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setData(json);
    //     setIsLoading(false);
    //     console.log(json);
    //   });

    /// post call

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((json) => console.log(json))
    //   .catch((error) => {
    //     alert(error);
    //   });

    // axios
    //   .post(
    //     "https://jsonplaceholder.typicode.com/posts",
    //     {
    //       title: "tekiksy",
    //       body: "software company",
    //       userId: 1,
    //     }
    //   )
    //   .then((responce) => console.log(responce.data))
    //   .catch();

    // put call

    // fetch("https://jsonplaceholder.typicode.com/posts/1", {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     id: 1,
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // }).then().catch()

    // axios.put("https://jsonplaceholder.typicode.com/posts/1", {
    //   id: 1,
    //   title: "foo",
    //   body: "bar",
    //   userId: 1,
    // });

    // delete call

    // fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "DELETE" })
    //   .then()
    //   .catch();

    axios.delete("https://jsonplaceholder.typicode.com/posts/1");
  };

  return (
    <div>
      {data.length === 0 && <button onClick={onClick}>get data</button>}
      {isLoading === true ? (
        <h1>Loading....</h1>
      ) : (
        data?.map((value, index) => {
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
