import React, { CSSProperties } from "react";
import todos, { Todo } from '../modules/todos';

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

function TodoItem({todo, onToggle, onRemove}: TodoItemProps) {
    //CSSProperties은 style 객체의 타입
    const textStyle: CSSProperties = {
        textDecoration: todo.done ? 'line-throught' : ' none'
    };
    
    const removeStyle: CSSProperties = {
        marginLeft: 8,
        color: 'red'
    };

    const handleToggle = () => {
        onToggle(todo.id);
    };

    const handleRemove = () => {
        onRemove(todo.id);
    };

    return (
        <li>
            <span onClick={handleToggle} style={textStyle}>
                {todo.text}
            </span>
            <span onClick={handleRemove} style={removeStyle}>
                (X)
            </span>
        </li>
    )


}

export default TodoItem;