import logo from '/vite.svg'
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-[var(--bg-primary)] text-white ">
        <aside className='flex flex-col justify-center items-center'>
            <img src={logo} alt="" className='h-14' />
            <p className='text-center'>Copyright © 2023 - All right reserved by Taz Ahmed</p>
        </aside>
        {/* <nav className='hidden md:flex md:flex-col'>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </nav> */}
        <nav className='hidden md:flex md:flex-col'>
            <header className="footer-title">Menu</header>
            <a className="link link-hover" href='/'>Home</a>
            <a className="link link-hover" href='/apartment'>Apartment</a>
            <a className="link link-hover" href='/login'>Sign In</a>
            <a className="link link-hover" href='/signup'>Sign Up</a>
        </nav>
        <nav>
    <header className="footer-title">Social</header> 
    <div className="grid grid-flow-col gap-4">
      <a href='' className='text-xl'><FaFacebookF></FaFacebookF></a>
      <a href='' className='text-xl'><MdOutgoingMail></MdOutgoingMail></a>
      <a href='' className='text-xl'><FaLinkedin></FaLinkedin></a>
    </div>
  </nav>
    </footer>
    );
};

export default Footer;