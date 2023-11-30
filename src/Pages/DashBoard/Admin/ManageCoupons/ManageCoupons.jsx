import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import useCupon from "../../../../Hooks/useCupon/useCupon";
import CuponCard from "./cuponCard";
import Divider from "../../../../Component/Shared/Divider";
import loading from '/public/loading.gif'
import bgimg from '../../../../assets/HomeBanner/pro.jpg'
import { ToastContainer, toast } from "react-toastify";
const ManageCoupons = () => {

    const axiosSecret = useAxiosSecure()
    const [cupon, isPending, refetch] = useCupon()
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
                    refetch()
                    e.target.reset()
                    toast.success("successfully you create a new coupon")
                }
            })
    }
    return (
       <div style={{backgroundImage:`url(${bgimg})`}}>
         <div className="px-20 bg-[#0606068a] py-20 ">
            <div className="min-h-screen bg-[#11123567] pt-10 rounded-3xl">
                <div className="text-white">
                <Divider header={'Make Coupon'}></Divider>
                </div>
                <div className="text-center">
                    {/* modal create cupon */}
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Make Cupon</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <form className="card-body" onSubmit={handleManageKupon}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Inter Coupon</span>
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
                            <ToastContainer></ToastContainer>
                        </div>
                    </dialog>

               {/* <div className="card shadow-2xl bg-base-100 w-1/2 mx-auto">
                                     </div> */}
                </div>
                {/* manage table */}
                <div className="overflow-x-auto my-10 px-10">
                    <div className="text-white">
                    <Divider header={'Manage Coupons'}></Divider>
                    </div>
                    <table className="table  mb-16 ">
                        {/* head */}
                        <thead>
                            <tr className="text-xl font-sans font-semibold border border-black text-white">
                                <th>Cupon Id</th>
                                <th>cupon</th>
                                <th>Discount</th>
                                <th>Discription</th>
                                <th>Action</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {cupon?.map(item => <CuponCard key={item?._id} item={item} refetch={refetch}></CuponCard>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
       </div>
    );
};

export default ManageCoupons;