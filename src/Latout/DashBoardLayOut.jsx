
import { NavLink, Outlet } from 'react-router-dom';

const DashBoardLayOut = () => {
    const isAdmin = true
    return (
        <div className="flex">
            <div className='w-64 bg-blue-900 min-h-screen p-5'>
                <ul className='menu text-white uppercase'>
                    {
                        !isAdmin ?
                            <>
                                <li><NavLink to={'/dashboard/myprofile'}>
                                    My Profile</NavLink></li>
                                <li><NavLink to={'/dashboard/announcements'}>
                                    Announcements</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to={'/dashboard/adminprofile'}>
                                    Admin Profile</NavLink></li>
                                <li><NavLink to={'/dashboard/manageMembers'}>
                                    Manage Members</NavLink></li>
                                <li><NavLink to={'/dashboard/makeAnnouncement'}>
                                    Make Announcement</NavLink></li>
                                <li><NavLink to={'/dashboard/agreementRequests'}>
                                    Agreement Requests</NavLink></li>
                                <li><NavLink to={'/dashboard/manageCoupons'}>
                                    Manage Coupons</NavLink></li>
                            </>

                    }
                    {/* shared menu item */}
                    <div className="divider bg-white h-[2px] rounded-xl"></div>
                    <li><NavLink to={'/'}>

                        Home</NavLink></li>
                    <li><NavLink to={'/apartment'}>
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