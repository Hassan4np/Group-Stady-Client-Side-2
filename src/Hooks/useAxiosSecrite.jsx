import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Componenets/Mainpage/AuthProvider.jsx/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const axiossecrite = axios.create({
    baseURL: 'http://localhost:5001',
    withCredentials: true
})
const useAxiosSecrite = () => {
    const { UserLogout } = useContext(AuthContext);

    const navigate = useNavigate()
    useEffect(() => {
        axiossecrite.interceptors.response.use(res => {
            return res
        }, error => {
            console.log('error tran in the intersction', error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user')
                UserLogout()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(errer => {
                        console.log(errer)
                    })
            }
        })
    }, [])
    return axiossecrite
}
export default useAxiosSecrite;