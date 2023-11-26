import Swal from "sweetalert2";
import useAgreementUser from "../../../../Hooks/AgreementUser/useAgreementUser";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";

const AgreementRequests = () => {
    const [agreement, isLoading] = useAgreementUser()
    // console.log(agreement)
    const axiosSecure=useAxiosSecure()
    
    const handleAcceptRequest=(id)=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "to Accept this request",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Accept"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`agreementsRequest/${id}`)
                .then(res=>console.log(res.data))

            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            }
          });
      
    }
    return (
        <div className="px-10 my-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-semibold font-sans">

                            <th>#</th>
                            <th>User Name</th>
                            <th> User email</th>
                            <th>Floor no</th>
                            <th>Block Name</th>
                            <th>Room no</th>
                            <th>Rent</th>
                            <th>Request date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            agreement?.map((request,i) => {
                                return (
                                <tr key={request?._id}>
                                    <td>{i+1}</td>
                                    <td>
                                        {request?.userName}
                                    </td>
                                    <td>
                                        {request?.userEmail}
                                    </td>
                                    <td>{request?.floorNo}</td>
                                    <td>({request.blockName} )Block</td>
                                    <td>{request?.apartmentNo}</td>
                                    <td>{request?.rent}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">{request?.requestDate}</button>
                                    </th>
                                    <th className="flex gap-2">
                                        <button className="btn btn-primary" onClick={()=>handleAcceptRequest(request?._id)}>Accept</button>
                                        <button className="btn btn-error">Reject</button>
                                    </th>
                                </tr>)
                            }
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgreementRequests;