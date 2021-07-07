import React, { useState } from 'react';
import { Todos, Todo } from '../modules/todo';
import { useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../modules/todo';

type Props = {
    todos: Todos;
}

const TodoApp = ({ todos }: Props) => {
    //디스패치 함수에 파라미터로 액션객체를 낳아주면 스토어로 전달하여 액션을 발생시키고,
    //리듀서 모듈에 이 액션이 있다면 새로운 상태로 바뀌게 되는 것
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    };

    const handleClick = (id: number) => {
        dispatch(toggleTodo(id));
    };

    const handleRemove = (id: number) => {
        dispatch(removeTodo(id));
    };

    // const done = {
    //     TextDecoder: "line-through"
    // };

    return (
        <>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input value={input} onChange={(e) => setInput(e.target.value)} />
                    <button type="submit">등록</button>
                </form>
            </div>
            <div>
                {todos.map((todo) => {
                    const {id, text, isToggle} = todo;
                    return (
                        <div
                            key={id}
                            onClick={() => handleClick(id)}
                            //style={isToggle ? done : undefined}
                        >
                            {text}
                            <button onClick={() => handleRemove(id)}>삭제</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TodoApp;