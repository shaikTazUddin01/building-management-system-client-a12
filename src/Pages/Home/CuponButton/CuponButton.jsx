import { useState, useEffect } from 'react';
import './CouponButton.css';
import couponsImg from '/coupons2.gif'
import useCupon from '../../../Hooks/useCupon/useCupon';
const CuponButton = () => {
    const [showButton, setShowButton] = useState(true);
    const [showCouponButton, setShowCouponButton] = useState(true)
    const [cupon] = useCupon()
    // console.log(cupon)
    useEffect(() => {
        setShowButton(false);
    }, []);
    console.log(showCouponButton)
    // Show the button when scrolling
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setShowButton(scrollY > 0); // Adjust the scroll threshold as needed
    };

    // Attach the scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`coupon-button ${showButton ? 'visible' : 'hidden'} `}>
            {/* Your button content goes here */}
            <div className={`${!showCouponButton ? 'hidden' : 'visible'}`}>
                {/* close button */}
                <h1 onClick={() => setShowCouponButton(false)} className='absolute w-full flex justify-end'><span className='bg-slate-300 px-2 text-red-600 font-bold rounded-tr-md  w-[24px]'>X</span></h1>
            </div>
            {/* open button */}
            <button className='' onClick={() => setShowCouponButton(true)}>
                {
                    !showCouponButton ?
                        <div >
                            <img src={couponsImg} alt="" className='h-[80px] z-50' />
                            <span className='font-sans font-semibold'>Coupon</span>
                        </div>
                        :
                        <div className='bg-[#040404c2] rounded-lg px-5 py-2 shadow-lg shadow-blue-500'>

                            <div className="overflow-x-auto">
                                <table className="table text-white">
                                    {/* head */}
                                    <thead>
                                        <tr className='text-white text-lg'>
                                            <th>Code</th>
                                            <th>Discount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cupon?.map(item => {
                                            return (
                                                <tr key={item?._id}>
                                                    <td>{item?.cuponCode}</td>
                                                    <td>{item?.discount}%</td>
                                                </tr>

                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                }
            </button>
        </div>
    );
};

export default CuponButton;
