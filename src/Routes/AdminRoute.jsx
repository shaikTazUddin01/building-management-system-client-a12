import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loader } = useAuth()
    const [role] = useAdmin()
    if (loader) {
        return <p>Loading...</p>
    }
    if (user && role==='admin') {
        return children
    }
};

export default AdminRoute;