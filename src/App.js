import './App.css';
import React from "react";
import {Demo} from "./demo";
import Counter from "./counter";
import CalculatorComponent from "./calculator";
import StudentList from "./students";
import {Garage} from "./index";
import CRUD from "./crud";
import MyClock from "./clock";
import Timer from "./timer";
import Car from "./car";
import Search from "./search";
import {ActionLink} from "./action";
import {TestAPI} from "./testFirebase";
import {Route, Routes} from "react-router-dom";
import Header from "./components/header";
import HomePage from "./page/home";
import AdminPage from "./page/adminPage";
import UploadImage from "./upload";
import FormWithImageUpload from "./demoFormUploadImg";
import Login from "./page/login";
import Register from "./page/register";
import {ListProduct} from "./page/products/list";
import {ListStudent} from "./page/students/list";
import {CreateStudent} from "./page/students/create";
import {EditStudent} from "./page/students/edit";
import AnotherComponent from "./components/test";

function App() {

    return (
        <>
            {/*<Timer/>*/}
            {/*<Car/>*/}
            {/*<MyClock/>*/}
            {/*<Demo data="Tuan"/>*/}
            {/*<br/>*/}
            {/*<Counter/>*/}
            {/*<br/>*/}
            {/*<Garage/>*/}
            {/*<CalculatorComponent/>*/}
            {/*<StudentList/>*/}
            {/*<Search/>*/}
            {/*<TestAPI/>*/}
            {/*<ActionLink/>*/}
            {/*<FormWithImageUpload/>*/}

            <Routes>
                <Route path="/home" element={<HomePage/>}>
                    <Route path="" element={<ListProduct/>}/>
                    {/*<Route path="create" element={<CreateStudent/>}/>*/}
                    {/*<Route path="edit/:id" element={<EditStudent/>}/>*/}
                </Route>
                <Route path="/admin" element={<AdminPage/>}></Route>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </>
    );
}

export default App;

