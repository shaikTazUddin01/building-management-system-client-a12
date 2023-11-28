import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import img1 from '.././../../../assets/HomeBanner/pro.jpg'
import Divider from '../../../../Component/Shared/Divider';
import useApartment from '../../../../Hooks/useApartment/useApartment';
import loading from '/loading.gif'
import useMangeMember from '../../../../Hooks/useMangeMember/useMangeMember';
import useBookedRoom from '../../../../Hooks/useBookedRoom/useBookedRoom';
const AdminProfile = () => {
    const [apartment, , isLoading] = useApartment()
    const [totaluser] = useMangeMember()
    const [bookedRoom] = useBookedRoom()
    const { user } = useAuth()

    const member = totaluser?.filter(item => item.role === 'member')
    const availableRoom=((apartment?.length - bookedRoom?.length)*100)/apartment?.length
    
    // console.log(user.photoUrl)
    // const[apartment,,isLoading]=useApartment()
    console.log("booking:",bookedRoom)
    if (isLoading) {
        return <img src={loading} alt="" className="mx-auto mt-28" />
    }
    return (
        <div style={{ backgroundImage: `url(${img1})` }} className="bg-cover min-h-screen">
            <div className=" bg-[#0606068a] min-h-screen">

                <div className="text-white pt-20">
                    <Divider header={'ProFile InFo'}></Divider>
                </div>
                <div className="flex justify-center -mt-16">
                    <div className="gap-10 bg-[#11123567] mt-20 px-14 py-16 space-y-2 text-white flex rounded-2xl">
                        <div>
                            <img src={user?.photoURL} alt="" className="h-20 w-20 rounded-full mx-auto " />
                            <h1 className="text-xl font-sans font-medium text-center">  <span className=""> {user?.displayName}</span></h1>
                            <h1 className="text-xl font-sans font-medium text-center">
                                <span className=""> {user?.email}</span>
                            </h1>
                        </div>
                        <div className="space-y-2">

                            <h2 className="text-xl font-sans font-medium">Total Rooms : {apartment?.length}
                                <span className="font-normal"></span>
                            </h2>
                            <h2 className="text-xl font-sans font-medium">Available Rooms :
                                <span className=" font-normal"> {availableRoom}%</span>
                            </h2>
                            <h2 className="text-xl font-sans font-medium">Booked Rooms :
                                <span className="font-normal"> {100-availableRoom}%</span>
                            </h2>
                            <h2 className="text-xl font-sans font-medium">Total User :
                                <span className=" font-normal"> {totaluser?.length}</span>
                            </h2>
                            <h1 className="text-xl font-sans font-medium">Total Member :
                                <span className=" font-normal"> {member?.length}</span>
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminProfile;