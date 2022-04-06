import React from 'react';
import { Range } from 'react-range';
import styles from './InputRange.scss';

export default function InputRange({min, max, step, value, onChange, name}) {
    const percent = 100 / (max - min);
    const baseColourIntensity = 155;
    const newColourIntensity = baseColourIntensity + (value * percent);
    const backgroundColor = `rgba(185, ${newColourIntensity}, 135, 1)`;

    
    return (
        <Range
            step={step}
            min={min}
            max={max}
            values={[value]}
            onChange={(values) => onChange(name, values[0])}
            renderTrack={({ props, children }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '1rem',
                        width: '100%',
                        backgroundColor: backgroundColor
                    }}
                >
                    {children}
                </div>
            )}
            renderThumb={({ props }) => (
                <div
                    {...props}
                    className={styles.thumb}
                />
            )}
        />
    );
}
