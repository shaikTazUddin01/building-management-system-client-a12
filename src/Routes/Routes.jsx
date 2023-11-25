import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Latout/MainLayout';
import Home from '../Pages/Home/Home';
import Apartment from '../Pages/Apartment/Apartment';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';




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
                element: <Apartment></Apartment>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            }

        ]
    }
])


export default Routes;