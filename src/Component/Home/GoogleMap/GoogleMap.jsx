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
                {/* <iframe  src="https://maps.google.com/maps?q= Road- 11, house-100, Level-5, block-C Banani Model Town, Dhaka-1213&t=&z=10&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" className="h-[500px] w-full border-2 border-blue-500 "></iframe> */}
                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7328109202886!2d90.40437737429404!3d23.79252708715977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78024765f8d%3A0x5bca8a74f569a62c!2sBanani%20House!5e0!3m2!1sen!2sbd!4v1701229754338!5m2!1sen!2sbd" frameBorder="0" scrolling="no" className="h-[500px] w-full border-2 border-blue-500 "></iframe>
                </div>
                </div>
              
        </div>
    );
};

export default GoogleMap;