import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import useCupon from "../../../../Hooks/useCupon/useCupon";
import CuponCard from "./cuponCard";
import Divider from "../../../../Component/Shared/Divider";
import loading from '/public/loading.gif'
const ManageCoupons = () => {

    const axiosSecret = useAxiosSecure()
    const [cupon, isPending] = useCupon()
    console.log(cupon)
    if (isPending) {
        return <img src={loading} alt="" />
    }
    const handleManageKupon = (e) => {
        e.preventDefault()
        const cuponCode = e.target.cupon.value
        const discount = e.target.discount.value
        const description = e.target.description.value
        const cupon = {
            cuponCode, discount, description
        }
        console.log(cupon)
        axiosSecret.post('/cupons', cupon)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "successfully you make a new Cupon",
                        showConfirmButton: false,
                        timer: 1500

                    })
                }
            })
    }
    return (
        <div className=" px-20">
            <div className="min-h-screen bg-base-200">
               <Divider header={'Make Announcement'}></Divider>
                <div className="">

                    <div className="card shadow-2xl bg-base-100 w-1/2 mx-auto">
                        <form className="card-body" onSubmit={handleManageKupon}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Inter Cupon</span>
                                </label>
                                <input type="taxt" placeholder="enter cupon here" className="input input-bordered" required name="cupon" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Deicount (%)</span>
                                </label>
                                <input type="number" placeholder="discount" className="input input-bordered" required name="discount" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">description</span>
                                </label>
                                <textarea type="taxt" placeholder="Description" className="textarea input-bordered textarea-lg " name="description" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Make Cupon</button>
                            </div>
                        </form>
                    </div>

                </div>

                {/* manage table */}
                <div className="overflow-x-auto my-10 px-10">
                    <Divider header={'Manage coupons'}></Divider>
                    <table className="table table-zebra  border">
                        {/* head */}
                        <thead>
                            <tr className="text-xl font-sans font-semibold border border-black">
                                <th>Cupon Id</th>
                                <th>cupon</th>
                                <th>Discount</th>
                                <th>Discription</th>

                            </tr>
                        </thead>
                        <tbody>
                        {cupon?.map(item => <CuponCard key={item?._id} item={item}></CuponCard>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageCoupons;