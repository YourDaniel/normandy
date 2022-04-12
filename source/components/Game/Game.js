import React from 'react';
import styles from './Game.scss';
import Layout from "../Layout";
import Field from "../Field";
import PersonalProfile from "../PersonalProfile";
import {useSelector} from "react-redux";

export default function Game(props) {
    const {
        avatarURL, name, status, color
    } = useSelector(state => state.user)
    
    return (
        <Layout containered={false} title={false} back={false} withBackgroundImage={false} shadowed={false}>
            <div className={styles.game}>
                <div className={styles.battleground}>
                    <Field/>
                </div>
                <div className={styles.top}>
                    <div className={styles.timer}>01:00</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.personal}>
                            <PersonalProfile name={name} status={status} avatar={avatarURL} color={color}/>
                        </div>
                        <div className={styles.status}>
                            ✪ Ваш ход ✪
                        </div>
                    </div>
                    <div className={styles.right}>
                        <PersonalProfile name={'Alexander (AI)'} status={'Colonel'} avatar={'/public/avatars/bot.jpg'}
                                         color={'#3a1815'}/>
                    </div>
                </div>
                
                <div className={styles.bottom}>
                    <div className={styles.bottom_left}>
                        <b className={styles.bottom_text}>
                            Доступные действия:
                        </b>
                        <div className={styles.bottom_descriptions}>
                            <div className={styles.bottom_description}>
                                <b>Движение</b> - кликни по солдату и выбери разведанное поле для перемещения.
                            </div>
                            <div className={styles.bottom_description}>
                                <b>Атака</b> - кликни по солдату и выбери противника для атаки.
                            </div>
                            <div className={styles.bottom_description}>
                                <b>Разведка</b> - кликни по солдату и выбери поле для разведки.
                            </div>
                            <div className={styles.bottom_description}>
                                <b>Подавление</b> -
                            </div>
                            <div className={styles.bottom_description}>
                                <b>Обследование</b> -
                            </div>
                            <div className={styles.bottom_description}>
                                <b>Маскировка</b> -
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.bottom_right}>
                        <b className={styles.bottom_text}>
                            Выпавшие карты:
                        </b>
                    </div>
                    <ul className={styles.cards}>
                        <li className={`${styles.card} ${styles.active}`}>
                            <img src={'/public/usa/usa-gunner-a-1.png'} alt=""/>
                            <div className={styles.card_inner}>
                                <span className={styles.card_title}>Пулемётчик</span>
                                <div className={styles.card_actions}>
                                    <div className={styles.card_action}>
                                        <div className={styles.card_action_icon}>
                                        
                                        </div>
                                        <div className={styles.card_action_name}>
                                            Движение
                                        </div>
                                        <div className={styles.card_action_value}>
                                        1
                                        </div>
                                    </div>
                                    
                                    <div className={styles.card_action}>
                                        <div className={styles.card_action_icon}>
                                        
                                        </div>
                                        <div className={styles.card_action_name}>
                                            Атака
                                        </div>
                                        <div className={styles.card_action_value}>
                                        2
                                        </div>
                                    </div>
                                    
                                    <div className={styles.card_action}>
                                        <div className={styles.card_action_icon}>
                                        
                                        </div>
                                        <div className={styles.card_action_name}>
                                            Подавление
                                        </div>
                                        <div className={styles.card_action_value}>
                                        4
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={styles.card}>
                            <img src={'/public/usa/usa-gunner-a-2.png'} alt=""/>
                        </li>
                        <li className={styles.card}>
                            <img src={'/public/usa/usa-gunner-a-3.png'} alt=""/>
                        </li>
                        <li className={styles.card}>
                            <img src={'/public/usa/usa-gunner-b-1.png'} alt=""/>
                        </li>
                        <li className={styles.card}>
                            <img src={'/public/usa/usa-ranger-b-1.png'} alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}
