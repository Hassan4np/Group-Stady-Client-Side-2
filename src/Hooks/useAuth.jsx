import { useContext } from "react";
import { AuthContext } from "../Componenets/Mainpage/AuthProvider.jsx/AuthProvider";


const useAuth = () => {
    const Authsconstext = useContext(AuthContext);
    return Authsconstext
};

export default useAuth;