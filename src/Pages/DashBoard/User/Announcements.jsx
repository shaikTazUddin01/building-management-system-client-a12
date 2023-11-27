import useAnnouncements from "../../../Hooks/useAnnouncements/useAnnouncements";
import Divider from '../../../Component/Shared/Divider'
import img1 from '../../../assets/HomeBanner/pro.jpg'
const Announcements = () => {
    const [announcement, isPending] = useAnnouncements()
    if (isPending) {
        return <p>loading...</p>
    }
    console.log(announcement)
    return (
        <div style={{ backgroundImage: `url(${img1})` }} className="bg-cover min-h-screen">
            <div className=" bg-[#0606068a] min-h-screen">

                <div className="text-white pt-10">
                    <Divider header={'All Announcement'}></Divider>
                </div>
                <div className="-mt-16 pb-20">
                    <div className="bg-[#11123567] mt-20 px-14 py-16 space-y-2 text-white rounded-2xl min-h-screen mx-10">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr className="text-xl font-semibold border-black text-white">
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Decription</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}


                                    {
                                        announcement?.map((item, i) => {
                                            return (

                                                <tr key={item?._id} className="border-black">
                                                    <th>{i + 1}</th>
                                                    <td>{item?.title}</td>
                                                    <td>{item?.description}</td>
                                                    {/* <td>Blue</td> */}
                                                </tr>


                                            )
                                        })
                                    }
                                    {/* <h1>{announcement.de}</h1> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Announcements;