import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Mainpage from "../Mainpage";
import Signup from "../Register/Signup";
import Login from "../Register/Login";
import Error from "../Page/Error";
import Assignment from "../Assignment/Assignment";
import AddAssignment from "../Assignment/AddAssignment";
import SubmitAssignment from "../AssignmentSubmit/SubmitAssignment";
import UpdateAssignment from "../Assignment/UpdateAssignment";
import DetailsAssignment from "../Assignment/DetailsAssignment";
import SubmitFrom from "../AssignmentSubmit/SubmitFrom";


const Mybrowser = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/assignment",
        element: <Assignment></Assignment>
      },
      {
        path: "/addassignment",
        element: <AddAssignment></AddAssignment>
      },
      {
        path: "/submit",
        element: <SubmitAssignment></SubmitAssignment>
      },
      {
        path:"/updateassignment/:id",
        element:<UpdateAssignment></UpdateAssignment>
      },
      {
        path:"/viewassignment/:id",
        element:<DetailsAssignment></DetailsAssignment>
      },
      {
        path:"/submitfrom/:id",
        element:<SubmitFrom></SubmitFrom>
      }

    ]
  },
]);


export {Mybrowser}