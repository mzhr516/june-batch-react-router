import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./components/NavigationBar";

import { AppRoutes } from "./components/Routes";

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
      <AppRoutes />
    </div>
  );
}

export default App;
