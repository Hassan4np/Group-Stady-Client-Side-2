import React from 'react';
import p1 from './../../../assets/images/team/1.jpg'
import p2 from './../../../assets/images/team/2.jpg'
import p3 from './../../../assets/images/team/3.jpg'
const OutTeams = () => {
    return (
        <div>
            <div className='text-center space-y-2'>
                <h5 className='text-lg font-bold text-[#FF3811]'>Team</h5>
                <h1 className='text-5xl font-bold text-black'>Meet Our Teams</h1>
                <p className='text-base text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#444]">Car Engine Plug</h2>
                        <p className='text-[#444]'>Engine Expert</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#444]">Car Engine Plug</h2>
                        <p className='text-[#444]'>Engine Expert</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#444]">Car Engine Plug</h2>
                        <p className='text-[#444]'>Engine Expert</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OutTeams;