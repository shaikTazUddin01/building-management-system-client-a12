import Divider from '../../../../Component/Shared/Divider';
import useAuth from '../../../../Hooks/useAuth';
import useBookedRoom from '../../../../Hooks/useBookedRoom/useBookedRoom';
import img1 from '../../../../assets/HomeBanner/pro.jpg'
import loading from '../../../../../public/loading.gif'
import { Link } from 'react-router-dom';

const MakePayment = () => {
    // const [startDate, setStartDate] = useState(new Date());
    const { user, loader } = useAuth();
    const [bookedRoom, isLoading] = useBookedRoom()
    if (isLoading || loader) {
        return <img src={loading} alt="" className='mx-auto mt-28' />
    }
    // console.log(user.email)
    const userofRoom = bookedRoom.filter(item => item?.userEmail == user?.email)
    console.log("userroom:", userofRoom)
    return (
        <div style={{ backgroundImage: `url(${img1})` }} className="bg-cover min-h-screen">
            <div className=" bg-[#0606068a] min-h-screen">

                <div className="text-white pt-10">
                    <Divider header={'PayMent For Your Room'}></Divider>
                </div>
                <div className="-mt-16 pb-20 mx-10">
                    <div className="bg-[#11123567] mt-20 px-1 py-1 space-y-2 text-white rounded-2xl  mx-1 ">
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="text-xl font-semibold font-sans text-white ">

                                        {/* <th>#</th> */}
                                        <th>User email</th>
                                        <th>Floor no</th>
                                        <th>Block Name</th>
                                        <th>Room No</th>
                                        <th>Apartment No</th>
                                        <th>Month</th>
                                        {/* <th>Room no</th> */}
                                        <th>Rent</th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>
                                <tbody className='pb-10 '>
                                    {/* row 1 */}
                                    {
                                        userofRoom?.map(item => {
                                            return(
                                                <tr key={item?._id}>
                                                <td>{item?.userEmail}</td>
                                                <td>{item?.floorNo}</td>
                                                <td>{item?.blockName}</td>
                                                <td>{item?.RoomNo}</td>
                                                <td>{item?.apartmentNo}</td>
                                                <td>
                                                <input type="text" placeholder="Which month's rent" className='py-2 pl-3 bg-[#11123567] rounded-lg text-white'/>
                                                </td>
                                                <td>{item?.rent }</td>
                                                <td>
                                                    <Link to={'paymentForm'}>
                                                    <button className='btn btn-primary'>Payment</button>
                                                    </Link>
                                                </td>
                                            </tr>
                                            )
                                        })
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

export default MakePayment;