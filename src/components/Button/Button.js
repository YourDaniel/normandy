import React from 'react';
import styles from './Button.scss';
import {Link} from "react-router-dom";

export default function Button({children, type = 'primary', to = null, id = null, target = "_self"}) {
    return (
        <Link to={to} id={id} target={target} data-click-sound className={`${styles.button} ${styles[type]}`}>
            {children}
        </Link>
    );
}
