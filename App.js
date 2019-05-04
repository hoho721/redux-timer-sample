import React from 'react';
import Timer from './Components/Timer';
import {Provider} from 'react-redux';
import store from './Store/timerStore';

export default class App extends React.Component {

    render() {
        console.log(store);

        return (
            <Provider store={store}>
                <Timer/>
            </Provider>
        );
    }
}