import {useState} from "react";

export default function MyClock() {
    let [time, setTime] = useState("");
    //update time per second
    function updateTime(){
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(updateTime, 1000);

    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
}