import {  useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Componenets/Mainpage/AuthProvider.jsx/AuthProvider";


const DetailsAssignmentprivate = ({children }) => {
    const { user, loading } = useContext(AuthContext);
    const loc = useLocation()
    console.log(loc)
    if(loading){
        return <h1 className="text-5xl">Loading...</h1>
    }
    if (user) {
        return children

    }
    return <Navigate state={loc.pathname} to="/login"></Navigate>
}
export default DetailsAssignmentprivate;