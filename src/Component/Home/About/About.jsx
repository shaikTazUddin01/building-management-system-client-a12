import img1 from '../../../assets/HomeBanner/1.jpg'
import img2 from '../../../assets/HomeBanner/2.jpg'
import img3 from '../../../assets/HomeBanner/3.jpg'
// import img4 from '../../../assets/HomeBanner/4.jpg'
import img5 from '../../../assets/HomeBanner/5.jpg'
import img6 from '../../../assets/HomeBanner/k.jpg'
import img7 from '../../../assets/HomeBanner/l.jpg'
import Divider from '../../Shared/Divider'
// import img5 from '../../../assets/HomeBanner/5.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    AOS.init();
    return (
        <div>
            <div className='mt-20 mb-10' >
                <Divider header={'About This Building'}></Divider>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 items-center mb-10'>
                <div className='w-full lg:w-1/2 grid grid-cols-3 px-10'>
                    <img src={img1} alt="" className='col-span-2 row-span-2 border w-full' data-aos="fade-up"
                        
                    />
                    <img src={img2} alt="" className='row-span-1 h-full border w-full' data-aos="fade-down"
                       
                    />
                    <img src={img3} alt="" className='w-full' data-aos="fade-left" 
                    />
                    <img src={img5} alt="" className='h-[140px] md:h-[200px] w-full border  row-span-1' data-aos="fade-right"
                        />
                    <img src={img6} alt="" className='h-[140px] md:h-[200px] w-full border row-span-1' data-aos="fade-up" />
                    <img src={img7} alt="" className='h-[140px] md:h-[200px] w-full border  row-span-1' data-aos="fade-left" 
                    />
                    {/* <img src={img4} alt=""className='col-span-3 row-span-1' /> */}
                </div>
                <div className='w-full lg:w-1/2 px-10' >
                    <h1 className='font-serif font-bold text-2xl md:text-4xl' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">Remarkable 2500 Sq Ft Ready Apartment For Rent In Gulshan</h1>
                    <p className='font-sans text-lg' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">Nestled in the prestigious neighborhood of Gulshan, this extraordinary 4-bedroom, 4-bathroom residential flat for rent offers an expansive 2500 sq ft of sophisticated living space. </p>
                    <p className='font-sans mt-4 text-lg' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">Beyond the allure of the interior, residents benefit from practical amenities such as a well-equipped kitchen, parking space, elevators, CCTV security, and electricity backup, ensuring a hassle-free and secure living experience.  </p>
                    <p className='font-sans mt-4 text-lg' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">Gulshan is renowned for its upscale lifestyle, and this rental property is strategically located to take full advantage of the area's amenities. Reputable educational institutions are within reach, offering top-notch learning opportunities for families. </p>
                </div>
            </div>
        </div>
    );
};

export default About;