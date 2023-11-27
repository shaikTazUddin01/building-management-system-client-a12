import img2 from '../../../assets/HomeBanner/2.jpg'
const About = () => {
    return (
        <div>
            <div className=' my-10'>
                <h1 className='font-serif font-bold text-4xl text-center '>About </h1>

            </div>
            <div className='flex gap-10 items-center mb-10'>
                <div className='w-1/2'>
                    <img src={img2} alt="" />
                </div>
                <div className='w-1/2'>
                    <h1 className='font-serif font-bold text-4xl'>Remarkable 2500 Sq Ft Ready Apartment For Rent In Gulshan</h1>
                    <p className='font-sans'>Nestled in the prestigious neighborhood of Gulshan, this extraordinary 4-bedroom, 4-bathroom residential flat for rent offers an expansive 2500 sq ft of sophisticated living space. </p>
                    <p className='font-sans mt-4'>Beyond the allure of the interior, residents benefit from practical amenities such as a well-equipped kitchen, parking space, elevators, CCTV security, and electricity backup, ensuring a hassle-free and secure living experience.  </p>
                    <p className='font-sans mt-4'>Gulshan is renowned for its upscale lifestyle, and this rental property is strategically located to take full advantage of the area's amenities. Reputable educational institutions are within reach, offering top-notch learning opportunities for families. </p>
                </div>
            </div>
        </div>
    );
};

export default About;