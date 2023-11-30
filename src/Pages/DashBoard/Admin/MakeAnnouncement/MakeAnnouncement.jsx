import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/AxiosSecure/useAxiosSecure'
import useAnnouncements from '../../../../Hooks/useAnnouncements/useAnnouncements';
import img1 from '../../../../assets/HomeBanner/pro.jpg'
import Divider from '../../../../Component/Shared/Divider';
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
                    form.reset()
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
        <div style={{ backgroundImage: `url(${img1})` }} className="bg-cover min-h-screen">
            <div className=" bg-[#0606068a] min-h-screen">

                <div className="text-white pt-20">
                    <Divider header={'Make Announcements'}></Divider>
                </div>
                <div className="-mt-16  w-full md:w-1/2 mx-auto pb-10" >
                    <div className=" bg-[#11123567] mt-20 px-0 md:px-5 py-5 space-y-2 text-white flex rounded-2xl">
                        <form className="card-body" onSubmit={handleAnnouncement}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-sans font-semibold text-white">Title</span>
                                </label>
                                <input type="taxt" placeholder="Title" className="input input-bordered text-black" required name="title" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-sans font-semibold text-white ">Description</span>
                                </label>
                                <textarea type="taxt" placeholder="Description" className="textarea input-bordered textarea-lg text-black" name="description" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-xl" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MakeAnnouncement;