import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/slices/userSlice";

const PrivateRoute = ({ children }) => {

    const user = useSelector(selectUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            if (user.accessToken === null) navigate('/signin');
        }
        else{
            navigate('/signin');
        }
    }, [user, navigate]);
    
    return children;
}

export default PrivateRoute;