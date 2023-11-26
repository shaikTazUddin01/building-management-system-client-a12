
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

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const Banner = () => {
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
                    <div className=' bg-[#0b0b1c85] h-[500px]'>

                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='h-[500px] bg-[#f8f8f8] bg-cover bg-center ' style={{ backgroundImage: `url(${img2})` }}>
                    <div className=' bg-[#0b0b1c85] h-[500px]'>

                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='h-[500px] bg-[#f8f8f8] bg-cover bg-center ' style={{ backgroundImage: `url(${img3})` }}>
                    <div className=' bg-[#0b0b1c85] h-[500px]'>

                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='h-[500px] bg-[#f8f8f8] bg-cover bg-center ' style={{ backgroundImage: `url(${img4})` }}>
                    <div className=' bg-[#0b0b1c85] h-[500px]'>

                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='h-[500px] bg-[#f8f8f8] bg-cover bg-center ' style={{ backgroundImage: `url(${img5})` }}>
                    <div className=' bg-[#0b0b1c85] h-[500px]'>

                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;