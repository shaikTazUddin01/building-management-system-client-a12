import { useQuery } from "@tanstack/react-query";
import ApartmentCard from "./ApartmentCard";
import useAxiosPublic from "../../Hooks/AxiosPublic/useAxiosPublic";
import loading from '/public/loading.gif'
import { useEffect, useState } from "react";
import Divider from "../../Component/Shared/Divider";
// import useApartment from "../../Hooks/useApartment/useApartment"

const Apartment = () => {
    const [currentPage, setCurrentPage] = useState(0)
    // const [loader, setloader] = useState(true)
    // const [apartment, , isPending] = useApartment()
    // const [pagination,setpagination]=useState([])
    const axiosPubilc = useAxiosPublic()
    // console.log("apartmant:", apartment)

    // if (!apartment.length) {
    //     setloader(true)
    // }
    // if (loader) {
    //     return <p>loading...</p>
    // }
    // setloader(false)
    //calculate pages for pagination
    // if (isPending ) {
    //     return <img src={loading} alt="" className="mx-auto mt-28" />
    // }
    // const apartmentLength = apartment?.length
    const apartmentLength = 16
    console.log(apartmentLength)
    const perPageItem = 6;
    const pageNumber = Math.ceil(apartmentLength / perPageItem)
    console.log(pageNumber);
    const numberofButton = [...Array(pageNumber).keys()]
    console.log(numberofButton)

    const { data: pagination, isPending: isPending2, refetch } = useQuery({
        queryKey: ['pagination'],
        queryFn: async () => {
            const result = await axiosPubilc.get(`/pagination?page=${currentPage}&size=${perPageItem}`)
            return result.data
        }
    });
    // useEffect(()=>{
    //     axiosPubilc.get(`/pagination?page=${currentPage}&size=${perPageItem}`)
    //     .then(res=>setpagination(res.data))
    // },[currentPage,axiosPubilc])
    if (isPending2) {
        return <img src={loading} alt="" className="mx-auto mt-28" />
    }
    console.log("pagination", pagination)

    console.log(currentPage)
    console.log(perPageItem)
    const handleCurrentPage = (page) => {
        setCurrentPage(page)
        refetch()
    }
    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
            refetch()
        }
    }
    const handleNext = () => {
        if (currentPage < numberofButton.length - 1) {
            setCurrentPage(currentPage + 1)
            refetch()
        }
    }





    return (
        <div className="my-20 px-10">
            <Divider header={'All ApartMents'}></Divider>
            {/* <div className="divider w-[10%] mx-auto bg-black h-[2px] mb-5"></div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    pagination?.map(item => <ApartmentCard key={item._id} apartment={item}></ApartmentCard>)
                }

            </div>
            <div className="pagination text-center space-x-4 mt-10">
                <button onClick={handlePrev}
                    className='py-2 px-4 rounded-lg 
                 text-white bg-[#301ad5] '
                >Prev</button>
                {numberofButton?.map(item => <button key={item} className={currentPage === item ? 'py-2 px-4 rounded-lg text-white bg-[#0d0357] border border-[#301ad5]' : 'py-2 px-4 rounded-lg text-white bg-[#301ad5]'} onClick={() => { handleCurrentPage(item) }}>{item + 1}</button>)}
                <button onClick={handleNext}
                    className='py-2 px-4 rounded-lg
                 text-white bg-[#301ad5] '
                >Next</button>

            </div>
        </div>
    );
};

export default Apartment;