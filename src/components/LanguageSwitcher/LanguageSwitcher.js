import React from 'react';
import styles from './LanguageSwitcher.scss';
import {useDispatch, useSelector} from "react-redux";
import {onLanguageChange} from "../../store/reducers/settings";
const images = {
    en: require(`./assets/en.svg`),
    ru: require(`./assets/ru.svg`),
    pl: require(`./assets/pl.svg`),
    de: require(`./assets/de.svg`)
}

export default function LanguageSwitcher(props) {
    const dispatch = useDispatch();
    const {languages: {activeLanguage, languagesList}} = useSelector(state => state.settings)
    function onLanguageButtonClick(name) {
        dispatch(onLanguageChange(name))
    }
    
    return (
        <div className={styles.languageSwitcher}>
            <ul className={styles.languageSwitcher__list}>
                {languagesList.map((theme) => {
                    return (
                        <li key={theme} className={`${styles.languageSwitcher__item} ${theme === activeLanguage ? styles.active : ''}`}>
                            <button className={styles.languageSwitcher__button} data-click-sound onClick={onLanguageButtonClick.bind(this, theme)} type={'button'}>
                                {/*images name should be equal languages names*/}
                                <img className={styles.languageSwitcher__image} src={images[theme]}/>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
