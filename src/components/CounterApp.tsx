import React from 'react';

type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
}


const CounterApp = ({count, onIncrease, onDecrease}: CounterProps) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default CounterApp;