import React from 'react';
import styles from './Button.scss';
import {Link} from "react-router-dom";

export default function Button({children, onClick = null, type = 'primary', to = null, id = null, target = "_self"}) {
    // TODO: refactor it
    if (to) {
        return (
            <Link to={to} id={id} target={target} data-click-sound className={`${styles.button} ${styles[type]}`}>
                {children}
            </Link>
        );
    }
    
    else {
        return (
            <button onClick={onClick} id={id} target={target} data-click-sound className={`${styles.button} ${styles[type]}`}>
                {children}
            </button>
        );
    }
   
}
