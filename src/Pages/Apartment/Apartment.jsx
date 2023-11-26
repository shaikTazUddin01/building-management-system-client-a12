import { useQuery } from "@tanstack/react-query";
import ApartmentCard from "./ApartmentCard";
import useAxiosPublic from "../../Hooks/AxiosPublic/useAxiosPublic";

import { useState } from "react";

const Apartment = () => {
    const axiosPubilc = useAxiosPublic()
    //set state in current page
    // const [currentPage, setCurrentPage] = useState(0)
    // const [apartmentLength,setApartmentLength]=(16)
    //fatching data in pagination length
    const { data: apartment, isLoading } = useQuery({
        queryKey: ['apartment'],
        queryFn: async () => {
            const res = await axiosPubilc.get('/apartment')
            // setApartmentLength(res.data)
            return res.data;
        }
    })


    // //calculate pages for pagination
    // const apartmentLength = apartment?.length
    // // console.log(apartmentNumber)
    // const perPageItem = 6;
    // const pageNumber = Math.ceil(apartmentLength / perPageItem)
    // console.log(pageNumber);
    // const numberofButton = [...Array(pageNumber).keys()]
    // console.log(numberofButton)

    // const { data: apartmentCard, isLoading: isLoading2 } = useQuery({
    //     queryKey: ['apartmentCard'],
    //     queryFn: async () => {
    //         const result = await axiosPubilc.get(`/apartment?page=${currentPage}&size=${perPageItem}`)
    //         return result.data
    //     }
    // });
   
    // const handleCurrentPage = (page) => {
    //     setCurrentPage(page)
    // }
    // const handlePrev = () => {
    //     if (currentPage > 0) {
    //         setCurrentPage(currentPage - 1)
    //     }
    // }
    // const handleNext = () => {
    //     if (currentPage < numberofButton.length - 1) {
    //         setCurrentPage(currentPage + 1)
    //     }
    // }





    return (
        <div className="my-20 px-10">
            <h1 className="text-4xl text-center font-semibold mb-2">All ApartMents</h1>
            <div className="divider w-[10%] mx-auto bg-black h-[2px] mb-5"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    apartment?.map(item => <ApartmentCard key={item._id} apartment={item}></ApartmentCard>)
                }

            </div>
            {/* <div className="pagination text-center space-x-4">
                <button onClick={handlePrev}
                    className='py-2 px-4 rounded-lg 
                 text-white bg-[#301ad5] '
                >Prev</button>
                {numberofButton?.map(item => <button key={item} className={currentPage === item ? 'py-2 px-4 rounded-lg text-white bg-[#0d0357] border border-[#301ad5]' : 'py-2 px-4 rounded-lg text-white bg-[#301ad5]'} onClick={() => { handleCurrentPage(item) }}>{item + 1}</button>)}
                <button onClick={handleNext}
                    className='py-2 px-4 rounded-lg
                 text-white bg-[#301ad5] '
                >Next</button>

            </div> */}
        </div>
    );
};

export default Apartment;