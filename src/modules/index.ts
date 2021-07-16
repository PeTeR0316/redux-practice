import { combineReducers  } from 'redux';
import todoReducer from './todo';
import counterReducer from './counter';
import arrayReducer from './array';

//여러 리듀서 모듈들을 하나로 병합
const rootReducer = combineReducers({
    todoReducer,
    counterReducer,
    arrayReducer
});

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;