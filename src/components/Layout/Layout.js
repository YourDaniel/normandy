import React from 'react';
import styles from './Layout.scss';
import Background from "../Background";
import Title from "../Title";
import ReturnButton from "../ReturnButton";
import {useSelector} from "react-redux";

export default function Layout({children, title = null, back = null, containered = false, withBackgroundImage = true, shadowed = false}) {
    const {effects: {volume: effectVolume}} = useSelector(state => state.settings)
    
    let titleElem = null;
    
    if (title) {
        titleElem = <Title>{title}</Title>
    }
    
    
    let backElem = null;
    
    if (back) {
        backElem = <ReturnButton to={back}/>
    }
    
    
    return (
        <div className={styles.layout}>
            <Background withBackgroundImage={withBackgroundImage} effectVolume={effectVolume}/>
            <div className={`${styles.layout__content} ${containered ? styles.containered : null} ${shadowed ? styles.shadowed : null} ${styles['effects_' + effectVolume]}`}>
                {titleElem}
                <div className={styles.layout__inner}>
                    {children}
                </div>
                {backElem}
            </div>
        </div>
    );
}
