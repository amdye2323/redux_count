import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, onIncrement,onDecrement,onSetColor}) =>{
    //매개변수들로 변수와 함수들을 받음
    return(
        <div
            className="Counter"//클래스 이름
            onClick={onIncrement}//클릭시 이벤트를 onIncreament 표현식            
            onContextMenu={//우클릭시 메뉴가 열리는 이벤트
                (e) => {
                    e.preventDefault();//이지만 메뉴가 열리지 않게 처리
                    onDecrement();//그리고 함수 선언식 실행
                }
            }
            onDoubleClick={onSetColor} //더블클릭시 색깔변경 표현식
            style={{background:color}}//jsx방식으로 style 초기화
            >
                {number}
        </div>
    );
};
    //변수들의 타입을 선언해줌
    //만약 props로 데이터를 받았는데 그것이 선언한 타입과 같지 않다면
    //경고를 보내줌
    Counter.propTypes = {
        number : PropTypes.number,
        color : PropTypes.string,
        onIncrement : PropTypes.func,
        onDcrement : PropTypes.func,
        onSetColor : PropTypes.func
    };

    //Counter 함수의 props값의 기본값들을 선언해줌
    Counter.defaultProps ={
        number : 0,
        color : 'black',
        //onIncrement : () => console.warn('onIncremnet'),
        onIncrement : function () {
            console.warn('ddd')
        },
        onDecrement : () => console.warn('onDecrement'),
        onSetColor : () => console.warn('onSetCOlor')
    };

export default Counter;
