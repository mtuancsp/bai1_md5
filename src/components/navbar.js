import {Link, useNavigate} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/slices/userSlice";
import {setSearchValue} from "../redux/slices/searchSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.search.searchValue);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const userState = useSelector((state) => state.user.user);
    console.log(userState);

    const handleInputChange = (event) => {
        dispatch(setSearchValue(event.target.value));
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h1>
                            <Link to="/">Index</Link>&nbsp;|&nbsp;
                            <Link to="/admin">Admin</Link>&nbsp;|&nbsp;
                        </h1>
                    </div>

                    {userState &&
                        <div className="col-sm-6 ml-auto">
                            <input
                                type="text"
                                style={{fontSize: "20px"}}
                                placeholder="Search"
                                value={searchValue}
                                onChange={handleInputChange}
                            />&nbsp;|&nbsp;
                            <Link style={{fontSize: "20px"}} to="#">{userState.email}</Link>&nbsp;|&nbsp;
                            <button className="btn btn-danger" onClick={() => {
                                dispatch(logout());
                                navigate("/")
                            }}>Logout
                            </button>
                        </div>}
                </div>
            </div>
        </>
    );
}


