import React, {useState} from 'react';
import styles from './CheckboxSwitcher.scss';

export default function CheckboxSwitcher(props) {
    const id = 's';
    const [hook, changeHook] = useState(false)
    function onHooksButtonClick() {
        changeHook(!hook)
    }
    
    return (
        <div className={styles.checkboxSwitcher}>
            <input type="checkbox" value={hook} id={id} onChange={onHooksButtonClick} name="check" />
            <label htmlFor={id}></label>
        </div>
    );
}
