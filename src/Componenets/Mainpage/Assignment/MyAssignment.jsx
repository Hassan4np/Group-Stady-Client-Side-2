import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";

const MyAssignment = () => {
    const {user} = useAuth();
    const Axios = useAxios();
    const url = `/submitedata?status=${'complate'}&email=${user.email}`;

    const getassignmentdata = async () => {
        const res = await Axios.get(url);
        return res
    }
    const { isPending,refetch,  data } = useQuery({
        queryKey: ['submiteddata',user.email,"pending"],
        queryFn: getassignmentdata,

    })
    refetch()
    if (isPending) {
        return <h1 className="text-2xl text-green-600">Loading...</h1>
    }
    
console.log(data.data)
    return (
        <div>
            <div className='min-h-[350px]'>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="text-xl">
                        <tr>                
                            <th>Title</th>
                            <th>Total Mark</th>
                            <th>Student Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="mt-5 text-base text-gray-600 font-bold">
                       {
                        data.data.map((infodata)=> <tr key={infodata._id} className="bg-base-200">
                        <td>{infodata?.title}</td>
                        <td>{infodata?.mainmark}</td>
                        <td>{infodata?.username}</td>
                        <td>{infodata?.status}</td>
                    </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyAssignment;