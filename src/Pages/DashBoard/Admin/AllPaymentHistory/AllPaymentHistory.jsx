import usePaymentHistory from "../../../../Hooks/usePaymentHistory/usePaymentHistory";

import loading from '/public/loading.gif'
import bgImg from '../../../../assets/HomeBanner/pro.jpg'
import Divider from "../../../../Component/Shared/Divider";
import { useState } from "react";
import useAllpaymenthistory from "../../../../Hooks/useAllpaymentHistory/useAllpaymenthistory";
const AllPaymentHistory = () => {

    const [allpaymentHistory, isPending] = useAllpaymenthistory()

    // // const [newHistry, setNewHistory] = useState([])
    // let sumOfElements = allpaymentHistory.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
    // console.log(sumOfElements)

    console.log(allpaymentHistory)
    // console.log(newHistry)
    const [dateValue, setDateValue] = useState([])

    const handlesearch = (e) => {
        e.preventDefault()
        const data = e.target.dataSearch.value
        setDateValue(data)
    }

    console.log(dateValue)

    if (isPending) {
        return <img src={loading} alt="" className="mx-auto mt-20" />
    }

    const monthsearch = allpaymentHistory.filter(item => item.month === dateValue)
    console.log(monthsearch)


    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className="bg-cover min-h-screen">
            <div className="bg-[#0606068a] min-h-screen">

                <div className="text-white pt-10">
                    <Divider header={'Payment History'}></Divider>
                </div>
                <div className="-mt-16 pb-20">
                    <div className="bg-[#11123567] mt-20 px-14 py-16 space-y-2 text-white rounded-2xl  mx-10">
                        {/* search form */}
                        <form action="" onSubmit={handlesearch}>
                            <div className="flex justify-end">
                                <input type="text" name='dataSearch' placeholder="search month.." className="rounded-l-xl px-2 py-1 text-black" />
                                <input type="submit" value="search" className="bg-blue-800 text-white px-5 py-3 rounded-r-xl hover:bg-blue-900" />
                            </div>
                        </form>
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
                                    <th>Month</th>
                                    <th>payment Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {monthsearch.length ?
                                    monthsearch?.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{item?.floorNo}</td>
                                                <td>{item?.apartmentNo}</td>
                                                <td>{item?.blockName}</td>
                                                <td>{item?.RoomNo}</td>
                                                <td>{item?.amount}</td>
                                                <td>{item?.month}</td>
                                                <td>{item?.Date}</td>
                                            </tr>
                                        )
                                    })
                                    :
                                    allpaymentHistory?.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{item?.floorNo}</td>
                                                <td>{item?.apartmentNo}</td>
                                                <td>{item?.blockName}</td>
                                                <td>{item?.RoomNo}</td>
                                                <td>{item?.amount}</td>
                                                <td>{item?.month}</td>
                                                <td>{item?.Date}</td>
                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                            {/* <tfoot className="border-t border-white">
                                <tr className="text-xl font-semibold font-sans text-white">
                                    <th>Total</th>
                                    <th></th>
                                    <th> </th>
                                    <th></th>
                                    <th></th>
                                    <th>5000</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot> */}
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

// export default PaymentHistory;
export default AllPaymentHistory;
