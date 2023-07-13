import {Link, useNavigate} from "react-router-dom";
import { Field, Form, Formik } from "formik";
import {useDispatch, useSelector} from "react-redux";
import { loginSuccess } from "../redux/slices/userSlice";
import axios from "axios";
import React, {useEffect, useState} from "react";

const baseUrl = 'http://localhost:8080/jwt/signin';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const [errorMessage, setErrorMessage] = useState("");

    const userState = useSelector((state) => state.user.user);
    console.log(userState);

    useEffect(() => {
    if (userState) navigate("/home");
    }, []);

    const login = async (data) => {
        try {
            const res = await axios.post(baseUrl, data);
            console.log(res.data);
            if (res.data.token) {
                dispatch(loginSuccess(res.data));
                navigate("/home");
            } else {
                setErrorMessage("Wrong email or password.");
            }
        } catch (error) {
            console.log(error);
            setErrorMessage("An error occurred during login.");
        }
    };


    return (
        <>
            <Link to="/home">Home</Link>
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={login}
                    >
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <Field type="email" className="form-control col-12" id="email" name="email" placeholder="Enter email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <Field type="password" className="form-control col-12" id="password" name="password" placeholder="Password" />
                            </div>
                            {errorMessage && (
                                <div className="alert alert-danger" role="alert">
                                    {errorMessage}
                                </div>
                            )}
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    );

}
