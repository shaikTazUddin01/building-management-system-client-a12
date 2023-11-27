
import Swal from "sweetalert2";
import useMangeMember from "../../../../Hooks/useMangeMember/useMangeMember";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import img1 from '../../../../assets/HomeBanner/pro.jpg'
import Divider from "../../../../Component/Shared/Divider";
const ManageMenbers = () => {
    const axiosSecure = useAxiosSecure()
    const [user, refetch] = useMangeMember()
    // console.log(user)
    const member = user?.filter(item => item.role === 'member')
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
                axiosSecure.patch(`/userRole?id=${id}`)
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
        <div style={{ backgroundImage: `url(${img1})` }} className="bg-cover min-h-screen">
            <div className=" bg-[#0606068a] min-h-screen">

                <div className="text-white pt-10">
                    <Divider header={'All Announcement'}></Divider>
                </div>
                <div className="-mt-16 pb-20">
                    <div className="bg-[#11123567] mt-20 px-14 py-16 space-y-2 text-white rounded-2xl  mx-10">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-xl font-semibold font-sans text-white">
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
                                                    <button className="btn btn-error" onClick={() => handlememberShip(item?._id)}>Delete Member</button>
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

            </div>
        </div>
    );
};

export default ManageMenbers;