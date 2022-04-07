import React from 'react';
import styles from './Background.scss';
import {useSelector} from "react-redux";

export default function Background({withBackgroundImage = true, effectVolume}) {
    const activeTheme = useSelector(state => state.settings.themes.activeTheme)
    
    return (
        <div className={`${styles.background} ${withBackgroundImage ? styles.image : ''} ${styles[activeTheme]} ${styles['effects_' + effectVolume]}`}>
            <div className={styles.fog}>
                <div className={styles.fog__container}>
                    <div className={`${styles.fog__img} ${styles.fog__img_first}`}/>
                    <div className={`${styles.fog__img} ${styles.fog__img_second}`}/>
                </div>
            </div>
        </div>
    );
}
