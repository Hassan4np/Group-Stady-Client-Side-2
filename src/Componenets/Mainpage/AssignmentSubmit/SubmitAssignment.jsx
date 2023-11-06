import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { Link } from "react-router-dom";


const SubmitAssignment = () => {
    const Axios = useAxios();
    const url = `/submitedata?status=${'pending'}`;

    const getassignmentdata = async () => {
        const res = await Axios.get(url);
        return res
    }
    const { isPending,  data } = useQuery({
        queryKey: ['assignment'],
        queryFn: getassignmentdata,

    })
    if (isPending) {
        return <h1 className="text-2xl text-green-600">Loading...</h1>
    }
console.log(data.data)
    return (
        <div className='min-h-[350px]'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                  
                            <th>Title</th>
                            <th>Total Mark</th>
                            <th>Student Name</th>
                            <th>Status</th>
                            <th>Give marks</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        data.data.map((infodata)=> <tr key={infodata._id} className="bg-base-200">
                        <td>{infodata.title}</td>
                        <td>{infodata.marks}</td>
                        <td>{infodata.username}</td>
                        <td>{infodata.status}</td>
                       <Link to={`/submitmarks/${infodata._id}`}> <button className="btn btn-sm bg-green-500">Give Marks</button></Link>
                    </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubmitAssignment;