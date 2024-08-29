import PropTypes from "prop-types"
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    console.log(loading)
    if(loading){
        return <Spinner/>
    }
   if(user){
    return children
   }
    
   return <Navigate to="/login" state={location.pathname} />
   
   
};

PrivateRoute.propTypes ={
    children: PropTypes.node
}
export default PrivateRoute;