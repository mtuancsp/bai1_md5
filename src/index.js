import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import Swal from "sweetalert2";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }

    changeColor = () => {
        this.setState({color: "blue"});
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p style={{color: this.state.color}}>
                    It is a {this.state.color}&nbsp;
                    {this.state.model}&nbsp;
                    from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >Change color
                </button>
            </div>
        );
    }
}

export class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car/>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
