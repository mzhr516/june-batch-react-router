import React from "react";
import { Link, Outlet } from "react-router-dom";

export const BooksPage = (props) => {
  return (
    <div>
      <h1>Books Page</h1>
      <nav>
        <ul>
          <Link to="/books/booklist">books list</Link>
          <br />
          <Link to="/books/createbook">create book</Link>
        </ul>
      </nav>
      
      <Outlet context={"hello world"}/>
    </div>
  );
};
