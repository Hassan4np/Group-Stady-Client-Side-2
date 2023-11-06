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
import Submitmarks from "../AssignmentSubmit/Submitmarks";
import DetailsAssignmentprivate from "../../../PrivateRout/DetailsAssignmentprivate";
import Submitformprivate from "../../../PrivateRout/Submitformprivate";
import Submitedprivate from "../../../PrivateRout/Submitedprivate";
import Updateprivate from "../../../PrivateRout/Updateprivate";
import AddAssignmentprivate from "../../../PrivateRout/AddAssignmentprivate";
import Markprivate from "../../../PrivateRout/Markprivate";


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
        element: <AddAssignmentprivate><AddAssignment></AddAssignment></AddAssignmentprivate>
      },
      {
        path: "/submit",
        element: <Submitedprivate><SubmitAssignment></SubmitAssignment></Submitedprivate>
      },
      {
        path:"/updateassignment/:id",
        element:<Updateprivate><UpdateAssignment></UpdateAssignment></Updateprivate>
      },
      {
        path:"/viewassignment/:id",
        element:<DetailsAssignmentprivate><DetailsAssignment></DetailsAssignment></DetailsAssignmentprivate>
      },
      {
        path:"/submitfrom/:id",
        element:<Submitformprivate><SubmitFrom></SubmitFrom></Submitformprivate>
      },
      {
        path:"/submitmarks/:id",
        element:<Markprivate><Submitmarks></Submitmarks></Markprivate>
      }

    ]
  },
]);


export {Mybrowser}