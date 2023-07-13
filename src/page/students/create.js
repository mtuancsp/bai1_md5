import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";
import './form.css';
import {useNavigate} from "react-router-dom";

export const validateSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        // .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid email")
        .required('Required'),
    score: Yup.number()
        .min(0, 'Must > 0!')
        .max(10, 'Must < 10!')
        .required('Required'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    action: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
});

export function CreateStudent() {
    const navigate = useNavigate();

    const handleSubmit = (data) => {
        axios
            .post("http://localhost:3001/students", data)
            .then((res) => {
                navigate("/");
            });
    };

    return (
        <>
            <h1>Create Student</h1>
            <Formik
                initialValues={
                    {name: '', score: '', description: '', action: ''}
                }
                validationSchema={validateSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <label>Name</label><br/>
                    <Field type="text" name="name"/>
                    <ErrorMessage name="name">
                        {errorMsg => <span className="error-message">{errorMsg}</span>}
                    </ErrorMessage><br/><br/>

                    <label>Score</label><br/>
                    <Field type="text" name="score"/>
                    <ErrorMessage name="score">
                        {errorMsg => <span className="error-message">{errorMsg}</span>}
                    </ErrorMessage><br/><br/>

                    <label>Description</label><br/>
                    <Field type="text" name="description"/>
                    <ErrorMessage name="description">
                        {errorMsg => <span className="error-message">{errorMsg}</span>}
                    </ErrorMessage><br/><br/>

                    <label>Action</label><br/>
                    <Field type="text" name="action"/>
                    <ErrorMessage name="action">
                        {errorMsg => <span className="error-message">{errorMsg}</span>}
                    </ErrorMessage><br/><br/>

                    <button className="btn-primary" type="submit">Submit</button>
                </Form>

            </Formik>
        </>
    );
}