import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logout} from "../redux/slices/userSlice";

export default function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

     const logoutUser = () => {
        try {
            dispatch(logout());
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
}