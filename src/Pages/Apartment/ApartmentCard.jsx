import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/AxiosPublic/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

const ApartmentCard = ({ apartment }) => {
    const axiosPubilc = useAxiosPublic()
    const { user } = useAuth()
    const { _id, apartmentImage, floorNo, blockName, apartmentNo, rent,roomNo } = apartment;
    const currentDate=new Date()
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      });
      
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
        axiosPubilc.post('/ageement',ageementInfo)
        .then(res=>{
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
        .catch(err=>{
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

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mt-4" >
                <figure><img src={apartmentImage} alt="apartment image" className="h-[250px] w-full" /></figure>
                <div className="px-5 py-5">
                    <div className="flex justify-between">
                        <p className="text-2xl font-sans font-semibold ">ApartMent No. : <span className="text-blue-600">{apartmentNo}</span></p>
                        <p className="text-xl font-sans font-semibold ">Rent :
                            <span className="text-red-600"> {rent}৳</span> </p>

                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-xl font-sans font-semibold ">Block No. : <span className="text-blue-600">{blockName}</span></p>
                        <p className="text-xl font-sans font-semibold ">Floor No. :
                            <span className="text-blue-600"> {floorNo}</span> </p>
                    </div>
                    <div className="text-center my-5">
                        <button className="btn btn-primary uppercase" onClick={handleAgeement}>Agreement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;