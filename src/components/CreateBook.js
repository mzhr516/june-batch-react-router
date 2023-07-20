import React from "react";
import { Link, Outlet } from "react-router-dom";

export const CreateBook = (props) => {
  return (
    <div>
      <h1>create book page</h1>
      <nav>
        <ul>
          <Link to="/books/createbook/link1">link 1</Link>
          <br />
          <Link to="/books/createbook/link2">link 2</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
