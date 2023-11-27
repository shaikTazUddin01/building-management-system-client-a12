import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Latout/MainLayout';
import Home from '../Pages/Home/Home';
import Apartment from '../Pages/Apartment/Apartment';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import DashBoardLayOut from '../Latout/DashBoardLayOut';
import Myprofile from '../Pages/User/MyProfile/Myprofile';
import Announcements from '../Pages/DashBoard/User/Announcements';
import AdminProfile from '../Pages/DashBoard/Admin/AdminProfile/AdminProfile';
import ManageMembers from '../Pages/DashBoard/Admin/ManageMembers/ManageMenbers'
import MakeAnnouncement from '../Pages/DashBoard/Admin/MakeAnnouncement/MakeAnnouncement'
import AgreementRequests from '../Pages/DashBoard/Admin/AgreementRequests/AgreementRequests'
import ManageCoupons from '../Pages/DashBoard/Admin/ManageCoupons/ManageCoupons'
import MemberProfile from '../Pages/DashBoard/Member/MemberProfile';




const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'apartment',
                element: <Apartment></Apartment>,
                // loader:()=>fetch('')
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayOut></DashBoardLayOut>,
        children: [
            {
                path: '/dashboard/myprofile',
                element: <Myprofile></Myprofile>
            },
            {
                path: '/dashboard/announcements',
                element: <Announcements></Announcements>
            },

            //admin dashboard
            {
                path: '/dashboard/adminprofile',
                element: <AdminProfile></AdminProfile>
            },
           
            {
                path:'/dashboard/manageMembers',
                element:<ManageMembers></ManageMembers>
            },
            {
                path:'/dashboard/makeAnnouncement',
                element:<MakeAnnouncement></MakeAnnouncement>
            },
            {
                path:'/dashboard/agreementRequests',
                element:<AgreementRequests></AgreementRequests>
            },
            {
                path:'/dashboard/manageCoupons',
                element:<ManageCoupons></ManageCoupons>
            },
            //member profile
            {
                path:'/dashboard/memberProfile',
                element:<MemberProfile></MemberProfile>
            }
        ]
    }
])


export default Routes;