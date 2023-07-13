import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import React, { useState } from "react";

export default function HomePage() {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (value) => {
        setSearchValue(value);
    };

    console.log(searchValue)
    return (
        <>
            <Header></Header>
            <hr />
            <Navbar searchValue={searchValue} handleSearch={handleSearch}></Navbar>
            <hr />
            <div style={{ display: "flex"}}>
                <div style={{ flex: 1, border: "1px solid black" }}>
                    <Sidebar></Sidebar>
                </div>
                <div style={{ flex: 3}}>
                    <div style={{width: "fit-content", margin: "auto"}}>
                        <Link to={"/"}>List Students</Link>&nbsp;|&nbsp;
                        <Link to={"/home/create"}>Add Students</Link>
                        <Outlet searchValue={searchValue}></Outlet>
                    </div>
                </div>
                <div style={{ flex: 1, border: "1px solid black" }}>
                    <Sidebar></Sidebar>
                </div>
            </div>
            <hr />
            <Footer></Footer>
        </>
    );
}

