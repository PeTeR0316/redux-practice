const ARRAY_ADD = 'array/ARRAY_ADD' as const;
const ARRAY_REMOVE = 'array/ARRAY_REMOVE' as const;

export const arrayAdd = (text : string) => ({
    type : ARRAY_ADD,
    payload : text
});

export const arrayRemove = (id : number) => ({
    type : ARRAY_REMOVE,
    payload : id
});

type ArrayAction = 
    | ReturnType<typeof arrayAdd>
    | ReturnType<typeof arrayRemove>;

export type Array = {
    id : number;
    text : string;
}

export type Arrays = Array[];

export const initialState : Arrays = [
    {
        id: 0,
        text: "첫번째 리스트"
    },
    {
        id: 1,
        text: "두번째 리스트"
    }
]

export default function arrayReducer(state= initialState, action : ArrayAction) : Arrays {
    switch(action.type) {
        case ARRAY_ADD :
            const id = Math.max(...state.map((array) => array.id)) + 1;
            
            return state.concat({
                    id,
                    text : action.payload,
                })
        case ARRAY_REMOVE :
            return state.filter((array) => {
                return array.id !== action.payload
            });
        default :
            return state;
    }
}