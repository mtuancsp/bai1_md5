import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useFormikContext } from "formik";

function UploadImageField({ name }) {
    const { setFieldValue } = useFormikContext();

    const firebaseConfig = {
        apiKey: "AIzaSyBoTj1_SNijRYo4DGugLqnCKWOy2pF7hWk",
        authDomain: "casemd4-3a742.firebaseapp.com",
        projectId: "casemd4-3a742",
        storageBucket: "casemd4-3a742.appspot.com",
        messagingSenderId: "149528641745",
        appId: "1:149528641745:web:852427a18e21880305c5f0",
        measurementId: "G-HKY5QFR16C"
    };

    const storage = getStorage(initializeApp(firebaseConfig));

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const handleImageUpload = (url) => {
        setFieldValue(name, url);
    };

    const changeHandler = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        const fileUrl = URL.createObjectURL(file);
        setPreviewUrl(fileUrl);
    };

    const handleSubmission = () => {
        const storageRef = ref(storage, "md5/" + selectedFile.name);

        uploadBytes(storageRef, selectedFile)
            .then((snapshot) => {
                console.log("File uploaded successfully");
                getDownloadURL(snapshot.ref)
                    .then((url) => {
                        handleImageUpload(url);
                    })
                    .catch((error) => {
                        console.error("Error getting file URL:", error);
                    });
            })
            .catch((error) => {
                console.error("Error uploading file:", error);
            });
    };

    return (
        <div>
            <input type="file" name="file" onChange={changeHandler} />

            {selectedFile && (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>Image URL: <a href={previewUrl}>{previewUrl}</a></p>
                    <img src={previewUrl} alt="Preview" style={{ maxWidth: "500px" }} />
                </div>
            )}

            <div>
                <button type="button" onClick={handleSubmission}>
                    Upload
                </button>
            </div>
        </div>
    );
}

export default UploadImageField;
