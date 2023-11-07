import { Link, useParams } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";


const DetailsAssignment = () => {
    const { id } = useParams();
    const Axios = useAxios()
    const url = `/assignment/${id}`;

    const getassignmentdata = async () => {
        const res = await Axios.get(url);
        return res
    }
    const { isPending, data } = useQuery({
        queryKey: ['assignment', id],
        queryFn: getassignmentdata,

    })
    if (isPending) {
        return <h1 className="text-5xl text-green-500">Loading...</h1>
    }
    const { title, marks, img, description, level, _id } = data.data;

    return (
        <div>
            <div className=" min-h-[350px] bg-base-200 border-2 py-10 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="relative">
                        <div >
                            <img src={img} className="max-w-sm  rounded-lg shadow-2xl" />
                            <p className="absolute top-0 mt-2 ml-2 bg-green-500 p-2 rounded-md"> Marks:{marks}</p>
                        </div>
                    </div>
                    <div className="mt-14 ml-24 lg:mt-0 lg:ml-5">
                        <h1 className=" text-2xl lg:text-3xl font-bold mb-2"> Name: <span className="text-xl lg:text-2xl text-gray-600">{title}</span></h1>
                        <h5 className=" text-lg lg:text-xl font-bold">Category:<span className="lg:text-xl text-lg text-gray-600" >{level}</span></h5>
                        <p className="py-6">{description}</p>
                        <Link to={`/submitfrom/${_id}`}> <button className="btn  text-gradient bg-gradient-to-r from-blue-500 to-green-500 ">Take Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsAssignment;