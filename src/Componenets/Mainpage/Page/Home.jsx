
import Ahoutus from "./Ahoutus";
import Bannar from "./Bannar";
// import ChatComponent from "./Chat/ChatComponent";
import OutTeams from "./OutTeams";
import Contact from "./Contact";

const Home = () => {

    return (
        <div>
            {/* <Navbar1></Navbar1> */}
            <Bannar></Bannar>
            <Ahoutus></Ahoutus>
            <OutTeams></OutTeams>
            <div>
                < h1 className="text-4xl text-center py-10 font-bold">Contact</h1>
                <Contact></Contact>
            </div>

        </div>
    );
};

export default Home;