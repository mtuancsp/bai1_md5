import axios from "axios";
import {loginSuccess} from "../redux/slices/userSlice";

const baseUrl = 'http://localhost:8080/jwt/signin';

export const login = async (data, dispatch) => {
    console.log(data);
    const res = await axios.post(baseUrl, data);
    dispatch(loginSuccess(res.data));
}