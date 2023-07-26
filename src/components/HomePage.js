import React, { useEffect, useState } from "react";

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <h1>Loading....</h1>
      ) : (
        data.map((value, index) => {
          return (
            <p key={value.userId}>
              {index + 1}: {value.title}
            </p>
          );
        })
      )}
    </div>
  );
};
