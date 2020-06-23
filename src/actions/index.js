/*
    action 객체를 만드는 액션 생성자들을 선언합니다
    여기서 () => ({}) 은 function() {return {} }와 동일한 의미입니다.
    scope 이슈와 관계없이 편의상 사용됩니다
*/
import * as types from './ActionTypes';

export const create = (color) =>({
    type : types.CREATE,
    color
});

export const remove = () =>({
    type : types.REMOVE
})

export const incremnet = (index) => ({
    type : types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type : types.DECREMENT,
    index
});

//다른 액션 생성자들과는 달리 파라미터를 가지고 있음
export const setColor = (index,color) => ({
    type : types.SET_COLOR,
    index,
    color
});
