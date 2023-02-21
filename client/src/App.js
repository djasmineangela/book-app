import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/navbar";
import BookDetails from "./pages/Book/Book";
import GenrePage from "./pages/Genre/Genre";
import HomePage from "./pages/Home/Home";

const Layout = () => {
  return (
    <div className="template">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/genre/:id",
        element: <GenrePage/>
      },
      {
        path: "/book/:id",
        element: <BookDetails/>
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
