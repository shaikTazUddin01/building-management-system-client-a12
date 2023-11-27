import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";

const useAdmin = () => {
    const {user,loader}=useAuth();
    const axiosSecure=useAxiosSecure()
    // console.log(user?.email)
//  con

    const {data:isAdmin , isPending}=useQuery({
        queryKey:[user?.email,'isAdmin'],
        enabled:!loader,
        queryFn:async()=>{
            const res=await axiosSecure(`/user/admin/${user?.email}`)
            // console.log(res.data)
            return res.data.admin
        }
    })
   return[isAdmin,isPending]
};

export default useAdmin;