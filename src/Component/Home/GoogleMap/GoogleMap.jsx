
const GoogleMap = () => {
    
    return (
        <div>
         <div className="mapouter">
            <h1 className="text-4xl font-serif text-center font-semibold mb-5">Our location</h1>
            <div className="gmap_canvas">
                <iframe src="https://maps.google.com/maps?q=Gulshan,%20Dhaka%20thana&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no" className="h-[500px] w-full border-2 border-blue-500 "></iframe>
                </div>
                </div>
        </div>
    );
};

export default GoogleMap;