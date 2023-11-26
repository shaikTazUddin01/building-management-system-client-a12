import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {

    const { user, loader } = useAuth()


    if (loader) {
        return <p>loading...</p>
    }
    if (user) {
        return children
    }
    
};

export default PrivateRoute;