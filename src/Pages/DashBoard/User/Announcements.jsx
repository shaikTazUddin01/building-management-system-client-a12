import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/AxiosPublic/useAxiosPublic";

const Announcements = () => {
    const { user, loader } = useAuth();
    const axiosPubilc = useAxiosPublic()
    // console.log(user?.email)
    //  con

    const { data: announcement, isPending } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loader,
        queryFn: async () => {
            const res = await axiosPubilc.get(`/announcements/${user?.email}`)
            // console.log(res.data)
            return res.data
        }
    })
    if (isPending) {
        return <p>loading...</p>
    }
    return (
        <div>
            <h1>{announcement.title}</h1>
            {/* <h1>{announcement.de}</h1> */}
        </div>
    );
};

export default Announcements;