import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./components/NavigationBar";
import { HomePage } from "./components/HomePage";
import { ContactPage } from "./components/ContactPage";
import { NotFound } from "./components/NotFound";
import { AboutUsPage } from "./components/AboutUsPage";
import { BooksPage } from "./components/BooksPage";
import { CreateBook } from "./components/CreateBook";

function App() {
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <HomePage />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <ContactPage />,
  //   },
  //   { path: "/about", element: <h1>about us Page </h1> },
  //   {
  //     path: "*",
  //     element: <h1>404 not found</h1>,
  //   },
  // ]);
  return (
    <div className="App">
      <NavigationBar />

      {/* {element} */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/books" element={<BooksPage />}>
          
          <Route path="booklist" element={<> book list page</>} />

          <Route path="createbook" element={<CreateBook />}>
            <Route path="link1" element={<>link 1 page</>} />
            <Route path="link2" element={<>link 2 page</>} />
          </Route>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
