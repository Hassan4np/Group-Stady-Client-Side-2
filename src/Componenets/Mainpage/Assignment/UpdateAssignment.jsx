
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import cover from "..//..//../assets/images/about_us/from.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const UpdateAssignment = () => {
    const { id } = useParams();
    const {user} = useAuth();
    const navegte = useNavigate();
    const Axios = useAxios()
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    const url = `/assignment/${id}`;

    const getassignmentdata = async () => {
        const res = await Axios.get(url);
        return res
    }
    const { isPending,  data } = useQuery({
        queryKey: ['assignment',id],
        queryFn: getassignmentdata,

    })
    if (isPending) {
        return <div className="text-center mt-32">
        <span className="loading text-center text-green-600 text-2xl loading-dots loading-lg"></span>
     </div>
    }
    const { title, marks, img, description, level, date} = data.data;

    console.log(title)
    const hendleudateassignment = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const level = form.level.value;
        const img = form.img.value;
        const date = form.date.value;
        const email = user.email;
        const assignmentupdate = {
            title, description, marks, level, img, date, email
        }
        console.log(assignmentupdate)
        Axios.put(url,assignmentupdate)
        .then(res => {
            console.log(res.data.acknowledged)
            if (res.data.acknowledged) {
                toast.success('Successfully Update')
                navegte('/assignment')            
            }
        })
        .catch(error => {
            console.log(error)
            if(error){
                toast.error("This didn't work.")
            }
        })

    }
    return (
        <div className="lg:flex">
            <form onSubmit={hendleudateassignment} className="p-10 w-full lg:w-1/2 flex-1" data-aos="flip-left">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-md p-5">
                <h1 className="text-center text-2xl font-bold">Update Assignment</h1>
                <div className="md:flex lg:space-x-4">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-xl lg:text-2xl">Title</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" placeholder="Title" required defaultValue={title} name="title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-xl lg:text-2xl">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Description" required defaultValue={description} name="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex lg:space-x-4">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text  text-xl lg:text-2xl">Marks</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" placeholder="Marks" required defaultValue={marks} name="marks" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-xl lg:text-2xl">Thumbnail Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Thumbnail" required defaultValue={img} name="img" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex lg:space-x-4">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-xl lg:text-2xl">Assignment Level</span>
                        </label>
                        <select className="select select-bordered w-full" required defaultValue={level} name="level">
                            <option disabled selected>Select one</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl lg:text-2xl">Date</span>
                        </label>
                        <label className="input-group">
                            <input type="date" placeholder="Date" required defaultValue={date} name="date" className="input input-bordered w-full" />
                            {/* <DatePicker className='' formatDate="dd/mm/yyyy" ></DatePicker> */}
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Assignment" className="w-full mt-5 p-3 rounded-lg font-bold text-xl text-gradient bg-gradient-to-r from-green-500 to-blue-500" />
            </div>
        </form>
        <div className='flex-1' data-aos="flip-right">
                <div className=' mt-5 hidden lg:block  lg:mt-20 justify-center items-center'>
                    <img className='mb-5' src={cover} alt="" />
                </div>
            </div>
        </div>
    );
};

export default UpdateAssignment;