import React from 'react';
import styles from './Picker.scss';

export default function Picker({onChange, activeColor}) {
    const colors = ['#155f01', '#f1d78c', '#ffb50e', '#ac322f', '#3a1815', '#00196DFF']
    return (
        <div className={styles.block}>
            {colors.map((color) => <div
                style={{backgroundColor: color}}
                key={color}
                onClick={() => onChange(color)}
                className={`${styles.item} ${activeColor === color ? styles.active : ''}`}
            />)}
        </div>
    );
}
