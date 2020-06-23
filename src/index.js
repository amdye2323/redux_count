import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

//redux 관련 불러오기
import { createStore } from 'redux';
import reducers from './reducers';
//Provider는 react-redux 라이브러리에 내장되어있는 리액트 앱에 store를
//손쉽게 연동할수 있도록 도와주는 컴포넌트
import { Provider } from 'react-redux';

//store 생성
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  //Provider에 store를 Props로 전달
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
