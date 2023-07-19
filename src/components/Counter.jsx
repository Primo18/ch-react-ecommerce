import { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>Counter</h1>
            <h2>Current value: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
        </>
    );
};

export default Counter;