import React from 'react';
import styles from './Settings.scss';
import Layout from "../Layout";
import LanguageSwitcher from "../LanguageSwitcher";
import InputRange from "../InputRange";
import CheckboxSwitcher from "../CheckboxSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";
import {getLanguageData} from "../../localisation";
import AudioThemeToggler from "../AudioThemeToggler";
import {useDispatch, useSelector} from "react-redux";
import {onAudioVolumeChange, onVideoEffectsVolumeChange} from "../../store/reducers/settings";

export default function Settings(props) {
    const {
        menu:
            {settings: settingsTitle},
        settings:
            {volume, video, theme, language, other, enableMusic, music, sounds, effectsQuality, fullscreen, changeLanguage, changeTheme}
    } = getLanguageData();
    
    
    const dispatch = useDispatch();
    const {
        audio: {
            themeAudioIsPlaying,
            volumes: {theme: themeVolume, sounds: soundsVolume}
        },
        effects: {volume: effectsVolume}
    } = useSelector(state => state.settings)
    
    
    function onChangeAudioRange(audioType, newVolume) {
        dispatch(onAudioVolumeChange(audioType, newVolume))
    }
    
    function onChangeVideoEffectsRange(name, newVolume) {
        dispatch(onVideoEffectsVolumeChange(newVolume))
    }
    
    return (
        <Layout containered={true} title={settingsTitle} back={'/'}>
            <form className={styles.settings}>
                <div className={styles.row}>
                    <fieldset className={styles.settings__fieldset}>
                        <legend className={styles.settings__title}>{volume}</legend>
                        <div className={styles.audio}>
                            <div className={styles.audio__left}>
                                <div className={styles.settings__block}>
                                    <span className={styles.settings__subtitle}>{enableMusic}</span>
                                    <div className={styles.audio__toggler}>
                                        <AudioThemeToggler/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.audio__right}>
                                <div className={`${styles.settings__block} ${!themeAudioIsPlaying ? styles.disabled : ''}`}>
                                    <span className={styles.settings__subtitle}>{music}</span>
                                    <div className={styles.settings__range}>
                                        <InputRange min={0} max={1} step={0.01} name={"theme"} value={themeVolume} onChange={onChangeAudioRange}/>
                                    </div>
                                </div>
                                <div className={styles.settings__block}>
                                    <span className={styles.settings__subtitle}>{sounds}</span>
                                    <div className={styles.settings__range}>
                                        <InputRange min={0} max={1} step={0.01} name={"sounds"} value={soundsVolume} onChange={onChangeAudioRange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className={styles.settings__fieldset}>
                        <legend className={styles.settings__title}>{video}</legend>
                       
                        <div className={styles.settings__block}>
                            <span className={styles.settings__subtitle}>{effectsQuality}</span>
                            <div className={styles.settings__range}>
                                <InputRange min={0} max={2} step={1} name={"effects"} value={effectsVolume} onChange={onChangeVideoEffectsRange}/>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className={styles.settings__fieldset}>
                        <legend className={styles.settings__title}>{other}</legend>
                        <div className={styles.settings__block}>
                            <span className={styles.settings__subtitle}>{fullscreen}</span>
                            <div className={styles.settings__switcher}>
                                <CheckboxSwitcher/>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className={styles.row}>
                    <fieldset className={styles.settings__fieldset}>
                        <legend className={styles.settings__title}>{language}</legend>
                        <div className={styles.settings__block}>
                            <span className={styles.settings__subtitle}>{changeLanguage}</span>
                            <div className={styles.settings__language}>
                                <LanguageSwitcher/>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className={styles.settings__fieldset}>
                        <span className={styles.settings__subtitle}>{changeTheme}</span>
                        <legend className={styles.settings__title}>{theme}</legend>
                        <div className={styles.settings__theme}>
                            <ThemeSwitcher/>
                        </div>
                    </fieldset>
                </div>
            </form>
        </Layout>
    
    );
}
