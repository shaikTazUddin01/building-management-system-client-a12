
import Divider from '../../Shared/Divider';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './room.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import img from '../../../assets/HomeBanner/5.jpg'
import img2 from '../../../assets/HomeBanner/k.jpg'
import img3 from '../../../assets/HomeBanner/m.jpg'
import img4 from '../../../assets/HomeBanner/l.jpg'
import img5 from '../../../assets/HomeBanner/o.jpg'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const FeatureRoom = () => {

    return (
        <div className='pb-20 p-3'>
            <div>
                <div className='mt-20 mb-10' >
                    <Divider header={'The Best of Rooms oF Janab Ali Mention'}></Divider></div>

            </div>
            <div className=''>
                <Swiper
                   effect={'coverflow'}
                   grabCursor={true}
                   centeredSlides={true}
                   slidesPerView={'auto'}
                   coverflowEffect={{
                     rotate: 50,
                     stretch: 0,
                     depth: 100,
                     modifier: 1,
                     slideShadows: true,
                   }}
                   autoplay={{
                     delay: 1500,
                     disableOnInteraction: false,
                   }}
                   pagination={true}
                   modules={[EffectCoverflow, Pagination, Autoplay]}
                   className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={
                            "card bg-base-100  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]"
                        } >
                            <div >
                                <figure className='rounded-t-2xl'><img src={img} alt="Shoes" className='h-[250px] w-full' /></figure>
                            </div>
                            <div className="px-5 py-5">
                                <div className="flex justify-between">
                                    <p className="text-xl font-sans font-semibold ">ApartMent No. : <span className="text-blue-600">01</span></p>
                                    <p className="text-xl font-sans font-semibold ">Rent :
                                        <span className="text-red-600"> 15000৳</span> </p>

                                </div>
                                <div className="flex justify-between mt-2">
                                    <p className="text-xl font-sans font-semibold ">Block No. : <span className="text-blue-600">A Block</span></p>
                                    <p className="text-xl font-sans font-semibold ">Floor No. :
                                        <span className="text-blue-600"> 01</span> </p>
                                </div>

                                <div>
                                    < p className='mt-2'>A beautiful room can make a significant difference in your living experience. When considering renting a room, in addition to its aesthetic appeal.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                                       <SwiperSlide>
                        <div className={
                            "card bg-base-100  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]"
                        } >
                            <div >
                                <figure className='rounded-t-2xl'><img src={img2} alt="Shoes" className='h-[250px] w-full' /></figure>
                            </div>
                            <div className="px-5 py-5">
                                <div className="flex justify-between">
                                    <p className="text-xl font-sans font-semibold ">ApartMent No. : <span className="text-blue-600">01</span></p>
                                    <p className="text-xl font-sans font-semibold ">Rent :
                                        <span className="text-red-600"> 15000৳</span> </p>

                                </div>
                                <div className="flex justify-between mt-2">
                                    <p className="text-xl font-sans font-semibold ">Block No. : <span className="text-blue-600">B Block</span></p>
                                    <p className="text-xl font-sans font-semibold ">Floor No. :
                                        <span className="text-blue-600"> 01</span> </p>
                                </div>

                                <div>
                                    < p className='mt-2'>A beautiful room can make a significant difference in your living experience. When considering renting a room, in addition to its aesthetic appeal.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={
                            "card bg-base-100  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]"
                        } >
                            <div >
                                <figure className='rounded-t-2xl'><img src={img3} alt="Shoes" className='h-[250px] w-full' /></figure>
                            </div>
                            <div className="px-5 py-5">
                                <div className="flex justify-between">
                                    <p className="text-xl font-sans font-semibold ">ApartMent No. : <span className="text-blue-600">04</span></p>
                                    <p className="text-xl font-sans font-semibold ">Rent :
                                        <span className="text-red-600"> 15000৳</span> </p>

                                </div>
                                <div className="flex justify-between mt-2">
                                    <p className="text-xl font-sans font-semibold ">Block No. : <span className="text-blue-600">D Block</span></p>
                                    <p className="text-xl font-sans font-semibold ">Floor No. :
                                        <span className="text-blue-600"> 02</span> </p>
                                </div>

                                <div>
                                    < p className='mt-2'>A beautiful room can make a significant difference in your living experience. When considering renting a room, in addition to its aesthetic appeal.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={
                            "card bg-base-100  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]"
                        } >
                            <div >
                                <figure className='rounded-t-2xl'><img src={img4} alt="Shoes" className='h-[250px] w-full' /></figure>
                            </div>
                            <div className="px-5 py-5">
                                <div className="flex justify-between">
                                    <p className="text-xl font-sans font-semibold ">ApartMent No. : <span className="text-blue-600">05</span></p>
                                    <p className="text-xl font-sans font-semibold ">Rent :
                                        <span className="text-red-600"> 16000৳</span> </p>

                                </div>
                                <div className="flex justify-between mt-2">
                                    <p className="text-xl font-sans font-semibold ">Block No. : <span className="text-blue-600">E Block</span></p>
                                    <p className="text-xl font-sans font-semibold ">Floor No. :
                                        <span className="text-blue-600"> 03</span> </p>
                                </div>

                                <div>
                                    < p className='mt-2'>A beautiful room can make a significant difference in your living experience. When considering renting a room, in addition to its aesthetic appeal.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={
                            "card bg-base-100  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]"
                        } >
                            <div >
                                <figure className='rounded-t-2xl'><img src={img5} alt="Shoes" className='h-[250px] w-full' /></figure>
                            </div>
                            <div className="px-5 py-5">
                                <div className="flex justify-between">
                                    <p className="text-xl font-sans font-semibold ">ApartMent No. : <span className="text-blue-600">05</span></p>
                                    <p className="text-xl font-sans font-semibold ">Rent :
                                        <span className="text-red-600"> 16500৳</span> </p>

                                </div>
                                <div className="flex justify-between mt-2">
                                    <p className="text-xl font-sans font-semibold ">Block No. : <span className="text-blue-600">E Block</span></p>
                                    <p className="text-xl font-sans font-semibold ">Floor No. :
                                        <span className="text-blue-600"> 03</span> </p>
                                </div>

                                <div>
                                    < p className='mt-2'>A beautiful room can make a significant difference in your living experience. When considering renting a room, in addition to its aesthetic appeal.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
}
// export default UpCameIng;
export default FeatureRoom;