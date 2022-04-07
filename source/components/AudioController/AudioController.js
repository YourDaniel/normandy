import React, {useEffect} from 'react';
import styles from './AudioController.scss';
import {useDispatch, useSelector} from "react-redux";

const clickSound = new Audio(require('./assets/hover.mp3'));
const themeSound = new Audio(require('./assets/theme.mp3'));

export default function AudioController(props) {
    
    function documentOnClick(e) {
        if (e.target.hasAttribute('data-click-sound')) {
            clickSound.play();
        
        }
    }
    
    useEffect(() => {
        console.log('i am here')
        document.body.addEventListener('click', documentOnClick)
    
        return function cleanup() {
            document.body.removeEventListener('click', documentOnClick)
        }
    }, [])
    
    const {
        audio: {
            themeAudioIsPlaying,
            volumes: {theme: themeVolume, sounds: soundsVolume}
        }
    } = useSelector(state => state.settings)
    
    
    clickSound.volume = soundsVolume;
    themeAudioIsPlaying ? themeSound.play() : themeSound.pause();
    themeSound.loop = true;
    themeSound.volume = themeVolume;

    return (
        <div className={styles.AudioController}></div>
    );
}
