import Divider from "../../Shared/Divider";
import AOS from 'aos';
import 'aos/dist/aos.css';
const GoogleMap = () => {
    AOS.init()
    return (
        <div>
            <div className="mapouter mt-14 mb-20 lg:mb-32 md:px-10 lg:px-0">
                <Divider header={'Building Location'}></Divider>
                <div className="flex flex-col lg:flex-row gap-5 items-center mt-8">
                    <div className="gmap_canvas mt-5 w-full lg:w-1/2" data-aos="zoom-in-down">
                     
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7328109202886!2d90.40437737429404!3d23.79252708715977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78024765f8d%3A0x5bca8a74f569a62c!2sBanani%20House!5e0!3m2!1sen!2sbd!4v1701229754338!5m2!1sen!2sbd" frameBorder="0" scrolling="no" className=" h-[300px] md:h-[500px] w-[94%] border-2 mx-auto border-blue-500 "></iframe>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h1 className="text-2xl md:text-4xl font-serif font-semibold" data-aos="fade-up">How to get apartment’s location .?</h1>
                        <p className="text-lg font-sans mt-4"><span className="font-semibold" data-aos="fade-up">Use a Navigation App:</span> Consider using a navigation app on your smartphone, such as Google Maps, Apple Maps, or another local navigation app. Enter the specific address, and the app will provide you with turn-by-turn directions.</p>
                        <p className="text-lg font-sans mt-4" data-aos="fade-up">
                            <span className="font-semibold">Ask Locals:</span> If you're already in the area, asking locals for directions can be helpful. They might be able to guide you or provide additional tips on reaching your destination.
                        </p>
                        <p className="text-lg font-sans mt-4" data-aos="fade-up">
                            <span className="font-semibold">Public Transportation:</span> If you're using public transportation, such as buses or taxis, you can ask the operators or fellow passengers for assistance.
                        </p>

                        <p className="text-lg font-sans mt-4" data-aos="fade-up">
                           <span className="font-semibold">Check Online Maps:</span> Before you start your journey, you can use online maps to get an overview of the route. This can help you familiarize yourself with major landmarks and roads.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GoogleMap;