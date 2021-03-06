//import * as types from '../actions/ActionTypes';
import number from './number';
import color from './color';

import { combineReducers } from 'redux';
/*
//초기상태를 정의합니다
const initialState = {
    color : 'black',
    number: 0
};


    리듀서 함수를 정의합니다. 리듀서는 state와 action을 파라미터로 받습니다
    state가 undefined 일때 (스토어 생성시) state의 기본값을
    initialState로 사용합니다 . action.type에 따라 다른 작업을 아혹
    새 상태를 만들어서 반환합니다.
    이 때 주의 할 점은 state를 직접 수정하면 안되고
    기존 상태값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환함


function counter(state = initialState,action){
    switch(action.types) {
        case types.INCREMENT:
            return{
                ...state,
                number : state.number +1
            };
        case types.DECREMENT:
            return{
                ...state,
                number : state.number -1
            };
        case types.SET_COLOR:
            return{
                ...state,
                color : action.color
            };
        default:
            return state;
    }
};
*/

const reducers = combineReducers({
    numberData : number,
    colorData : color
});

export default reducers;