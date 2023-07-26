import React from "react";
import { useParams } from "react-router-dom";
import { booksDetails } from "./bookNameList";

export const BookDetailView = () => {
  const { index } = useParams();
  const Details = booksDetails[index];
  console.log(Details);
  return (
    <div>
      <h1>
        <a href={Details.link} target="_blank">
          {Details.title}
        </a>
      </h1>
      <p>{Details.author}</p>
    </div>
  );
};
