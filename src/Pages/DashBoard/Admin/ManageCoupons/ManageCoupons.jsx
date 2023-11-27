import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";

const ManageCoupons = () => {

    const axiosSecret=useAxiosSecure()
    const handleManageKupon = (e) => {
        e.preventDefault()
        const cupon = e.target.cupon.value
        console.log(cupon)

        axiosSecret.post('/cupons',{cupon})
        .then(res=>{
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
                <h1 className="text-4xl font-semibold text-center py-10">Make Announcement</h1>
                <div className="">

                    <div className="card shadow-2xl bg-base-100 w-1/2 mx-auto">
                        <form className="card-body" onSubmit={handleManageKupon}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Make Cupon</span>
                                </label>
                                <input type="taxt" placeholder="make cupon here" className="input input-bordered" required name="cupon" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Make</button>
                            </div>
                        </form>
                    </div>

                </div>
                {/* <MakeAnnouncement></MakeAnnouncement> */}
            </div>
        </div>
    );
};

export default ManageCoupons;