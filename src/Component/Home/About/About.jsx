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
                    <h1 className='font-serif font-bold text-4xl'>About</h1>
                    <p className='font-sans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero aut rem facere excepturi quisquam neque esse iure. Ad soluta sit obcaecati, vitae error reprehenderit voluptate minima veniam labore temporibus ut nemo quia inventore. Fugiat ipsa, maxime blanditiis qui natus, ab consectetur consequuntur quos, nesciunt necessitatibus sunt odit sapiente omnis aliquam.</p>
                </div>
            </div>
        </div>
    );
};

export default About;