import React, { useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        if (count === 0) {
            setTimeout(()=>{
                clearInterval(interval);
                alert("Time's up!");
            }, 200);
        }

        return () => {
            clearInterval(interval);
        };
    }, [count]);

    return (
        <div>
            <h2>Countdown Timer</h2>
            <p>{count}</p>
        </div>
    );
}

export default Timer;
