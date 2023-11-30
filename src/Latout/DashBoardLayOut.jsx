import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin/useAdmin';
import { FaHistory, FaHome, FaHouseUser, FaUserAlt } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { MdApartment, MdManageAccounts, MdOutlineCardGiftcard, MdOutlinePayment, MdRequestQuote } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import loading from '/loading.gif'
import logo from '/mainlogo.png'

const DashBoardLayOut = () => {
    const [role, isPending] = useAdmin()
    console.log(role)
    if (isPending) {
        return <img src={loading} alt="" className="mx-auto mt-28" />
    }
    return (
        <div className="flex">
            
            <div className='lg:w-64  lg:bg-blue-700 lg:min-h-screen lg:p-5'>

            <div className='hidden md:flex flex-col justify-center items-center'>
                <img src={logo} alt="" className='w-[80%]'/>
                <p className='text-[#f8f8f8] tracking-[8px] text-sm font-bold -mt-1'>Thunder</p>
            </div>
                <div className='hidden lg:flex'>
                    <ul className='menu text-white uppercase '>
                        {/* user menu */}
                        {
                            role === 'user' &&
                            <>
                                <li><Link to={'/dashboard/userProfile'}>
                                    <FaUserAlt className='text-xl'></FaUserAlt>
                                    My Profile</Link></li>
                                <li><Link to={'/dashboard/announcements'}>
                                    <GrAnnounce className='text-xl'></GrAnnounce>
                                    Announcements</Link></li>
                            </>
                        }
                        {/* admin menu */}
                        {
                            role === 'admin' &&
                            <>
                                <li><NavLink to={'/dashboard/adminprofile'}>
                                    <FaUserAlt className='text-xl'></FaUserAlt>
                                    Admin Profile</NavLink></li>
                                <li><NavLink to={'/dashboard/manageMembers'}>
                                    <MdManageAccounts className='text-2xl' />
                                    Manage Members</NavLink></li>
                                <li><NavLink to={'/dashboard/makeAnnouncement'}>
                                    <GrAnnounce className='text-xl'></GrAnnounce>
                                    Make Announcement</NavLink></li>
                                <li><NavLink to={'/dashboard/agreementRequests'}>
                                    <MdRequestQuote className='text-xl'></MdRequestQuote>
                                    Agreement Requests</NavLink></li>
                                <li><NavLink to={'/dashboard/manageCoupons'}>
                                    <MdOutlineCardGiftcard className='text-xl' />
                                    Manage Coupons</NavLink></li>
                            </>
                        }
                        {/* member menu */}
                        {
                            role === 'member' &&
                            <>
                                <li><NavLink to={'/dashboard/memberProfile'}>
                                    <FaUserAlt className='text-xl'></FaUserAlt>
                                    My Profile</NavLink></li>
                                <li><NavLink to={'/dashboard/makePayment'}>
                                    <MdOutlinePayment className='text-xl' />
                                    Make payment</NavLink></li>
                                <li><NavLink to={'/dashboard/paymentHistory'}>
                                    <FaHistory className='text-xl'></FaHistory>
                                    Payment History</NavLink></li>
                                <li><NavLink to={'/dashboard/announcements'}>
                                    <GrAnnounce className='text-xl'></GrAnnounce>
                                    Announcements</NavLink></li>
                            </>

                        }
                        {/* shared menu item */}
                        <div className="divider bg-white h-[2px] rounded-xl"></div>
                        <li><NavLink to={'/'}>
                            <FaHome className='text-xl'></FaHome>
                            Home</NavLink></li>
                        <li><NavLink to={'/apartment'}>
                            <MdApartment className='text-xl'></MdApartment>
                            Apartment</NavLink></li>
                    </ul>
                </div>

                {/* ------dware---------- */}
                <div className='lg:hidden'>
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle  " />
                        <div className="drawer-content absolute mt-1 ml-1">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className=" drawer-button text-2xl font-semibold btn">
                                <IoMdMenu></IoMdMenu>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-48 md:w-80 min-h-full bg-white text-base-content z-10">
                                {
                                    role === 'user' &&
                                    <>
                                        <li><Link to={'/dashboard/userProfile'}>
                                            <FaUserAlt className='text-xl'></FaUserAlt>
                                            My Profile</Link></li>
                                        <li><Link to={'/dashboard/announcements'}>
                                            <GrAnnounce className='text-xl'></GrAnnounce>
                                            Announcements</Link></li>
                                    </>
                                }
                                {/* admin menu */}
                                {
                                    role === 'admin' &&
                                    <>
                                        <li><NavLink to={'/dashboard/adminprofile'}>
                                            <FaUserAlt className='text-xl'></FaUserAlt>
                                            Admin Profile</NavLink></li>
                                        <li><NavLink to={'/dashboard/manageMembers'}>
                                            <MdManageAccounts className='text-2xl' />
                                            Manage Members</NavLink></li>
                                        <li><NavLink to={'/dashboard/makeAnnouncement'}>
                                            <GrAnnounce className='text-xl'></GrAnnounce>
                                            Make Announcement</NavLink></li>
                                        <li><NavLink to={'/dashboard/agreementRequests'}>
                                            <MdRequestQuote className='text-xl'></MdRequestQuote>
                                            Agreement Requests</NavLink></li>
                                        <li><NavLink to={'/dashboard/manageCoupons'}>
                                            <MdOutlineCardGiftcard className='text-xl' />
                                            Manage Coupons</NavLink></li>
                                    </>
                                }
                                {/* member menu */}
                                {
                                    role === 'member' &&
                                    <>
                                        <li><NavLink to={'/dashboard/memberProfile'}>
                                            <FaUserAlt className='text-xl'></FaUserAlt>
                                            My Profile</NavLink></li>
                                        <li><NavLink to={'/dashboard/makePayment'}>
                                            <MdOutlinePayment className='text-xl' />
                                            Make payment</NavLink></li>
                                        <li><NavLink to={'/dashboard/paymentHistory'}>
                                            <FaHistory className='text-xl'></FaHistory>
                                            Payment History</NavLink></li>
                                        <li><NavLink to={'/dashboard/announcements'}>
                                            <GrAnnounce className='text-xl'></GrAnnounce>
                                            Announcements</NavLink></li>
                                    </>

                                }
                                {/* shared menu item */}
                                <div className="divider bg-white h-[2px] rounded-xl"></div>
                                <li><NavLink to={'/'}>
                                    <FaHome className='text-xl'></FaHome>
                                    Home</NavLink></li>
                                <li><NavLink to={'/apartment'}>
                                    <MdApartment className='text-xl'></MdApartment>
                                    Apartment</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>









            </div>





            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayOut;