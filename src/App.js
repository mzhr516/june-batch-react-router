import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./components/NavigationBar";
import { HomePage } from "./components/HomePage";
import { ContactPage } from "./components/ContactPage";
import { NotFound } from "./components/NotFound";

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
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<h1>about us Page </h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
