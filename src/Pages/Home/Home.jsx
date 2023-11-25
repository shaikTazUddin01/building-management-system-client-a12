import About from "../../Component/Home/About/About";
import Banner from "../../Component/Home/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <div className="px-20">
           <About></About>
           {/* <button className="btn btn-success absolute bg-scroll right-10 bottom-0">Cuppon</button> */}
           </div>
        </div>
    );
};

export default Home;