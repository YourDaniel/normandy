import React, {useState} from 'react';
import styles from './Main.scss';
import {useSelector, useDispatch} from "react-redux";
import {checkReduxStatus} from "../../store/reducers/exampleReducer";

export default function Main(props) {
    const dispatch = useDispatch();
    
    
    const counter = useSelector(state => state.main.reduxCounter)
    function onReduxButtonClick() {
        dispatch(checkReduxStatus(counter + 1))
    }
    
    const [hook, changeHook] = useState(0)
    function onHooksButtonClick() {
        changeHook(hook + 1)
    }
    
    return (
        <div className={styles.Main}>
            <div>Redux test counter: {counter}, <button onClick={() => onReduxButtonClick()}>increase counter</button></div>
            <div>Hooks test counter: {hook},    <button onClick={() => onHooksButtonClick()}>increase counter</button></div>
        </div>
        
    );
}
