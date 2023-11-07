import { useParams } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


const Submitmarks = () => {
    const Axios = useAxios();
    const { id } = useParams();
    console.log(id)
    const url = `/submitedata/${id}`;
    const getassignmentdata = async () => {
        const res = await Axios.get(url);
        return res
    }
    const { isPending, data } = useQuery({
        queryKey: ['assignment',id],
        queryFn: getassignmentdata,

    })
    if (isPending) {
        return <h1 className="text-2xl text-green-600">Loading...</h1>
    }
    console.log(data.data)
    const {pdf,text,status} = data.data;
    console.log(status,text,pdf)
    const submitfrom = (event) => {
        event.preventDefault();
        const form = event.target;
        const mainmark = form.mark.value;
        const notes = form.text.value;
        console.log(mainmark,notes)
        const sbmitdata = {pdf,text,status:"complate",mainmark,notes}
        Axios.put(url,sbmitdata)
        .then(res=>{
            console.log(res.data)
            if(res.data.acknowledged){
                toast.success('Successfully toasted!')
            }
        })
        .catch(error=>{
            console.log(error)
            if(error){
                toast.error("This didn't work.")
            }
        })
    }
    return (
        <div className="min-h-[350px]"> 
            <div className="px-10">
                <h1 className="text-xl mb-5 p-5 mt-5 ">Link: {pdf}</h1>
               <div>
                <p>Note: </p>
               <p className=" text-lg border rounded-md w-full h-[100px] p-1">{text} </p>
               </div>
            </div>
            <form onSubmit={submitfrom} className="p-10">
                <div className="bg-[#F4F3F0] p-5">
                    <h1 className="text-center text-2xl font-bold">Final From</h1>
                    <div className="md:flex space-x-10 space-y-5">
                        <div className="form-control md:w-full ">
                            <label className="label">
                                <span className="label-text">Mark</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" placeholder="Marks" name="mark" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text">Write some a</span>
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

export default Submitmarks;