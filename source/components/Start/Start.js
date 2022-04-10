import React, {useState} from 'react';
import styles from './Start.scss';
import Layout from "../Layout";
import Button from "../Button";
import PersonalProfile from "../PersonalProfile";
import RoundedProgress from "../RoundedProgress";
import {useSelector} from "react-redux";
import { Redirect } from "react-router-dom";

const level1map = require('./assets/level-1.png')

export default function Start(props) {
    const {
        avatarURL, name, status, color
    } = useSelector(state => state.user)

  
    
    const [counter, changeCounter] = useState(3)
    const [buttonStatus, changeButtonStatus] = useState('initial')
    
    function onStart() {
        // TODO: refactor it
        changeButtonStatus('countdown');
        
        (function loop (i) {
            setTimeout(function () {
                changeCounter(i)
                if (--i >= 0) {
                    loop(i);
                }
                
                else {
                    changeButtonStatus('redirect')
                }
            }, 1000)
        })(2);
    }
    
    let buttonElem = null;
    
    switch (buttonStatus) {
        case 'initial':
            buttonElem = <Button onClick={onStart} id={'start-button'}>Начать</Button>
            break;
        case 'countdown':
            buttonElem = <div className={styles.countdown}>
                <RoundedProgress value={counter} maxValue={3} text={counter}/>
            </div>
            break;
        case 'redirect':
            buttonElem = <Redirect to="/rooms/1" />
            break;
    }
    
    return (
        <Layout containered={true} title={false} back={'/'} withBackgroundImage={false}>
            <div className={styles.start}>
                <div className={styles.content}>
                    <div className={`${styles.aside} ${styles.left}`}>
                        <PersonalProfile name={name} status={status} avatar={avatarURL} color={color}/>
                        <div className={styles.info}>
                            <b className={styles.nation}>★ США ★</b>
                        </div>
                    </div>
                    <div className={styles.center}>
                        <div className={styles.top}>
                            <span className={styles.level}>
                                Сценарий номер №1:
                            </span>
                            <b className={styles.name}>
                                Ла-Ре
                            </b>
                        </div>
                        <div className={styles.map}>
                            <img src={level1map} alt=""/>
                        </div>
                        <div className={styles.button}>
                            {buttonElem}
                        </div>
                    </div>
                    <div className={`${styles.aside} ${styles.right}`}>
                        <PersonalProfile name={'Alexander (AI)'} status={'Colonel'} avatar={'public/avatars/bot.jpg'} color={'#3a1815'}/>
                        <div className={styles.info}>
                            <b className={styles.nation}>★ Германия ★</b>
                        </div>
                    </div>
                </div>
                
            </div>
        </Layout>
        
    );
}
