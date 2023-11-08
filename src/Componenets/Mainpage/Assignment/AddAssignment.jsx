import 'react-datepicker/dist/react-datepicker.css'
import useAxios from '../../../Hooks/useAxios';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../../../Hooks/useAuth';
import cover from "..//..//../assets/images/about_us/from.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const AddAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth()
    const Axios = useAxios();
    const url = '/assignment'
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    console.log(startDate)

    const hendleaddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const level = form.level.value;
        const img = form.img.value;
        // const date = form.date.value;
        const email = user.email;
        const assignmentdetails = {
            title, description, marks, level, img, date:startDate, email
        }
        Axios.post(url, assignmentdetails)
            .then(res => {
                console.log(res.data.acknowledged)
                if (res.data.acknowledged) {
                    toast.success('Successfully Assignment added')
                }
            })
            .catch(error => {
                console.log(error)
                if (error) {
                    toast.error("This didn't work.")
                }
            })

    }
    return (
        <div className='lg:flex' >
            <div className='flex-1' data-aos="flip-left">
                <div className=' mt-5 hidden lg:block  lg:mt-20 justify-center items-center'>
                    <img className='mb-5' src={cover} alt="" />
                </div>
            </div>
            <form onSubmit={hendleaddProduct} className="p-10 w-full flex-1 lg:w-1/2" data-aos="flip-right">

                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-md p-5">
                    <h1 className="text-center text-2xl font-bold">Add Assignment</h1>
                    <div className="md:flex lg:space-x-4">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl ">Title</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" placeholder="Title" name="title" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl ">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Description" name="description" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex lg:space-x-4">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl ">Marks</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" placeholder="Marks" name="marks" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl ">Thumbnail Url</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Thumbnail" name="img" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex lg:space-x-4">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl ">Assignment Level</span>
                            </label>
                            <select className="select select-bordered w-full" required name="level">
                                <option disabled selected>Select one</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl ">Date</span>
                            </label>
                            <label className="input-group ">
                                <div>
                                    <DatePicker
                                    
                                        className="input input-bordered w-full"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)} 
                                        dateFormat='dd-MM-yyyy'
                                        minDate={new Date()}
                                        />                                     
                                </div>
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Assignment" className="w-full p-3 rounded-lg font-bold text-xl mt-5 text-gradient bg-gradient-to-r from-blue-500 to-green-500" />
                </div>
            </form>
        </div>
    );
};

export default AddAssignment;