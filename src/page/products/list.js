import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

export function ListProduct() {
    const [list, setList] = useState([]);
    const [searchParams, setSearchParams] = useState("");
    const searchValue = useSelector((state) => state.search.searchValue);
    console.log(searchValue)

    const token = "Bearer " + localStorage.getItem("token");

    useEffect(() => {
        axios
            .get("http://localhost:8080/smartphones/list", {
                headers: {
                    Authorization: token,
                },
            })
            .then((res) => {
                console.log(res.data);
                setList(res.data.content);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleSearch = (event) => {
        setSearchParams(event.target.value);
    };

    const deleteStudent = (id) => {
        axios.delete("http://localhost:8080/smartphones/" + id , {
            headers: {
                Authorization: token,
            },
        }).then((res) => {
                setList(list.filter((product) => product.id !== id));
        });
    };

    let filteredList = list.filter((product) =>
        product.producer.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        product.producer.name.toLowerCase().includes(searchParams.toLowerCase())
    );


    return (
        <div>
            <h1>List Students</h1>
            {/*<div>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        value={searchParams}*/}
            {/*        onChange={handleSearch}*/}
            {/*        placeholder="Search by name"*/}
            {/*    />*/}
            {/*</div>*/}
            <br />
            <table border={1}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Producer</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {filteredList.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.producer.name}</td>
                            <td>{product.model}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={"edit/" + product.id}>Edit</Link>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => window.confirm("Are you sure you want to delete this product?") && deleteStudent(product.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
