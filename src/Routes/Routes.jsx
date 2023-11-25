import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Latout/MainLayout';
import Home from '../Pages/Home/Home';
import Apartment from '../Pages/Apartment/Apartment';




const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'apartment',
                element:<Apartment></Apartment>
            }
            
    ]
    }
])


export default Routes;