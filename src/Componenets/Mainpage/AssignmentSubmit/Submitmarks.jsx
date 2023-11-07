import { useParams } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


const Submitmarks = () => {
    const Axios = useAxios();
    const { id } = useParams();
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
                toast.success('Give Marks Successfully ')
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
        <div className="min-h-[350px] lg:flex "> 
            <div className="px-10 flex-1 ">
                <h1 className="text-xl mb-5 p-3 mt-5 font-bold "> PDF Link : {pdf}</h1>
               <div>
                <p className="text-xl font-bold p-3 ">Note: </p>
               <p className=" text-lg border font-bold rounded-md w-full min-h-[100px] lg:min-h-[275px] p-3">{text} </p>
               </div>
            </div>
            <form onSubmit={submitfrom} className="p-10 flex-1">
                <div className="bg-[#F4F3F0] p-5">
                    <div className="md:flex space-x-10 space-y-5">
                        <div className="form-control md:w-full ">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Give Marks..</span>
                            </label>
                            {/* <label className=" ">
                                <input type="text" placeholder="Marks" name="mark" className="input input-bordered md:w-full" />
                            </label> */}
                            <input type="text" className=" p-3 border text-base rounded-md w-full lg:w-full" name="mark"  placeholder="Marks Now" />
                        </div>
                    </div>
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Write Some Text:-</span>
                        </label>
                        <label className="input-group">
                            <textarea className="textarea border text-xl textarea-primary h-32 w-full" name="text" placeholder="Write now"></textarea>
                        </label>
                    </div>

                    <input type="submit" value="Submit" className="w-full p-3 rounded-lg font-bold text-xl mt-5 text-gradient bg-gradient-to-r from-blue-500 to-green-500" />
                </div>
            </form>
        </div>
    );
};

export default Submitmarks;