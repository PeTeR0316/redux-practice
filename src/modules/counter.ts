//액션 타입 선언
//아래처럼 입력 시 모둘과 액션 이름이 중복되는 것을 방지 할  수 있다.
const INCREASE = 'counter/INCREASE' as const;
const DECREASE =  'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

//액션 생성 함수 선언
export const increase = () => ({
    type: INCREASE
});

export const decrease = () => ({
  type: DECREASE
});

export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff
});

//모든 액션 객체들에 대한 타입을 준비
type CounterAction = 
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

  //이 리덕스 모듈에서 관리 할 상태의 타입을 선언
  type CounterState = {
    count: number;
  }

  //초기상태를 선언
  const initialState: CounterState = {
    count: 0
  };

  //리듀서를 작성
  //리듀서에서는 state와 함수의 반환값이 일치하도록 작성
  //액션에서는 방금 만든 CounterAction을 타입으로 설정
  function counter(
    state: CounterState = initialState,
    action: CounterAction
  ): CounterState {
    switch (action.type) {
      case INCREASE:
        return { count: state.count + 1 };
      case DECREASE: 
        return { count: state.count - 1 };
      case INCREASE_BY:
        return { count: state.count + action.payload };
      default:
        return state;
    }
  }

  export default counter