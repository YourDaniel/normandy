import React from 'react';
import styles from './Field.scss';

export default function Field(props) {
    const level = {
        field: {
            rows: {
                1: {
                    cells: [
                        {
                            id: 1,
                            image: false
                        },
                        {
                            id: 2,
                            image: '17b'
                        },
                        {
                            id: 3,
                            image: '7a'
                        },
                        {
                            id: 4,
                            image: '4b'
                        }
                    ]
                },
                2: {
                    cells: [
                        {
                            id: 1,
                            image: '2b'
                        },
                        {
                            id: 2,
                            image: '13b'
                        },
                        {
                            id: 3,
                            image: '12b'
                        },
                        {
                            id: 4,
                            image: '5b'
                        }
                    ]
                },
                3: {
                    cells: [
                        {
                            id: 1,
                            image: '16b'
                        },
                        {
                            id: 2,
                            image: '3b'
                        },
                        {
                            id: 3,
                            image: '8a'
                        },
                        {
                            id: 4,
                            image: '11b'
                        }
                    ]
                },
                4: {
                    cells: [
                        {
                            id: 1,
                            image: '8a'
                        }
                    ]
                }
            }
        }
    }
    
    
    const rows = [];
    
    for (let rowId = 1; rowId <= 10; rowId++) {
        const cells = [];
        for (let cellId = 1; cellId <= 10; cellId++) {
            let fieldBg = null;
            // TODO: refactor it
            if (level.field.rows[rowId] && level.field.rows[rowId].cells[cellId - 1] && level.field.rows[rowId].cells[cellId - 1].image) {
                fieldBg = `/public/fields/${level.field.rows[rowId].cells[cellId - 1].image}.png`
            }
            cells.push(
                <div
                    id={`row_${rowId}_cell_${cellId}`}
                    className={`${styles.cell} ${fieldBg ? styles.active : null}`}
                    style={{
                        backgroundImage: `url(${fieldBg})`
                    }}
                />
            )
        }
        
        rows.push(
            <div id={`row_${rowId}`} className={styles.row}>
                {cells}
            </div>
        )
    }
    return (
        <div className={styles.Field}>
            <div className={styles.table}>
                {rows}
            </div>
        </div>
    );
}
