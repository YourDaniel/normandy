import React from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './RoundedProgress.scss';

export default function RoundedProgress({value, maxValue, minValue, text}) {
    return (
        <CircularProgressbar
            className={styles.progress}
            value={value}
            minValue={minValue}
            maxValue={maxValue}
            text={text}
            counterClockwise={true}
            styles={buildStyles({
                
                strokeLinecap: 'butt',
                
                // Text size
                textSize: '5rem',
                
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
                
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',
                
                // Colors
                pathColor: `#ffb50e`,
                textColor: '#fafcfb',
                trailColor: '#fafcfb',
                backgroundColor: '#fafcfb',
            })}
        />
    );
}
