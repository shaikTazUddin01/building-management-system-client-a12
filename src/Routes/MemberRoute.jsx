import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin/useAdmin';

const MemberRoute = ({ children }) => {
    const { user, loader } = useAuth()
    const [role] = useAdmin()
    if (loader) {
        return <p>Loading...</p>
    }
    if (user && role==='member') {
        return children
    }
};

export default MemberRoute;