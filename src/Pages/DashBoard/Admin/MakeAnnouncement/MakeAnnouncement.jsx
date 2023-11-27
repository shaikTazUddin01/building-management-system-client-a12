import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/AxiosSecure/useAxiosSecure'
import useAnnouncements from '../../../../Hooks/useAnnouncements/useAnnouncements';
const MakeAnnouncement = () => {
    // const[announcement,isPending]=useAnnouncements().............
    const axiosSecret = useAxiosSecure()
    const handleAnnouncement = (event) => {
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const description = form.description.value
        const announcementInfo = { title, description }
        axiosSecret.post('/makeannouncement', announcementInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "successfully you make a new Announcement",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        console.log(title, description)


    }
    return (
        <div className=" px-20">
            <div className="min-h-screen bg-base-200">
                <h1 className="text-4xl font-semibold text-center py-10">Make Announcement</h1>
                <div className="">

                    <div className="card shadow-2xl bg-base-100 w-1/2 mx-auto">
                        <form className="card-body" onSubmit={handleAnnouncement}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="taxt" placeholder="Title" className="input input-bordered" required name="title" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea type="taxt" placeholder="Description" className="textarea input-bordered textarea-lg " name="description" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
                {/* <MakeAnnouncement></MakeAnnouncement> */}
            </div>
        </div>
    );
};

export default MakeAnnouncement;