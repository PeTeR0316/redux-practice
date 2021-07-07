const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;


export const increase = () => ({
    type: INCREASE
});

export const decrease = () => ({
    type: DECREASE
});


type counterAction = 
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>;

//이 모듈에서 관리 할 상태의 타입을 선언
export type counter = {
    counter: number;
}

export const initialState: counter = {
    counter : 0
}

export default function counterReducer(state = initialState, action:counterAction) {
    switch(action.type) {
        case INCREASE:
            return {counter: state.counter + 1};
        case DECREASE:
            return {counter: state.counter - 1};
        default:
            return state;
    }
}