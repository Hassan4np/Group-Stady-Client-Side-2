import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Componenets/Mainpage/AuthProvider.jsx/AuthProvider";


const axiose = axios.create({
    baseURL: 'https://group-stady-backend-side.vercel.app',
    withCredentials: true
})
const useAxios = () => {
    const { UserLogout } = useContext(AuthContext);

    const navigate = useNavigate()
    useEffect(() => {
        axiose.interceptors.response.use(res => {
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
    return axiose
}
export default useAxios;