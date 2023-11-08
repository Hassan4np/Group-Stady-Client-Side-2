
import p1 from './../../../assets/images/team/1.jpeg'
import p2 from './../../../assets/images/team/2.jpeg'
import p3 from './../../../assets/images/team/3.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const OutTeams = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <div  data-aos="zoom-out-left">
            <div className='text-center space-y-2'>
                <h5 className='text-lg font-bold text-[#FF3811]'>Teacher</h5>
                <h1 className='text-5xl font-bold text-black'>Our Teacher</h1>
                <p className='text-base text-[#737373]'>I wanted to take a moment to express my gratitude for your dedication and passion for teaching. <br /> Your unwavering commitment to our education has not gone unnoticed. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#444]">Jarin Khan</h2>
                        <p className='text-[#444]'>CRO our Schook</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#444]">Tammna khatun</h2>
                        <p className='text-[#444]'>Manager our School</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#444]">Moly Khatun</h2>
                        <p className='text-[#444]'>Teacher our School</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OutTeams;