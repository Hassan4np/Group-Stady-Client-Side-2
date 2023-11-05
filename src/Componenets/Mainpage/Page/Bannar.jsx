import p1 from "./../../../assets/images/banner/1.jpg"
import p2 from "./../../../assets/images/banner/2.jpg"
import p3 from "./../../../assets/images/banner/3.jpeg"

const Bannar = () => {
    return (
        <div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full bg-cover ">
                    <img src={p1} className="w-full h-[600px] rounded-lg" />
                    <div className="absolute  p-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full rounded-md ">
                        <div className="top-1/4 ml-10 absolute space-y-5 ">
                        <h1 className="text-6xl font-semibold text-white">Assignment <br /> Marks For Students <br /> Servicing.</h1>
                            <p className="text-base font-normal text-white">The impact of technology on modern society has revolutionized communication, <br /> business, and daily life, creating a global interconnected network.</p>
                            <div className="mt-5">
                                <button className="btn btn-success mr-8">Discover</button>
                                <button className="btn btn-primary">Leats Projects</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end  left-5 right-5 bottom-10 gap-5">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full bg-cover  ">
                    <img src={p2} className="w-full h-[600px] rounded-lg" />
                    <div className="absolute  p-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full rounded-md ">
                        <div className="top-1/4 ml-10 absolute space-y-5 ">
                        <h1 className="text-6xl font-semibold text-white">Assignment <br /> Marks For Students <br /> Servicing.</h1>
                            <p className="text-base font-normal text-white">The impact of technology on modern society has revolutionized communication, <br /> business, and daily life, creating a global interconnected network.</p>
                            <div className="mt-5">
                                <button className="btn btn-success mr-8">Discover</button>
                                <button className="btn btn-primary">Leats Projects</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end  left-5 right-5 bottom-10 gap-5">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full bg-cover  ">
                    <img src={p3} className="w-full h-[600px] rounded-lg" />
                    <div className="absolute  p-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full rounded-md ">
                        <div className="top-1/4 ml-10 absolute space-y-5 ">
                            <h1 className="text-6xl font-semibold text-white">Assignment <br /> Marks For Students <br /> Servicing.</h1>
                            <p className="text-base font-normal text-white">The impact of technology on modern society has revolutionized communication, <br /> business, and daily life, creating a global interconnected network.</p>
                            <div className="mt-5">
                                <button className="btn btn-success mr-8">Discover</button>
                                <button className="btn btn-primary">Leats Projects</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end  left-5 right-5 bottom-10 gap-5">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Bannar;