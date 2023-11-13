import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";



const Home = () => {
    
    return (
        <div>
            <Banner/>
            <Category></Category>
            <PopularMenu/>
            <Featured></Featured>
            <Testimonials/>
        </div>
    );
};

export default Home;