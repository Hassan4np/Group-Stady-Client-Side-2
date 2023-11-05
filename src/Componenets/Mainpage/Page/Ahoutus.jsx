
import about from './../../../assets/images/about_us/person.jpg'
import subadount from './../../../assets/images/about_us/parts.jpg'
const Ahoutus = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row p-5">
                <div className='flex-1 p-5 relative'>
                    <img src={about} className=" w-[460px] h-[473px] rounded-lg shadow-2xl flex-1" />
                    <img className='max-w-sm absolute right-0 top-1/2 mr-8 border-8 border-white rounded-md' src={subadount} alt="" />
                </div>
                <div className='flex-1'>
                    <h1 className='text-base text-[#FF3811] font-semibold'>About Us</h1>
                    <h1 className="text-5xl font-bold text-black">We are qualified & of experience in this field</h1>
                    <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. </p>
                    <p className='text-base text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white mt-5">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Ahoutus;