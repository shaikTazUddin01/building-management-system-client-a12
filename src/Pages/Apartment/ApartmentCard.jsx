import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/AxiosPublic/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import useBookedRoom from "../../Hooks/useBookedRoom/useBookedRoom";
import { useNavigate } from "react-router-dom";
import loading from '/loading.gif'
const ApartmentCard = ({ apartment }) => {
    const navigate = useNavigate()
    const axiosPubilc = useAxiosPublic()
    const { user } = useAuth()
    const [role] = useAdmin()
    const [bookedRoom, isLoading] = useBookedRoom()
    console.log('all booked room:',bookedRoom)

    // console.log(role)
    AOS.init()
// if(isLoading){
//     return <img src={loading} alt="" className="mx-auto mt-28" />
// }
    const { _id, apartmentImage, floorNo, blockName, apartmentNo, rent, roomNo } = apartment;
    const currentDate = new Date()
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
    });

    // check unavailable room
    const unavailable = bookedRoom?.find(item => item?.RoomNo == roomNo)
    console.log("room:", unavailable)
    //   console.log(formattedDate);

    const handleAgeement = () => {
        const userName = user?.displayName;
        const userEmail = user?.email

        // console.log(_id, userName, userEmail)
        const ageementInfo = {
            userName,
            userEmail,
            floorNo,
            apartmentNo,
            blockName,
            rent: parseInt(rent),
            status: 'pending',
            requestDate: formattedDate,
            roomNo
        }
        // console.log(ageementInfo)
        axiosPubilc.post('/ageement', ageementInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully you sent a ageement request",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "something is wrong please try again",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const handelAlreadyBook = () => {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Already you Booked a Room",
            showConfirmButton: false,
            timer: 1500
        });
    }
    const handleCheckLogin = () => {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "please login",
            showConfirmButton: false,
            timer: 1500
        });
        navigate('/login')
    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-lg shadow-blue-800
            hover:shadow-xl hover:shadow-blue-800
            mt-4" data-aos="fade-down">
                <figure><img src={apartmentImage} alt="apartment image" className="h-[250px] w-full" /></figure>
                <div className="px-5 py-5">
                    <div className="flex justify-between">
                        <p className="text-xl font-sans font-semibold ">ApartMent No. : <span className="text-blue-600">{apartmentNo}</span></p>
                        <p className="text-xl font-sans font-semibold ">Rent :
                            <span className="text-red-600"> {rent}৳</span> </p>

                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-xl font-sans font-semibold ">Block No. : <span className="text-blue-600">{blockName} Block</span></p>
                        <p className="text-xl font-sans font-semibold ">Floor No. :
                            <span className="text-blue-600"> {floorNo}</span> </p>
                    </div>
                    {

                        unavailable ?
                            <div className="text-center my-5" >
                                <div className="tooltip" data-tip="This Room Already booked ">
                                    <button className="btn btn-success" disabled>UnAvailable</button>

                                </div>
                            </div>


                            :
                            role === 'member' ?
                                <div className="text-center my-5">
                                    <button className="bg-blue-900 hover:bg-[var(--bg-primary)] text-white rounded-md py-3 px-4 uppercase hover:shadow-xl hover:shadow-blue-900" onClick={handelAlreadyBook}>Agreement</button>
                                </div>
                                :
                                <div className="text-center my-5">
                                    {
                                        user ?
                                            <button className="bg-blue-900 hover:bg-[var(--bg-primary)] text-white rounded-md py-3 px-4 uppercase hover:shadow-xl hover:shadow-blue-900" onClick={handleAgeement}>Agreement</button>
                                            :
                                            <button className="bg-blue-900 hover:bg-[var(--bg-primary)] text-white rounded-md py-3 px-4 uppercase hover:shadow-xl hover:shadow-blue-900" onClick={handleCheckLogin}>Agreement</button>

                                    }
                                </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;