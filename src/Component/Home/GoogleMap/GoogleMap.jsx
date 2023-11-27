
const GoogleMap = () => {
    
    return (
        <div>
         <div className="mapouter">
            <h1 className="text-4xl font-serif text-center font-semibold mb-5">Our location</h1>
            <div className="gmap_canvas">
                <iframe  src="https://maps.google.com/maps?q= Road- 11, house-100, Level-5, block-C Banani Model Town, Dhaka-1213&t=&z=10&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" className="h-[500px] w-full border-2 border-blue-500 "></iframe>
                </div>
                </div>
              
        </div>
    );
};

export default GoogleMap;