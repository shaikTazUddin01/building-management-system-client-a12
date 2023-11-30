import Swal from "sweetalert2";
import useAgreementUser from "../../../../Hooks/AgreementUser/useAgreementUser";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
// import Divider from '../../../Component/Shared/Divider'
import img1 from '../../../../assets/HomeBanner/pro.jpg'
import Divider from "../../../../Component/Shared/Divider";

const AgreementRequests = () => {
    const [agreement, , refetch] = useAgreementUser()
    // console.log(agreement)
    const axiosSecure = useAxiosSecure()

    const handleAcceptRequest = (id, email) => {
        console.log(id, email)
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
                axiosSecure.patch(`/agreementsRequest?id=${id}&email=${email}`)
                    .then(res => {
                        refetch()
                        // console.log(res.data)
                        if (res.data.acceptStatus.modifiedCount) {
                            Swal.fire({
                                title: "SuccessFully you accept this Request!",
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                title: "something is wrong please try again",
                                icon: "error"
                            });
                        }
                    }
                    )

            }
        });

    }
    //handle reaject request
    const handleRejecttRequest = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "to reject this request",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Reject"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/agreementsRejectRequest?id=${id}`)
                    .then(res => {
                        refetch()
                        // console.log(res.data)
                        if (res.data.modifiedCount) {
                            Swal.fire({
                                title: " you reject this Request!",
                                icon: "warning"
                            });
                        } else {
                            Swal.fire({
                                title: "something is wrong please try again",
                                icon: "error"
                            });
                        }
                    }
                    )

            }
        });

    }

    return (
        <div style={{ backgroundImage: `url(${img1})` }} className="bg-cover min-h-screen">
        <div className=" bg-[#0606068a] min-h-screen">

            <div className="text-white pt-10">
                <Divider header={'Agreement Request'}></Divider>
            </div>
            <div className="-mt-16 pb-20">
                <div className="bg-[#11123567] mt-20 px-1 py-5 space-y-2 text-white rounded-2xl  mx-1">
                <div className="overflow-x-auto">
                <table className="table table-xs">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-semibold font-sans text-white ">

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
                            agreement?.map((request, i) => {
                                return (
                                    <tr key={request?._id}>
                                        <td>{i + 1}</td>
                                        <td>
                                            {request?.userName}
                                        </td>
                                        <td>
                                            {request?.userEmail}
                                        </td>
                                        <td>{request?.floorNo}</td>
                                        <td>({request.blockName} )Block</td>
                                        <td>{request?.roomNo}</td>
                                        <td>{request?.rent}</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">{request?.requestDate}</button>
                                        </th>
                                        <th className="flex gap-2">
                                            {
                                                request?.status === 'pending' ?
                                                    <>
                                                        <button className="btn btn-primary" onClick={() => handleAcceptRequest(request?._id, request?.userEmail)}>Accept</button>
                                                        <button className="btn btn-error" onClick={() => handleRejecttRequest(request?._id)}>Reject</button>
                                                    </>
                                                    :
                                                    <button className="btn btn-success" >checked</button>
                                            }
                                        </th>
                                    </tr>)
                            }
                            )
                        }

                    </tbody>
                </table>
            </div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default AgreementRequests;