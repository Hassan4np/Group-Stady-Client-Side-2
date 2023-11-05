
import Ahoutus from "./Ahoutus";
import Bannar from "./Bannar";

import OutTeams from "./OutTeams";



const Home = () => {
//    const  {loading} = useAuth();
//    console.log(loading)
//     const { isPending, error, data } = useQuaryhook();
//     // const { isPending, error, data } = useQuery({
//     //     queryKey: ['sercive'],
//     //     queryFn: () =>
//     //       fetch('http://localhost:5001/service')
//     //       .then((res) => res.json(),
//     //       ),
//     //   })
//       if(isPending) return <h1 className="text-5xl text-green-600">Loading...</h1>
//     console.log(data)
    return (
        <div>
            {/* <Navbar1></Navbar1> */}
            <Bannar></Bannar>
            <Ahoutus></Ahoutus>
            <OutTeams></OutTeams>
        </div>
    );
};

export default Home;