
import { useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineEdit } from 'react-icons/ai';
import useAuth from '../../../Hooks/useAuth';
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const Assignment = () => {
    const { user } = useAuth();
    const Axios = useAxios();
    const [level, setlevel] = useState('')
    const url = `/assignment?level=${level}`;
    console.log(level)
    const getassignmentdata = async () => {
        const res = await Axios.get(url);
        return res
    }
    const { isPending, error, refetch, data } = useQuery({
        queryKey: ['assignment'],
        queryFn: getassignmentdata,

    })
    if (isPending) {
        return <h1 className="text-2xl text-green-600">Loading...</h1>
    }
    const hengledelete = (id) => {
        console.log(id)
        Axios.delete(`/assginment?email=${user?.email}&id=${id}`)
        .then(res=>{
            console.log(res.data)
            
            refetch()
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="min-h-[350px]">
            <div>
                <div className="flex justify-between h-24 border rounded-md px-10 mt-10">
                    <div className="mt-10">
                        <h5 className="text-xl font-bold ">This is all project for student</h5>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-base font-medium mb-1">Category:</h3>
                        <select className="select select-bordered w-full max-w-xs text-base font-medium" onClick={(e) => setlevel(e.target.value)}>
                            <option disabled selected>Select one</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" >
                    {
                        data?.data?.map((item, idx) =>
                            <div key={idx} className="card  border bg-base-100 shadow-xl ">
                                <div className="relative">
                                    <figure className="px-10 pt-10 w-full h-[220px] bg-cover">
                                        <img src={item.img} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <p className=" absolute top-0 p-2  font-bold right-0 bg-green-500 rounded-lg mr-2 text-lg mt-2">Marks:{item.marks}</p>
                                </div>
                                <div className="card-body ">
                                    <div className="flex justify-between">
                                        <h2 className="card-title text-2xl font-bold text-gray-500">Name:<span className="text-lg font-bold">{item.title}</span></h2>
                                        <h5 className="card-title text-md font-bold text-gray-500">Category:<span className="text-base font-medium">{item.level}</span></h5>
                                    </div>
                                    {/* <p>{item.description}</p> */}
                                    <div className="text-gray-500 text-base font-medium">
                                        {
                                            item?.description?.length > 100 ? <p>{item?.description.slice(0, 100)}</p> : <p>{item?.description}</p>
                                        }
                                    </div>
                                    <div className="flex items-center justify-around">

                                        <div className="btn-group btn-group-vertical lg:btn-group-horizontal text-center">
                                          <Link to={`/updateassignment/${item?._id}`}>  <button className="btn bg-green-500  mr-5"><AiOutlineEdit></AiOutlineEdit></button></Link>
                                            <Link to={`/viewassignment/${item?._id}`}><button className="btn mr-5 bg- bg-yellow-400">View</button></Link>
                                            <button className="btn bg-red-700" onClick={() => hengledelete(item?._id)}>X</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Assignment;