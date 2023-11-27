import Divider from "../../Shared/Divider";
import AOS from 'aos';
import 'aos/dist/aos.css';
const GoogleMap = () => {
    AOS.init()
    return (
        <div>
         <div className="mapouter mt-10">
           <Divider header={'Building Location'}></Divider>
            <div className="gmap_canvas mt-5" data-aos="zoom-in-down">
                <iframe  src="https://maps.google.com/maps?q= Road- 11, house-100, Level-5, block-C Banani Model Town, Dhaka-1213&t=&z=10&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" className="h-[500px] w-full border-2 border-blue-500 "></iframe>
                </div>
                </div>
              
        </div>
    );
};

export default GoogleMap;