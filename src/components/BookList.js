import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { booksDetails } from "./bookNameList";

export const BookList = () => {
  const contex = useOutletContext();
  console.log(booksDetails);
  return (
    <div>
      <ul>
        {booksDetails.map((list, index) => {
          return (
            <li key={index}>
              <Link to={`/bookdetail/${index}`}>{list.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
