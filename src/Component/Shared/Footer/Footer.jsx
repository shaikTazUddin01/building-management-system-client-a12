// import logo from '/vite.svg'
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import logo from '/mainlogo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[var(--bg-primary)] text-white flex justify-around items-center">
            <aside className='flex flex-col justify-center items-center'>
                <div className="flex flex-col justify-center items-center">
                    <img src={logo} alt="" className='h-16' />
                    <p className="font-sans text-[#f8f8f8] tracking-[8px] text-sm -mt-1">Thunder</p>
                </div>
                <p className='text-center'>Copyright © 2023 - All right reserved by Taz Ahmed</p>
            </aside>
           
            <nav className='hidden lg:flex md:flex-col'>
                <div>
                    <h1 className="footer-title">Menu</h1>
                </div>
                <div className="flex gap-2">
                    <a className="link link-hover" href='/'>Home</a>
                    <a className="link link-hover" href='/apartment'>Apartment</a>
                    <a className="link link-hover" href='/login'>Sign In</a>
                    <a className="link link-hover" href='/signup'>Sign Up</a>
                </div>
            </nav>
            <nav className="hidden md:flex md:flex-col">
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.facebook.com/tazahmedcse/' className='text-xl'><FaFacebookF></FaFacebookF></a>
                    <a href='https://www.tazahmedsoft@gmail.com' className='text-2xl'><MdOutgoingMail></MdOutgoingMail></a>
                    <a href='https://www.linkedin.com/in/shaik-taz-uddin-1a47682a0' className='text-xl'><FaLinkedin></FaLinkedin></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;