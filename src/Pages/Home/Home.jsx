import GoogleMap from "../../Component/Home/GoogleMap/GoogleMap";
import About from "../../Component/Home/About/About";
import Banner from "../../Component/Home/Banner/Banner";
import CuponButton from "./CuponButton/CuponButton";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <div className="px-20">
           <About></About>
           </div>
           
           <div className="px-20 mb-10 mt-20">
            <GoogleMap></GoogleMap>
           </div>
           <CuponButton></CuponButton>
        </div>
    );
};

export default Home;