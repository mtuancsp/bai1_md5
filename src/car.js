import { useState, useEffect } from "react";
export default function Car() {
    let [choice, setChoice] = useState({car:"Mercedes", color:"Black"});

    const handleSelectChange = (e) => {
        let {name, value} = e.target;
        setChoice({...choice,[name]:value});
    };

    return (
        <div>
            Select a car :
            <select name="car" onChange={handleSelectChange}>
                <option value="Mercedes">Mercedes</option>
                <option value="Nano">Nano</option>
                <option value="Vin">Vin</option>
                <option value="Fe">Fe</option>
            </select>
            Select a color :
            <select name="color" onChange={handleSelectChange}>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Red">Red</option>
                <option value="Yellow">Yellow</option>
            </select>
            <h2>Your selected: {choice.car} {choice.color}</h2>
        </div>
    );}