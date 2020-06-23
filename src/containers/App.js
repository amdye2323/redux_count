import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';


class App extends Component{
    render(){
        return(
            //App이라는 루트 컴포넌트에서 영민한 컴포넌트를
            //포함시킨다
            <div>
                <CounterContainer />
            </div>
        );
    }
}

export default App;