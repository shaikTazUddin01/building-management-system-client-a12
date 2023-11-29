import React from 'react';
import bg from '../../assets/HomeBanner/pro.jpg'
const WelcomePage = () => {
    return (
        <div style={{backgroundImage:`url(${bg})`}} className='bg-cover min-h-screen'>
            <div className=" bg-[#0606068a] min-h-screen">
                 <h1 className='flex justify-center items-center min-h-screen text-3xl md:text-4xl lg:text-6xl font-semibold font-sans text-white'>WelCome To DashBoard</h1>
            </div>
        </div>
    );
};

export default WelcomePage;