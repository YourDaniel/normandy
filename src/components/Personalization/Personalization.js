import React, {useState} from 'react';
import styles from './Personalization.scss';
import Button from "../Button";
import Layout from "../Layout";
import {getLanguageData} from "../../localisation";
import PersonalProfile from "../PersonalProfile";
import Slider from "react-slick";
import Picker from "../Picker";
import {useDispatch, useSelector} from "react-redux";
import {onAudioVolumeChange} from "../../store/reducers/settings";
import {onUserOptionChange} from "../../store/reducers/user";

export default function Personalization(props) {

    const {
        menu:
            {personalization: personalizationTitle},
    } = getLanguageData();
    
    const avatars = [
        {
            url: 'assets/avatars/1.jpg',
            id: 1
        },
        {
            url: 'assets/avatars/2.jpg',
            id: 2
        },
        {
            url: 'assets/avatars/3.jpg',
            id: 3
        },
        {
            url: 'assets/avatars/4.jpg',
            id: 1
        }
    ]
    
    const statuses = [
        'Soldier',
        'The Best',
        'Super Hero',
        'Colonel',
        'Your death',
        
    ]
    
    
    const dispatch = useDispatch();
    const {
        avatarURL, name, status, color
    } = useSelector(state => state.user)
    
    
    function onChange(updatedOption) {
        dispatch(onUserOptionChange(updatedOption))
    }
    
    
    return (
        <Layout containered={true} title={personalizationTitle} back={'/'} withBackgroundImage={false} shadowed={true}>
            <div className={styles.content}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <b className={styles.title}>
                            Портрет
                        </b>
                        <div className={styles.block}>
                            <div className={styles.avatarsSlider}>
                                <Slider fade={true} speed={100} afterChange={(index) => {
                                    onChange({
                                        optionName: 'avatarURL',
                                        optionValue: avatars[index].url
                                    })
                                }}>
                                    {avatars.map((avatar) => <img className={styles.avatar} key={avatar.id} src={avatar.url}/>)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <b className={styles.title}>
                            Кастомизация
                        </b>
                        <div className={styles.block}>
                            <b className={styles.subtitle}>
                                Имя
                            </b>
                            <div>
                                <input maxLength={10} type="text" name={name} className={styles.input} onChange={(e) => {
                                    onChange({
                                        optionName: 'name',
                                        optionValue: e.target.value
                                    })
                                }} value={name}/>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <b className={styles.subtitle}>
                                Звание
                            </b>
                            <div className={styles.statuses}>
                                <Slider fade={true} speed={100} afterChange={(index) => {
                                    onChange({
                                        optionName: 'status',
                                        optionValue: statuses[index]
                                    })
                                }}>
                                    {statuses.map((status) => <p key={status} className={styles.status}>{status}</p>)}
                                </Slider>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <b className={styles.subtitle}>
                                Цвет рамки
                            </b>
                            <div>
                                <Picker activeColor={color} onChange={(color) => {
                                    onChange({
                                        optionName: 'color',
                                        optionValue: color
                                    })
                                }}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <b className={styles.title}>
                            Текущий дизайн
                        </b>
                        <div className={styles.profile}>
                            <PersonalProfile name={name} status={status} avatar={avatarURL} color={color}/>
                        </div>
                    </div>
                </div>
     
            </div>
    
        </Layout>
    );
}
