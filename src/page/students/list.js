import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

export function ListStudent() {
    const searchValue = useSelector((state) => state.search.searchValue);
    console.log(searchValue)
    const [list, setList] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({ search: "" });

    let navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3001/students").then((res) => {
            setList(res.data);
        });
    }, []);

    const handleSearch = (event) => {
        setSearchParams({ search: event.target.value });
    };

    const deleteStudent = (id) => {
        axios.delete("http://localhost:3001/students/" + id).then((res) => {
            if (res.status === 200) {
                setList(list.filter((student) => student.id !== id));
            }
            else {
                alert("Delete failed");
            }
        });
    };

    const filteredList = list.filter((student) =>
        student.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <>
            <h1>List Students</h1>
            <div>
                <input
                    type="text"
                    value={searchParams.get("search")}
                    onChange={handleSearch}
                    placeholder="Search by name"
                />
            </div>
            <br />
            <table border={1}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Description</th>
                    <th>Action</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {filteredList.map((student) => {
                    return (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.score}</td>
                            <td>{student.description}</td>
                            <td>{student.action}</td>
                            <td>
                                <Link to={"edit/" + student.id}>Edit</Link>
                            </td>
                            <td>
                                <button onClick={() => window.confirm("Are you sure you want to delete this student?") && deleteStudent(student.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}
