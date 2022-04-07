import React from 'react';
import styles from './ThemeSwitcher.scss';
import {useDispatch, useSelector} from "react-redux";
import {onThemeChange} from "../../store/reducers/settings";
const images = {
    germany: require(`./assets/germany.jpg`),
    usa: require(`./assets/usa.jpg`)
}

export default function ThemeSwitcher(props) {
    const dispatch = useDispatch();
    const {themes: {activeTheme, themesList}} = useSelector(state => state.settings)
    function onThemeButtonClick(name) {
        dispatch(onThemeChange(name))
    }
    
    return (
        <div className={styles.themeSwitcher}>
            <ul className={styles.themeSwitcher__list}>
                {themesList.map((theme) => {
                    return (
                        <li key={theme} className={`${styles.themeSwitcher__item} ${theme === activeTheme ? styles.active : ''}`}>
                            <button className={styles.themeSwitcher__button} data-click-sound onClick={onThemeButtonClick.bind(this, theme)} type={'button'}>
                                {/*images name should be equal themes names*/}
                                <img className={styles.themeSwitcher__image} src={images[theme]}/>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
