import useApartment from "../../Hooks/useApartment/useApartment";
import ApartmentCard from "./ApartmentCard";

const Apartment = () => {
    const[apartment]=useApartment()
    console.log(apartment)
    return (
        <div className="my-20 px-10">
            <h1 className="text-4xl text-center font-semibold mb-2">All ApartMents</h1>
            <div className="divider w-[10%] mx-auto bg-black h-[2px] mb-5"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                 apartment?.map(item=><ApartmentCard key={item._id} apartment={item}></ApartmentCard>)
            }
          
        </div>
        </div>
    );
};

export default Apartment;