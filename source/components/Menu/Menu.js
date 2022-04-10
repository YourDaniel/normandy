import React, {useContext} from 'react';
import styles from './Menu.scss';
import Layout from "../Layout";
import {Link} from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";
import {getLanguageData} from "../../localisation";
import AudioThemeToggler from "../AudioThemeToggler";


export default function Menu(props) {
    const {title, menu} = getLanguageData();
    

    return (
        <div className={styles.menu}>
            <Layout>
                <div className={styles.menu__audio}>
                    <AudioThemeToggler/>
                </div>
                <div className={styles.menu__language}>
                    <LanguageSwitcher/>
                </div>
                <span className={styles.title}>
                    
                    <span className={styles.title__top}>{title.main}</span>
                    <span className={styles.title__bottom}>{title.second}</span>
                </span>
                <div className={styles.menu__theme}>
                    <ThemeSwitcher/>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link className={styles.link} data-click-sound to={'/start'}>{menu.single}</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} data-click-sound to={'/personalization'}>{menu.personalization}</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} data-click-sound to={'/settings'}>{menu.settings}</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} data-click-sound to={'/collections'}>{menu.collections}</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} data-click-sound to={'/rules'}>{menu.rules}</Link>
                    </li>
                    {/*TODO: test route*/}
                    <li className={styles.item}>
                        <Link className={styles.link} data-click-sound to={'/test'}>=== TEST PAGE ===</Link>
                    </li>
                    
                    
                    <li className={styles.item}>
                        <Link className={styles.link} data-click-sound to={'/collections'}>{menu.collections}</Link>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.link} data-click-sound onClick={() => {
                            window.opener = null;
                            window.open('', '_self');
                            window.close();
                        }}>{menu.exit}</button>
                    </li>
                </ul>
            </Layout>
        </div>
    );
}
