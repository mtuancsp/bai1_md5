import React from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import UploadImageField from "./upload";

function FormWithImageUpload() {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik initialValues={{ name: "", description: "", imageUrl: "" }} onSubmit={handleSubmit}>
            <Form>
                <div>
                    <label>Name:</label>
                    <Field name="name" />
                </div>
                <div>
                    <label>Description:</label>
                    <Field name="description" />
                </div>
                <div>
                    <label>Image:</label>
                    <Field name="imageUrl" as={UploadImageField} />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}

export default FormWithImageUpload;
