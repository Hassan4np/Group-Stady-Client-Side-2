
import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineEdit } from 'react-icons/ai';
import useAuth from '../../../Hooks/useAuth';
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Assignment = () => {
   
    const { user } = useAuth();
    const Axios = useAxios();
    const [level, setlevel] = useState('')
    const [page, setpage] = useState(0);
//Animation ------>
useEffect(()=>{
    AOS.init({duration:2000});
},[])

    const url = `/assignment?level=${level}&page=${page}`;
    console.log(level)

    const getassignmentdata = async () => {
        const res = await Axios.get(url);
        return res
    }
    const { isPending, refetch, data } = useQuery({
        queryKey: ['assignment', page, level],
        queryFn: getassignmentdata,

    })

    if (isPending) {
        return <div className="text-center mt-32">
                 <span className="loading text-center text-green-600 text-2xl loading-dots loading-lg"></span>
              </div>
    }
    // refetch();
    
    const count = data.data.count;

    const allpages = Math.ceil(count / 9);
    console.log(allpages)
    const pages = [... new Array(allpages).fill(0)]
    console.log(pages)
    console.log(count)
    console.log(page)
    const hengledelete = (id) => {
        console.log(id)
        Axios.delete(`/assginment?email=${user?.email}&id=${id}`)
            .then(res => {
                console.log(res.data)
                toast.success('Successfully toasted!')
                refetch()
            })
            .catch(error => {
                console.log(error)
                if (error) {
                    toast.error("This didn't work.")
                }
            })
    }
    const hendleprebutton = () => {
        if (page > 0) {
            setpage(page - 1)
        }
    }
    const hendlenextbutton = () => {
        if (page < pages.length - 1) {
            setpage(page + 1)
        }
    }
    const b = data.data.result;
    console.log(b)
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
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 " >
                    {
                        data?.data?.result?.map((item, idx) =>
                            <div key={idx} className="card  border bg-base-100 shadow-xl lg:px-5"  data-aos="flip-left">
                                <div className="relative">
                                    <figure className="px-10 pt-10 w-full h-[220px] bg-cover"> 
                                        <img src={item.img} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <p className="text-green-600 text-lg absolute ml-28 md:ml-0 mr-5">{item?.date?.length>10 ?item?.date.slice(0,10):item.date}</p>

                                </div>
                                <div className="card-body px-28 lg:px-1 ">
                                    <div className="flex justify-between">
                                        <h2 className="card-title text-xl lg:text-2xl text-green-500 font-bold">Name:<span className=" text-base lg:text-lg font-bold text-gray-700" >{item.title}</span></h2>
                                        <h5 className="card-title text-base lg:text-lg font-bold text-blue-500 ">Category:<span className=" text-sm lg:text-base text-black font-medium">{item.level}</span></h5>
                                    </div>
                                    <h5 className="text-xl font-bold ">Mark: {item.marks}</h5>
                                    {/* <p>{item.description}</p> */}
                                    <div className="text-gray-500 text-base font-medium">
                                        {
                                            item?.description?.length > 100 ? <p>{item?.description.slice(0, 100)}</p> : <p>{item?.description}</p>
                                        }
                                    </div>
                                    
                                    <div className="flex items-center justify-around">

                                        <div className=" btn-group-horizontal text-center">
                                            <Link to={`/updateassignment/${item?._id}`}><button className="btn bg-green-500  mr-5"><AiOutlineEdit></AiOutlineEdit></button></Link>
                                            <Link to={`/viewassignment/${item?._id}`}><button className="btn mr-5 bg- bg-yellow-400">View</button></Link>
                                            <button className="btn bg-red-700" onClick={() => hengledelete(item?._id)}>X</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="text-center mt-5">
                    <button className='p-2 px-5 rounded-md bg-green-500 mr-5' onClick={hendleprebutton}>Pre</button>
                    {
                        pages.map((item, idx) => <button className={`p-2 px-5 ${page === idx ? 'bg-yellow-400 text-white' : ''} rounded-md  bg-green-500 mr-5 `} key={idx} onClick={() => setpage(idx)}>{idx}</button>)
                    }
                    <button className='p-2 px-5 rounded-md bg-green-500 mr-5' onClick={hendlenextbutton}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Assignment;