import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export const validateProduct = Yup.object().shape({
    model: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        // .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid email")
        .required('Required'),
    price: Yup.number()
        .min(0, 'Must > 0!')
        .max(10000, 'Too Expensive!')
        .required('Required')
});

export function CreateProduct() {
    const navigate = useNavigate();
    const [producers, setProducers] = useState([]);
    const token = "Bearer " + localStorage.getItem("token");

    useEffect(() => {
        axios.get("http://localhost:8080/producers/list", {
            headers: {
                Authorization: token,
            },
        })
            .then((res) => {
                setProducers(res.data);});
    }
    , []);

    const handleSubmit = (data) => {
        axios
            .post("http://localhost:8080/smartphones", data, {
                headers: {
                    Authorization: token,
                },
            })
            .then((res) => {
                console.log(data);
                navigate("/");
            });
    };

    return (
        <>
            <h1>Create Product</h1>
            <Formik
                initialValues={
                    {producer: {id: 1}, model: '', price: 0}
                }
                validationSchema={validateProduct}
                onSubmit={handleSubmit}
            >
                <Form>
                    <label>Producer</label><br/>
                    <Field as="select" name="producer.id">
                        {producers.map((producer) => (
                            <option key={producer.id} value={producer.id}>
                                {producer.name}
                            </option>
                        ))}
                    </Field><br/>
                    <br/>
                    <label>Model</label><br/>
                    <Field type="text" name="model"/>
                    <ErrorMessage name="model">
                        {errorMsg => <span className="error-message">{errorMsg}</span>}
                    </ErrorMessage><br/>
                    <br/>
                    <label>Price</label><br/>
                    <Field type="number" name="price"/>
                    <ErrorMessage name="price">
                        {errorMsg => <span className="error-message">{errorMsg}</span>}
                    </ErrorMessage><br/><br/>

                    <button className="btn-primary" type="submit">Submit</button>
                </Form>

            </Formik>
        </>
    );
}