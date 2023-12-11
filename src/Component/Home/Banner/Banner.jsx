
import { Swiper, SwiperSlide } from 'swiper/react';
//images
import img1 from '../../../assets/HomeBanner/1.jpg'
import img2 from '../../../assets/HomeBanner/2.jpg'
import img3 from '../../../assets/HomeBanner/3.jpg'
import img4 from '../../../assets/HomeBanner/4.jpg'
import img5 from '../../../assets/HomeBanner/5.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const Banner = () => {
    AOS.init()
    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide ><div className='h-[500px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${img1})` }}>
                <div className=' bg-[#0b0b1c85] h-[500px] flex justify-center items-center'>
                        <div data-aos="fade-down">
                            {/* <h1>Hello</h1> */}
                            <h1 className='text-white  text-center font-serif   mb-2 text-2xl md:text-3xl lg:text-6xl  uppercase' >Jonab Ali Mention</h1>
                            <h1 className='text-[#c8c7c7]  text-center font-serif lg:text-2xl text-xl ' >Ghasful And Most BeautiFul Building in Gulshan</h1>
                            <div className='hidden lg:flex items-center justify-center mt-2' >
                                <input type="text" className='w-2/3 p-3 rounded-l-xl pl-5' placeholder='Search Your Room..' />
                                <button className='py-[10px] px-5 rounded-r-xl bg-primary text-white font-sans font-semibold text-xl '>Search</button>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='h-[500px] bg-[#f8f8f8] bg-cover bg-center ' style={{ backgroundImage: `url(${img2})` }}>
                    <div className=' bg-[#0b0b1c85] h-[500px] flex justify-center items-center'>
                        <div data-aos="fade-down">
                            <h1 className='text-white  text-center font-serif text-2xl md:text-3xl lg:text-6xl mb-2 uppercase'>Jonab Ali Mention</h1>
                            <h1 className='text-[#c8c7c7]  text-center font-serif text-2xl '>Ghasful And Most BeautiFul Building in Gulshan</h1>
                            <div className='hidden lg:flex items-center justify-center mt-2'>
                                <input type="text" className='w-2/3 p-3 rounded-l-xl pl-5' placeholder='Search Your Room..' />
                                <button className='py-[10px] px-5 rounded-r-xl bg-primary text-white font-sans font-semibold text-xl'>Search</button>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='h-[500px] bg-[#f8f8f8] bg-cover bg-center ' style={{ backgroundImage: `url(${img3})` }}>
                <div className=' bg-[#0b0b1c85] h-[500px] flex justify-center items-center'>
                        <div data-aos="fade-down">
                            <h1 className='text-white  text-center font-serif text-2xl md:text-3xl lg:text-6xl mb-2 uppercase'>Jonab Ali Mention</h1>
                            <h1 className='text-[#c8c7c7]  text-center font-serif text-2xl '>Ghasful And Most BeautiFul Building in Gulshan</h1>
                            <div className='hidden lg:flex items-center justify-center mt-2'>
                                <input type="text" className='w-2/3 p-3 rounded-l-xl pl-5' placeholder='Search Your Room..' />
                                <button className='py-[10px] px-5 rounded-r-xl bg-primary text-white font-sans font-semibold text-xl'>Search</button>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='h-[500px] bg-[#f8f8f8] bg-cover bg-center ' style={{ backgroundImage: `url(${img4})` }}>
                <div className=' bg-[#0b0b1c85] h-[500px] flex justify-center items-center'>
                        <div data-aos="fade-down">
                            <h1 className='text-white  text-center font-serif text-2xl md:text-3xl lg:text-6xl mb-2 uppercase'>Jonab Ali Mention</h1>
                            <h1 className='text-[#c8c7c7]  text-center font-serif text-2xl '>Ghasful And Most BeautiFul Building in Gulshan</h1>
                            <div className='hidden lg:flex items-center justify-center mt-2'>
                                <input type="text" className='w-2/3 p-3 rounded-l-xl pl-5' placeholder='Search Your Room..' />
                                <button className='py-[10px] px-5 rounded-r-xl bg-primary text-white font-sans font-semibold text-xl'>Search</button>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='h-[500px] bg-[#f8f8f8] bg-cover bg-center ' style={{ backgroundImage: `url(${img5})` }}>
                <div className=' bg-[#0b0b1c85] h-[500px] flex justify-center items-center'>
                        <div data-aos="fade-down">
                            <h1 className='text-white  text-center font-serif text-2xl md:text-3xl lg:text-6xl mb-2 uppercase'>Jonab Ali Mention</h1>
                            <h1 className='text-[#c8c7c7]  text-center font-serif text-2xl '>Ghasful And Most BeautiFul Building in Gulshan</h1>
                            <div className='hidden lg:flex items-center justify-center mt-2'>
                                <input type="text" className='lg:w-2/3 p-3 rounded-l-xl pl-5' placeholder='Search Your Room..' />
                                <button className='py-[10px] px-5 rounded-r-xl bg-primary text-white font-sans font-semibold text-xl'>Search</button>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;