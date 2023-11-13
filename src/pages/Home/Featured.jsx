import SectionTitle from "../../components/SectionTitle";
import featuredImage from '../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <section className='featured bg-fixed text-white  bg-opacity-70 bg-cover pt-5'>
            <SectionTitle
            subHeading='Check it out'
            heading='From our menu'
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 px-36 pb-36">
                <div className="p-20">
                    <img src={featuredImage} alt="" />
                </div>
                <div>
                    <p className="text-xl">November 12,2023</p>
                    <p className="uppercase text-2xl">where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi exercitationem mollitia iusto, incidunt blanditiis beatae et consequuntur voluptatum culpa qui eveniet ab perferendis temporibus molestiae neque quos nulla minima dolor!</p>
                    <button className=" uppercase border-0 py-2 px-5 rounded border-b-4 mt-4 hover:bg-black">read more</button>
                </div>
            </div>
            
        </section>
    );
};

export default Featured;