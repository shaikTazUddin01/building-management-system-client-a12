import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin/useAdmin';
import { FaHistory, FaHome, FaHouseUser, FaUserAlt } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { MdApartment, MdManageAccounts, MdOutlineCardGiftcard, MdOutlinePayment, MdRequestQuote } from "react-icons/md";
import loading from '/loading.gif'
const DashBoardLayOut = () => {
    const [role, isPending] = useAdmin()
    console.log(role)
    if (isPending) {
        return <img src={loading} alt="" className="mx-auto mt-28"/>
    }
    return (
        <div className="flex">
            <div className='w-64  bg-blue-700 min-h-screen p-5'>
                <ul className='menu text-white uppercase'>
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
                            <MdOutlineCardGiftcard  className='text-xl'/>
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
                            <MdOutlinePayment  className='text-xl'/>
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
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayOut;