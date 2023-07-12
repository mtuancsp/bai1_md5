import React, { useState } from 'react';

// Hook custom để chia sẻ logic tăng số
const useCounter = (step) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + step);
    };

    return { count, increment };
};

const Counter1 = () => {
    const { count, increment } = useCounter(1);

    return (
        <div>
            <h2>Counter 1</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Add 1</button>
        </div>
    );
};

const Counter2 = () => {
    const { count, increment } = useCounter(2);

    return (
        <div>
            <h2>Counter 2</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Add 2</button>
        </div>
    );
};

const CustomCounter = () => {
    return (
        <div>
            <Counter1 />
            <Counter2 />
        </div>
    );
};

export default CustomCounter;
