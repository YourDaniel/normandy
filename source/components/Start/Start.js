import React from 'react';
import styles from './Start.scss';
import Layout from "../Layout";
import Button from "../Button";
import PersonalProfile from "../PersonalProfile";
import {useSelector} from "react-redux";
const level1map = require('./assets/level-1.png')

export default function Start(props) {
    const {
        avatarURL, name, status, color
    } = useSelector(state => state.user)
    
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
                            <Button to={'/menu'} id={'start-button'}>Начать</Button>
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
