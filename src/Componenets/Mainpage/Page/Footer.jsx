
import logo from "../../../assets/images/logo/assignment.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Footer = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <footer className="footer p-10 bg-gray-400 text-base-content mt-5" data-aos="zoom-out-up">
            <aside>
                <img className="w-10 h-10" src={logo} alt="" />
                <p>Astha online service<br />Providing Assignment</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;