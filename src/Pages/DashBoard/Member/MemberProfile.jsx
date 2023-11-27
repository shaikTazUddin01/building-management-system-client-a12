import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";


const MemberProfile = () => {

    const {user,loader}=useAuth();
    const axiosSecure=useAxiosSecure()
    // console.log(user?.email)


    const {data:userInfo , isPending}=useQuery({
        queryKey:[user?.email,],
        enabled:!loader,
        queryFn:async()=>{
            const res=await axiosSecure.get(`/ageementuser/${user?.email}`)
            // console.log(res.data)
            return res.data
        }
    })
    if (isPending) {
       return <p>loading...</p>
    }
//    return[useInfo,isPending]
console.log(userInfo)
    return (
        <div className="flex justify-center">
           <div className="text-center bg-blue-600 mt-20 px-10 pb-10 space-y-2 text-white">
               <img src={user?.photoURL} alt="" className="h-20 w-20 rounded-full mx-auto -mt-10"/>
               <h1 className="text-xl font-sans font-medium">User Name :  <span className=""> {user?.displayName}</span></h1>
               <h1 className="text-xl font-sans font-medium">User Email : 
               <span className=""> {user?.email}</span>
               </h1>
              
               <h2 className="text-xl font-sans font-medium">FloorNo : 
               <span className=""> {userInfo?.floorNo}</span>
               </h2>
               <h2 className="text-xl font-sans font-medium">BlockName : 
               <span className=""> {userInfo?.blockName}</span>
               </h2>
               <h2 className="text-xl font-sans font-medium">Room No. : 
               <span className=""> {userInfo?.RoomNo}</span>
               </h2>
               <h1 className="text-xl font-sans font-medium">Agreement accept date : 
               <span className=""> {userInfo?.AcceptedDate}</span>
               </h1>
           </div>
          
        </div>
    );
};

export default MemberProfile;