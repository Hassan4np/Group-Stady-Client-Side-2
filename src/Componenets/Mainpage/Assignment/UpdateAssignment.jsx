
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";


const UpdateAssignment = () => {
    const { id } = useParams();
    const {user} = useAuth();
    const navegte = useNavigate();
    const Axios = useAxios()
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
        return <h1 className="text-5xl text-green-500">Loading...</h1>
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
        <form onSubmit={hendleudateassignment} className="p-10">
            <div className="bg-[#F4F3F0] p-5">
                <h1 className="text-center text-2xl font-bold">Update Assignment</h1>
                <div className="md:flex space-x-4">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">title</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" placeholder="Title" defaultValue={title} name="title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Description" defaultValue={description} name="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex space-x-4">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" placeholder="Marks" defaultValue={marks} name="marks" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Thumbnail Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Thumbnail" defaultValue={img} name="img" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex space-x-4">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Assignment Level</span>
                        </label>
                        <select className="select select-bordered w-full" defaultValue={level} name="level">
                            <option disabled selected>Select one</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <label className="input-group">
                            <input type="date" placeholder="Date" defaultValue={date} name="date" className="input input-bordered w-full" />
                            {/* <DatePicker className='' formatDate="dd/mm/yyyy" ></DatePicker> */}
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Assignment" className="w-full mt-5 btn btn-success" />
            </div>
        </form>
    );
};

export default UpdateAssignment;