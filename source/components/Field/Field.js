import React, {useState} from 'react';
import styles from './Field.scss';
import Draggable from 'react-draggable';
import generateCells from "./generateCells";

export default function Field(props) {
    const level = {
        field: {
            rows: {
                1: {
                    cells: [
                        {
                            id: 1,
                            image: false,
                            soldiers: []
                        },
                        {
                            id: 2,
                            image: '17b',
                            soldiers: [
                                {
                                    type: 'rifleman',
                                    image: 'usa_rifleman_b'
                                },
                                {
                                    type: 'rifleman',
                                    image: 'usa_rifleman_a'
                                }
                            ]
                        },
                        {
                            id: 3,
                            image: '7a',
                            soldiers: []
                        },
                        {
                            id: 4,
                            image: '4b',
                            soldiers: []
                        }
                    ]
                },
                2: {
                    cells: [
                        {
                            id: 1,
                            image: '2b',
                            soldiers: []
                        },
                        {
                            id: 2,
                            image: '13b',
                            soldiers: []
                        },
                        {
                            id: 3,
                            image: '12b',
                            soldiers: []
                        },
                        {
                            id: 4,
                            image: '5b',
                            soldiers: []
                        }
                    ]
                },
                3: {
                    cells: [
                        {
                            id: 1,
                            image: '16b',
                            soldiers: []
                        },
                        {
                            id: 2,
                            image: '3b',
                            soldiers: []
                        },
                        {
                            id: 3,
                            image: '8a',
                            soldiers: []
                        },
                        {
                            id: 4,
                            image: '11b',
                            soldiers: []
                        }
                    ]
                },
                4: {
                    cells: [
                        {
                            id: 1,
                            image: '8a',
                            soldiers: []
                        }
                    ]
                }
            }
        }
    }
    
   
   
    
    const field = generateCells(level);
    
    return (
        <div className={styles.field}>
            <Draggable
            >
                <div className={styles.table}>
                    {field}
                </div>
            </Draggable>
        
        </div>
    )
        ;
}
