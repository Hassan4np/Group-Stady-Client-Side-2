
import about from './../../../assets/images/about_us/man3.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Ahoutus = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row p-5" data-aos="zoom-out-up">
                <div className='flex-1 p-5 '>
                    <img src={about} className=" w-[460px] h-[473px] object-cover rounded-lg shadow-2xl flex-1" />
                    {/* <img className='max-w-sm absolute right-0 top-[70%]  lg:top-2/3 mr-8 border-8 border-white rounded-md' src={subadount} alt="" /> */}
                </div>
                <div className='flex-1 mt-10 lg:mt-1'>
                    <h1 className='text-base text-[#FF3811] font-semibold'>About Us</h1>
                    <h1 className="lg:text-5xl text-3xl font-bold text-black">We look at assignments carefully. Marks obtained by them are given</h1>
                    <p className="py-6  text-[#737373]">Write a reflective essay on a significant life event, emphasizing personal growth and lessons learned. Focus on the challenges faced, strategies employed, and the transformative impact it had. Marks will be awarded based on content, coherence, and depth of reflection. </p>
                    <p className='text-base text-[#737373]'> Design a sustainable living project outlining practical steps to reduce carbon footprint in daily life. </p>
                    <button className="btn bg-[#FF3811] text-white mt-5">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Ahoutus;