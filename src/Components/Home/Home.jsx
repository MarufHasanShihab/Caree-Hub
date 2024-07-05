
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
// import Category from "../Category/Category";
// import Featured from "../Featured/Featured";
import Featured from './../Featured/Featured';


const Home = () => {
    return (
        <div className="container mx-auto pb-16">
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default Home;