import {useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {validateSchema} from "./create";
import {useEffect, useState} from "react";

export function EditStudent() {
    const {id} = useParams();
    console.log(id);
    const [student, setStudent] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/students/" + id).then((res) => {
            setStudent(res.data);
        });
    }, [id]);

    useEffect(() => {
        console.log(student);
    }, [student]);

    const navigate = useNavigate();
    return (
        <>
        { student && (
            <div><h1>Create Student</h1>
                <Formik
                    initialValues={student}
                    // enableReinitialize={true}
                    validationSchema={validateSchema}
                    onSubmit={(values) => {
                        axios.put("http://localhost:3001/students/" + id, values).then((res) => {
                            navigate("/");
                        });
                    }}
                >
                    <Form>
                        <label>Name</label>
                        <Field type="text" name="name"/>
                        <ErrorMessage name="name">
                            {errorMsg => <span className="error-message">{errorMsg}</span>}
                        </ErrorMessage><br/>

                        <label>Score</label>
                        <Field type="text" name="score"/>
                        <ErrorMessage name="score">
                            {errorMsg => <span className="error-message">{errorMsg}</span>}
                        </ErrorMessage><br/>

                        <label>Description</label>
                        <Field type="text" name="description"/>
                        <ErrorMessage name="description">
                            {errorMsg => <span className="error-message">{errorMsg}</span>}
                        </ErrorMessage><br/>

                        <label>Action</label>
                        <Field type="text" name="action"/>
                        <ErrorMessage name="action">
                            {errorMsg => <span className="error-message">{errorMsg}</span>}
                        </ErrorMessage><br/>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik></div>
        )}



        </>
    );

}