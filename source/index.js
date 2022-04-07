import React from 'react';
import {render} from 'react-dom';
import store from "./store";
import {Provider} from 'react-redux';
import './styles/global.scss';
import App from './components/App';


const Root = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
};

render(
    <Root/>,
    document.getElementById('root')
)