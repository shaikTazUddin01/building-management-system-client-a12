import useAxiosPublic from "../../Hooks/AxiosPublic/useAxiosPublic";

const ApartmentCard = ({ apartment }) => {
    const axiosPubilc = useAxiosPublic()
    const { _id, apartmentImage, floorNo, blockName, apartmentNo, rent } = apartment;

    const handleAgeement() => {
        axiosPubilc.get('')
    }

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mt-4" >
                <figure><img src={apartmentImage} alt="apartment image" className="h-[250px] w-full" /></figure>
                <div className="px-5 py-5">
                    <div className="flex justify-between">
                        <p className="text-2xl font-sans font-semibold ">ApartMent No. : <span className="text-blue-600">{apartmentNo}</span></p>
                        <p className="text-xl font-sans font-semibold ">Rent :
                            <span className="text-red-600"> {rent}৳</span> </p>

                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-xl font-sans font-semibold ">Block No. : <span className="text-blue-600">{blockName}</span></p>
                        <p className="text-xl font-sans font-semibold ">Floor No. :
                            <span className="text-blue-600"> {floorNo}</span> </p>
                    </div>
                    <div className="text-center my-5">
                        <button className="btn btn-primary uppercase" onClick={handleAgeement}>Agreement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;