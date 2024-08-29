import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Toaster } from "react-hot-toast";
import Spinner from "../Spinner/Spinner";


const Root = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <div>
            <Header></Header>
            {isLoading? <Spinner/>: <Outlet/>}
            <Footer></Footer>
            <div><Toaster/></div>
        </div>
    );
};

export default Root;