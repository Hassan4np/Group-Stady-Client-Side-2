
import { Outlet } from 'react-router-dom';
import Navber from './Page/Navber';
import Footer from './Page/Footer';

const Mainpage = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainpage;