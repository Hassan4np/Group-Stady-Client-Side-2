import axios from "axios";


const axiose = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
const useAxios = () => {
    // const { UserLogout } = useContext(AuthContext);

    // const navigate = useNavigate()
    // useEffect(() => {
    //     axiose.interceptors.response.use(res => {
    //         return res
    //     }, error => {
    //         console.log('error tran in the intersction', error.response);
    //         if (error.response.status === 401 || error.response.status === 403) {
    //             console.log('logout the user')
    //             UserLogout()
    //                 .then(() => {
    //                     navigate('/login')
    //                 })
    //                 .catch(errer => {
    //                     console.log(errer)
    //                 })
    //         }
    //     })
    // }, [])
    return axiose
}
export default useAxios;