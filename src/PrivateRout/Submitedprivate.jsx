import {  useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Componenets/Mainpage/AuthProvider.jsx/AuthProvider";


const Submitedprivate = ({children }) => {
    const { user, loading } = useContext(AuthContext);
    if(loading){
        return <h1 className="text-5xl">Loading...</h1>
    }
    if (user) {
        return children

    }
    return <Navigate to="/login"></Navigate>
}
export default Submitedprivate;