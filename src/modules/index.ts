import { combineReducers  } from 'redux';
import todoReducer from './todo';

//여러 리듀서 모듈들을 하나로 병합
const rootReducer = combineReducers({
    todoReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;