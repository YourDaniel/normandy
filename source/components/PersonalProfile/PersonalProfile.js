import React from 'react';
import styles from './PersonalProfile.scss';

export default function PersonalProfile({color, avatar, name, status}) {
    console.log('color', color)
    
    
    return (
        <div className={styles.block}>
            <div className={styles.avatar} style={{borderColor: color, backgroundImage: `url(${avatar})`}}>
            
            </div>
            <div className={styles.info}>
                <b className={styles.name}>
                    {name.length ? name : 'Good guy'}
                </b>
                <span className={styles.status}>
                    {status}
                </span>
            </div>
        </div>
    );
}
