import React from 'react';
import TodoApp from '../components/TodoApp';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

const TodoAppContainer = () => {
    //useSelector :: 간단하게 리듀서 모듈과 연결해 데이터를 받아올 수 있다.
    const todos = useSelector((state: RootState) => state.todoReducer);
    return <TodoApp todos={todos} />;
};

export default TodoAppContainer