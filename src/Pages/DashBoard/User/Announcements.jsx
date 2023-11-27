import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/AxiosPublic/useAxiosPublic";
import useAnnouncements from "../../../Hooks/useAnnouncements/useAnnouncements";

const Announcements = () => {
   const [announcement,isPending]=useAnnouncements()
    if (isPending) {
        return <p>loading...</p>
    }
    console.log(announcement)
    return (
        <div className="px-20 pt-20">
            {
                announcement?.map(item=>{
                    return(
                        <div key={item?._id}>
                            <h1 className="text-xl">Title : {item.title}</h1>
                            <h1 className="text-xl">Description : {item.description}</h1>
                        </div>

                    )
                })
            }
            {/* <h1>{announcement.de}</h1> */}
        </div>
    );
};

export default Announcements;