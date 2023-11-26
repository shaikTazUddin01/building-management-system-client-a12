
import Swal from "sweetalert2";
import useMangeMember from "../../../../Hooks/useMangeMember/useMangeMember";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";

const ManageMenbers = () => {
    const axiosSecure=useAxiosSecure()
    const [user,refetch] = useMangeMember()
    // console.log(user)
    const member=user?.filter(item=>item.role==='member')
    // console.log(member)
    const handlememberShip = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "to Remover Member Ship",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Remove"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/agreementsRejectRequest?id=${id}`)
                    .then(res => {
                        refetch()
                        // console.log(res.data)
                        if (res.data.modifiedCount) {
                            Swal.fire({
                                title: "you removed this member",
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
        <div className="px-10 my-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-semibold font-sans">
                            <th>#</th>
                            <th>User Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            member?.map((item, i) => {
                                return (
                                    <tr key={item?._id}>
                                        <td>
                                            {i}
                                        </td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.photoUrl} />
                                                </div>
                                            </div>


                                        </td>
                                        <td>
                                            {item?.name}

                                        </td>
                                        <td>{item?.email}</td>
                                        <th>
                                            <button className="btn btn-error" onClick={()=>handlememberShip(item?._it)}>Delete Member</button>
                                        </th>
                                    </tr>
                                )
                            }

                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMenbers;