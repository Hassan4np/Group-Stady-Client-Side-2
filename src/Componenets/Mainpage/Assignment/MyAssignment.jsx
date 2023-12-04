import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import toast from "react-hot-toast";

const MyAssignment = () => {
    const { user } = useAuth();
    const Axios = useAxios();
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const url = `/submitedata?status=${'complate'}&email=${user.email}`;

    const getassignmentdata = async () => {
        const res = await Axios.get(url);
        return res
    }
    const { isPending, data,refetch } = useQuery({
        queryKey: ['submiteddata', user.email, "complate"],
        queryFn: getassignmentdata,

    })
    if (isPending) {
        return <div className="text-center mt-32">
            <span className="loading text-center text-green-600 text-2xl loading-dots loading-lg"></span>
        </div>
    }

    console.log(data.data)
    const hendledelete = (id) => {

        console.log(id)
        Axios.delete(`/submitedata/${id}`)
        .then(res=>{
            console.log(res.data);
            toast.success('Successfully delete ')
            refetch()
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className=" py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-md space-x-2 p-10 lg:p-0">
                {
                    data?.data?.map((item, idx) =>
                        <div key={item._id} className="border   rounded-xl bg-gradient-to-r from-green-500 to-blue-500 p-6  space-y-4" data-aos="flip-left">
                            <div className="flex justify-center "> <h1 className="text 2xl font-bold text-center bg-yellow-400  rounded-full w-[20px]">{idx + 1}</h1></div>
                            <h1 className="text-2xl font-bold ml-1 ">Title: {item.title}</h1>
                            <h3 className="text-xl font-bold">Total Marks: {item.marks}</h3>
                            <h3 className="text-xl font-bold">Mark:{item.mainmark}</h3>
                            <h5 className="text-lg font-bold"> Student: {item.username}</h5>
                            <h5 className="text-lg font-bold bg-yellow-300 w-1/2 p-2 rounded-md">Status: {item.status}</h5>
                            <p className="text-lg font-bold">Notes:</p>
                            <p className="min-h-[150px] w-[200] text-lg font-bold ">
                                <span className=" font-normal">{item.feedback}</span>
                            </p>
                            <button onClick={() => hendledelete(item._id)} className="btn btn-succe">delete</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyAssignment;