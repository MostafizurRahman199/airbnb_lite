import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ListingDetails from "../pages/ListingDetails";
import CreateList from "../pages/CreateList";
import UpdateList from "../pages/UpdateList";
import AllListings from "../pages/AllListings";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:8080/listings"),
      },
      {
        path: "/allListings",
        element: <AllListings></AllListings>,
        loader: () => fetch("http://localhost:8080/listings"),
      },
      {
        path: "/listing/:id",
        element: <ListingDetails></ListingDetails>,
        loader: ({ params }) => 
          fetch(`http://localhost:8080/listings/${params.id}`), // Now this will work
      },
      {
        path: "/createList",
        element: <CreateList></CreateList>,
       
      },
      {
        path: "/updateList/:id",
        element: <UpdateList></UpdateList>,
        loader: ({ params }) => 
            fetch(`http://localhost:8080/listings/${params.id}`),
       
      },
      {
        path:"*",
        element:<ErrorPage></ErrorPage>

      }
      
    ],
  },
]);

export default router;
