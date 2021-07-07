import React from 'react';
import CounterApp from '../components/CounterApp';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease } from '../modules/counter';

const CounterAppContainer = () => {
    //useSelector :: 간단하게 리듀서 모듈과 연결해 데이터를 받아올 수 있다.
    const count = useSelector((state: RootState) => state.counterReducer.counter);
    const dispatch =useDispatch(); //디스패치 함수를 가져옴

    const onIncrease = () => {
        dispatch(increase());
    };

    const onDecrease = () => {
        dispatch(decrease());
    };

    return (
        <CounterApp 
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    )
};

export default CounterAppContainer;