import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import useAxios from '../../../Hooks/useAxios';


const AddAssignment = () => {
const Axios = useAxios();
const url = '/assignment'

    const hendleaddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const level = form.level.value;
        const img = form.img.value;
        const thumbnail = form.thumbnail.value;
        const date = form.date.value;
        const assignmentdetails = {
            title, description, marks, level, img, thumbnail, date
        }
        console.log(assignmentdetails)
        Axios.post(url,assignmentdetails)
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error)
        })

    }
    return (
        <form onSubmit={hendleaddProduct} className="p-10">
            <div className="bg-[#F4F3F0] p-5">
                <h1 className="text-center text-2xl font-bold">Add Assignment</h1>
                <div className="md:flex space-x-4">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">title</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" placeholder="Title" name="title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Description" name="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex space-x-4">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" placeholder="Marks" name="marks" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Thumbnail</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Thumbnail" name="thumbnail" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex space-x-4">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Assignment Level</span>
                        </label>
                        <select className="select select-bordered w-full" name="level">
                            <option disabled selected>Select one</option>
                            <option>Esey</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <label className="input-group">
                            <input type="date" placeholder="Date" name="date" className="input input-bordered w-full" />
                            {/* <DatePicker className='' formatDate="dd/mm/yyyy" ></DatePicker> */}
                        </label>
                    </div>
                </div>
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Photo url" name="img" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Add Product" className="w-full mt-5 btn btn-success" />
            </div>
        </form>
    );
};

export default AddAssignment;