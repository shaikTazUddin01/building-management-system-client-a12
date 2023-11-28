import usePaymentHistory from "../../../../Hooks/usePaymentHistory/usePaymentHistory";

import loading from '/public/loading.gif'
import bgImg from '../../../../assets/HomeBanner/pro.jpg'
import Divider from "../../../../Component/Shared/Divider";
const PaymentHistory = () => {
    const[paymentHistory,isPending]=usePaymentHistory()
    // console.log(paymentHistory)
    if (isPending) {
        return <img src={loading} alt="" className="mx-auto mt-20"/>
    }
    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className="bg-cover min-h-screen">
        <div className=" bg-[#0606068a] min-h-screen">

            <div className="text-white pt-10">
                <Divider header={'Payment History'}></Divider>
            </div>
            <div className="-mt-16 pb-20">
                <div className="bg-[#11123567] mt-20 px-14 py-16 space-y-2 text-white rounded-2xl  mx-10">
                    <table className="table">
                        {/* head */}
                        <thead>
 


                            <tr className="text-xl font-semibold font-sans text-white">
                                <th>#</th>
                                <th>FloorNo</th>
                                <th>Apartment No</th>
                                <th>Block Name</th>
                                <th>Room No</th>
                                <th>Amount</th>
                                <th>payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                paymentHistory?.map((item,i)=>{
                                    return(
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{item?.floorNo}</td>
                                            <td>{item?.apartmentNo}</td>
                                            <td>{item?.blockName}</td>
                                            <td>{item?.RoomNo}</td>
                                            <td>{item?.amount}</td>
                                            <td>{item?.Date}</td>
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
    );
};

export default PaymentHistory;