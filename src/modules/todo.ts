//액션 타입생성
const ADD_TODO = 'todo/ADD_TODO' as const
const REMOVE_TODO = 'todo/REMOVE_TODO' as const
const TOGGLE_TODO = 'todo/TOGGLE_TODO' as const

//액션 생성함수
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: text
});

export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: id
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id
});


//모든 액션객체들에 대한 타입을 준비
//명시 안 해줄 경우 리듀서에서 action에 any타입으로 명시
/*
type CounterAction = {
    type: 'todo/ADD_TODO';
    payload: string;
} | {
    type: 'todo/REMOVE_TODO';
    payload: number;
} | {
    type: 'todo/TOGGLE_TODO';
    payload: number;
}
*/
type TodoAction = 
    | ReturnType<typeof addTodo>
    | ReturnType<typeof removeTodo>
    | ReturnType<typeof toggleTodo>


//초기화
export type Todo = {
    id: number;
    text: string;
    isToggle: boolean;
};

export type Todos = Todo[];

export const initialState: Todos = [
    {
        id: 0,
        text: "타입스크립트 투두리스트",
        isToggle: false
    },
    {
        id: 1,
        text: "타입스크립트 리덕스",
        isToggle: false
    },
];


//리듀서 선언
//리듀서는 export default로 내보내야 함
export default function todoReducer(state = initialState, action:TodoAction): Todos {
    switch(action.type) {
        case ADD_TODO: 
            const id = Math.max(...state.map((todo) => todo.id)) + 1; 
            return state.concat({ 
                id, text: action.payload, isToggle: false 
            });
        case REMOVE_TODO:
            return state.filter((todo) => {return todo.id !== action.payload});
        case TOGGLE_TODO:
            return state.map((todo) => {
                return todo.id === action.payload ? {...todo, isToggle: !todo.isToggle} : todo
            });
        default :
            return state;
    }
};
