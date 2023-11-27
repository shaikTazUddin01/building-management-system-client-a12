import Divider from "../../../Component/Shared/Divider";
import useAuth from "../../../Hooks/useAuth";
import img1 from '../../../assets/HomeBanner/pro.jpg'

const MyProfile = () => {
    const {user}=useAuth()
    return (
        <div style={{backgroundImage:`url(${img1})`}} className="bg-cover min-h-screen">
            <div className=" bg-[#0606068a] min-h-screen">

            <div className="text-white pt-20">
            <Divider header={'ProFile InFo'}></Divider>
            </div>
          <div className="flex justify-center -mt-16">
          <div className="gap-10 bg-[#11123567] mt-20 px-14 py-16 space-y-2 text-white flex rounded-2xl">
               <div>
               <img src={user?.photoURL} alt="" className="h-20 w-20 rounded-full mx-auto "/>
               <h1 className="text-xl font-sans font-medium text-center">  <span className=""> {user?.displayName}</span></h1>
               <h1 className="text-xl font-sans font-medium text-center">
               <span className=""> {user?.email}</span>
               </h1>
               </div>
               <div className="space-y-2">
              
               <h2 className="text-xl font-sans font-medium">Apartment No. : 
               <span className="text-[#b3b2b2] font-normal"> None</span>
               </h2>
               <h2 className="text-xl font-sans font-medium">FloorNo : 
               <span className="text-[#b3b2b2] font-normal"> None</span>
               </h2>
               <h2 className="text-xl font-sans font-medium">BlockName : 
               <span className="text-[#b3b2b2] font-normal"> None</span>
               </h2>
               <h2 className="text-xl font-sans font-medium">Room No. : 
               <span className="text-[#b3b2b2] font-normal"> None</span>
               </h2>
               <h1 className="text-xl font-sans font-medium">Agreement accept date : 
               <span className="text-[#b3b2b2] font-normal"> None</span>
               </h1>
               </div>
           </div>
          </div>
          
        </div>
        </div>
    );
};

export default MyProfile;