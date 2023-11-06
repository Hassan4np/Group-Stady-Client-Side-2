import { Link, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";


const DetailsAssignment = () => {
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
    const { title, marks, img, description, level, date, _id } = data.data;

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="relative">
                        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                        <p className="absolute top-0 mt-2 ml-2 bg-green-500 p-2 rounded-md"> Marks:{marks}</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold mb-2"> Name:{title}</h1>
                        <h5 className="text-xl font-bold">Category:{level}</h5>
                        <p className="py-6">{description}</p>
                       <Link to={`/submitfrom/${_id}`}> <button className="btn btn-primary">Take Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsAssignment;