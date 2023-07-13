import {useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {validateProduct} from "./create";
import {useEffect, useState} from "react";

export function EditProduct() {
    const {id} = useParams();
    console.log(id);
    const [product, setProduct] = useState(null);
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
                    setProducers(res.data);
                });
        }
        , []);
    useEffect(() => {
        axios.get("http://localhost:8080/smartphones/" + id, {
            headers: {
                Authorization: token,
            },
        }).then((res) => {
            setProduct(res.data);
        });
    }, [id]);

    useEffect(() => {
        console.log(product);
    }, [product]);

    return (
        <>
            <div><h1>Update Student</h1>
                <Formik
                    initialValues={product}
                    enableReinitialize={true}
                    validationSchema={validateProduct}
                    onSubmit={(values) => {
                        axios.put("http://localhost:8080/smartphones/" + id, values, {
                            headers: {
                                Authorization: token,
                            },
                        }).then((res) => {
                            navigate("/");
                        });
                    }}
                >
                    <Form>
                        <Field as="select" name="producer.id">
                            {producers.map((producer) => (
                                <option key={producer.id} value={producer.id}>
                                    {producer.name}
                                </option>
                            ))}
                        </Field><br/>
                        <br/>
                        <label>Model</label> <br/>
                        <Field type="text" name="model"/>
                        <ErrorMessage name="model">
                            {errorMsg => <span className="error-message">{errorMsg}</span>}
                        </ErrorMessage><br/>
                        <br/>
                        <label>Price</label> <br/>
                        <Field type="number" name="price"/>
                        <ErrorMessage name="price">
                            {errorMsg => <span className="error-message">{errorMsg}</span>}
                        </ErrorMessage><br/><br/>

                        <button className="btn-primary" type="submit">Submit</button>
                    </Form>
                </Formik></div>

        </>
    );

}