import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";
import './form.css';
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
        .max(10, 'Must < 10!')
        .required('Required')
});

export function CreateStudent() {
    const navigate = useNavigate();
    const [producers, setProducers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/producers")
            .then((res) => {
                setProducers(res.data);});
    }
    , []);
    const handleSubmit = (data) => {
        axios
            .post("http://localhost:3001/students", data)
            .then((res) => {
                navigate("/");
            });
    };

    return (
        <>
            <h1>Create Producer</h1>
            <Formik
                initialValues={
                    {producer: {}, model: '', price: ''}
                }
                validationSchema={validateProduct}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Field as="select" name="producer">
                        <option value="">Select a producer</option>
                        {producers.map((producer) => (
                            <option key={producer.id} value={producer}>
                                {producer.name}
                            </option>
                        ))}
                    </Field>

                    <label>Score</label>
                    <Field type="text" name="score"/>
                    <ErrorMessage name="score">
                        {errorMsg => <span className="error-message">{errorMsg}</span>}
                    </ErrorMessage><br/>

                    <button type="submit">Submit</button>
                </Form>

            </Formik>
        </>
    );
}