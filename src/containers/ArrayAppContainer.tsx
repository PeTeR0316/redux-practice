import React from 'react';
import ArrayApp from '../components/ArrayApp';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

const ArrayAppContainer = () => {
    //useSelector :: 간단하게 리듀서 모듈과 연결해 데이터를 받아올 수 있다.
    const arrays = useSelector((state: RootState) => state.arrayReducer);
    return <ArrayApp arrays={arrays} />;
}

export default ArrayAppContainer