import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


const SubmitFrom = () => {
    const { id } = useParams();
    console.log(id)
    const { user } = useAuth();
    console.log(id)
    const Axios = useAxios()
    const url = `/assignment/${id}`;

    const getassignmentdata = async () => {
        const res = await Axios.get(url);
        return res
    }
    const { isPending, error, data } = useQuery({
        queryKey: ['assignment'],
        queryFn: getassignmentdata,

    })
    if (isPending) {
        return <h1 className="text-5xl text-green-500">Loading...</h1>
    }
    const { title, marks, img, description, level,date } = data.data;
    const submitfrom = (event) => {
        event.preventDefault();
        const form = event.target;
        const pdf = form.pdf.value;
        const text = form.text.value;
        // console.log(pdf,text)
        const useremail = user.email;
        const username = user.displayName;
        const submitdata = {title,marks,useremail,username,pdf,text,img,description,level,date,status:"pending"}
        console.log(submitdata)
        const urls = '/submitedata'
        Axios.post(urls,submitdata)
        .then(res=>{
            console.log(res.data)
            if(res.data.acknowledged){
                toast.success('Successfully toasted!')
            }
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="min-h-[350px]">
            <form onSubmit={submitfrom} className="p-10">
                <div className="bg-[#F4F3F0] p-5">
                    <h1 className="text-center text-2xl font-bold">SubmitFrom</h1>
                    <div className="md:flex space-x-10 space-y-5">
                        <div className="form-control md:w-full ">
                            <label className="label">
                                <span className="label-text">PDF link</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" placeholder="PDF" name="pdf" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text">Test Area</span>
                        </label>
                        <label className="input-group">
                            <textarea className="textarea border text-xl textarea-primary h-32 w-full" name="text" placeholder="Write now"></textarea>
                        </label>
                    </div>

                    <input type="submit" value="Submit" className="w-full mt-5 btn btn-success" />
                </div>
            </form>

        </div>
    );
};

export default SubmitFrom;