import React from 'react';
import styles from './AudioThemeToggler.scss';
import {onAudioThemeToggle} from "../../store/reducers/settings";
import {useDispatch, useSelector} from "react-redux";
import audio from "./assets/audio.svg";

export default function AudioThemeToggler(props) {
    const dispatch = useDispatch();
    const {audio: {themeAudioIsPlaying}} = useSelector(state => state.settings)
    
    function onAudioToggle() {
        dispatch(onAudioThemeToggle(!themeAudioIsPlaying))
    }
    
    return (
        <button onClick={onAudioToggle} type={'button'} data-click-sound className={`${styles.toggle} ${themeAudioIsPlaying ? styles.active : ''}`}>
            <img src={audio} alt="audio toggle"/>
        </button>
    );
}
