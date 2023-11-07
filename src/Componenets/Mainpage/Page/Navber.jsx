import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../assets/images/logo/assignment.jpg"
import "./Navbar.css"
const Navber = () => {
    const { user, UserLogout } = useAuth();
    const hendlelogout = () => {
        UserLogout()
            .then(() => { })
            .catch((error) => {
                console.log(error)
            })
    }
    const Links = <div className="text-start">
        <NavLink className="mr-3 btn btn-sm" to="/"><li>Home</li></NavLink>
        <NavLink className="mr-3 btn btn-sm" to="/assignment"><li>Assignment</li></NavLink>
        {
            user && <NavLink className="mr-3 btn btn-sm" to={`/addassignment`}><li>Add Assignment</li></NavLink>
        }
        <NavLink className="mr-3 btn btn-sm" to="/submit"><li>Submitted</li></NavLink>
        <NavLink className="mr-3 btn btn-sm" to="/myassignment"><li>My Assignment</li></NavLink>


    </div>
    return (
        <nav>
            <div className="navbar bg-gray-300 h-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    <div>
                        <div className="w-10 md:ml-5">
                            <img src={logo} alt="" />
                        </div>
                        {
                            user && <p className="md:ml-5 text-2 font-bold text-gray-500">{user?.displayName}</p>
                        }
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.photoURL &&
                        <div className="avatar online">
                            <div className="w-10 rounded-full mr-3">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    }
                    {
                        user ? <button onClick={hendlelogout} className="mr-3 btn btn-sm">Log out</button> : <NavLink className="mr-3 btn btn-sm" to="/login">Login</NavLink>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navber;