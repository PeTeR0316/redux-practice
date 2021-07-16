import React, { useState } from 'react';
import { Arrays, Array } from '../modules/array';
import { useDispatch } from 'react-redux';
import { arrayAdd, arrayRemove } from '../modules/array';

//arrays 속성의 타입 지정
type ArrayProps = {
    arrays: Arrays;
}

const ArrayApp = ({ arrays }: ArrayProps) => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("")

    const arrayInsert = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(arrayAdd(input));
        setInput("");
    }

    const arrayDelete = (id: number) => {
        dispatch(arrayRemove(id));
    }

    return (
        <>
            <div>
                <form onSubmit={(e) => arrayInsert(e)}>
                    <input type='text' value={input} onChange = {(e) => setInput(e.target.value)} />
                    <button type="submit">등록</button>
                </form>
            </div>
            <div>
                {arrays.map((array, index) => {
                    const {id, text} = array;
                    return (
                        <div key={id}>
                            {id}({index}) : {text}
                            <button onClick={() => arrayDelete(id)}>삭제</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ArrayApp;