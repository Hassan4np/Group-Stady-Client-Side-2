import { Link } from 'react-router-dom';
import error from './../../../assets/images/about_us/Frame (1).png'
const Error = () => {
    return (
        <div>
            
           
            <div className='flex justify-center items-center mt-10'>
                <img src={error} alt="" />
            </div>
            <div className='text-center'><Link to='/'> <button className='btn font-bold text-center btn-success'>Go Home</button></Link></div>
        </div>
    );
};

export default Error;