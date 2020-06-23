import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

//store 안의 state 값을 props로 연결해줍니다
//객체 리터럴 표현을 반환하기 위해서는 함수 본문을 괄호속에 넣음
const mapStateToProps = state => ({
    color : state.colorData.color,
    number : state.numberData.number
});

//위와 동일
// const ex = (state) => {
//     return(
//         color : state.colorData.color,
//         number : state.numberData.number
//     );
// }

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch하는 함수를 만들은 후, 이를 props로 연결함
*/

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.incremnet()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

//Counter 컴포넌트의 Container 컴포넌트
//Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 엮할을 합니다

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


export default CounterContainer;
