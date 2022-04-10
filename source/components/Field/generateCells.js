import styles from "./Field.scss";
import React, {useState} from "react";

export default function generateCells(levelData) {

    const [level, changeLevelData] = useState(levelData)
    
    const [activeCell, changeActiveCell] = useState({})
    const [activeSoldier, changeActiveSoldier] = useState({})
    const [neighborCells, changeNeighborCells] = useState([])
    
    const findNeighborCells = (cellPos, cellData) => {
        const {rowIndex, cellIndex} = cellPos;
        const newNeighborCells = [];
    
        //left
        newNeighborCells.push({
            row: rowIndex,
            cell: cellIndex - 1
        })
    
        //right
        newNeighborCells.push({
            row: rowIndex,
            cell: cellIndex + 1
        })
    
        //top
        newNeighborCells.push({
            row: rowIndex - 1,
            cell: cellIndex
        })
    
        //bottom
        newNeighborCells.push({
            row: rowIndex + 1,
            cell: cellIndex
        })
        
        if (cellData.id % 2 === 0) {
            //bottom left
            newNeighborCells.push({
                row: rowIndex + 1,
                cell: cellIndex - 1
            })
    
            //bottom right
            newNeighborCells.push({
                row: rowIndex  + 1,
                cell: cellIndex + 1
            })
        }
        
        else {
            //top left
            newNeighborCells.push({
                row: rowIndex - 1,
                cell: cellIndex - 1
            })
    
            //top right
            newNeighborCells.push({
                row: rowIndex - 1,
                cell: cellIndex + 1
            })
        }
    
        changeNeighborCells(newNeighborCells)
    }
    
    const onSoldierSelect = (cellPos, cellData, cellID, soldierData) => {
        
        // TODO: fix it
        changeActiveCell({
            ...cellData,
            ...cellPos,
            id: cellID
        })
        findNeighborCells(cellPos, cellData)
        changeActiveSoldier(soldierData)
    }
    
    const onCellClick = (cellPos, cellData, cellID) => {
        const isNeighbor = checkIsNeighbor(cellPos.rowIndex, cellPos.cellIndex);
        
        if (isNeighbor && activeSoldier)  {
            console.log('level.field.rows', level.field.rows, activeCell)
            console.log('cellPos.rowIndex', cellPos.rowIndex)
            console.log('cellPos.cellIndex', cellPos.cellIndex)
            
            const newLevelData = {...level};
   
            const newCellSoldiers = newLevelData.field.rows[cellPos.rowIndex].cells[cellPos.cellIndex - 1].soldiers;
            // TODO: fix it
            newLevelData.field.rows[activeCell.rowIndex].cells[activeCell.cellIndex - 1].soldiers = newLevelData.field.rows[activeCell.rowIndex].cells[activeCell.cellIndex - 1].soldiers.filter(item => item.image !== activeSoldier.image)
            newCellSoldiers.push(activeSoldier)
    
            changeActiveCell({})
            changeActiveSoldier({})
            changeNeighborCells([])
            changeLevelData(newLevelData)
            console.log('newCellSoldiers', newCellSoldiers)
            
        }
    }
    
    const checkIsNeighbor = (rowIndex, cellIndex) => {
        return neighborCells.filter(item => rowIndex === item.row && cellIndex === item.cell).length;
    }
    
    const rows = [];
    
    for (let rowIndex = 1; rowIndex <= 10; rowIndex++) {
        const cells = [];
        for (let cellIndex = 1; cellIndex <= 10; cellIndex++) {
            const cellID = `row_${rowIndex}_cell_${cellIndex}`;
            // TODO: refactor it
            let cellData = {};
            let soldiersElems = null;
            let fieldBg = null;
            
            if (level.field.rows[rowIndex] && level.field.rows[rowIndex].cells[cellIndex - 1]) {
                cellData = level.field.rows[rowIndex].cells[cellIndex - 1];
            }
            
            if (cellData.image) {
                fieldBg = `/public/fields/${level.field.rows[rowIndex].cells[cellIndex - 1].image}.png`
            }
    
            if (cellData.soldiers) {
                soldiersElems = cellData.soldiers.map((soldierData, index) => {
                    return (
                        <div className={`${styles.soldier} ${activeSoldier.image === soldierData.image && styles.selected}`} key={soldierData.image} style={{
                            backgroundImage: `url(/public/icons/${soldierData.image}.png)`
                        }}

                             onClick={onSoldierSelect.bind(this, {rowIndex, cellIndex}, cellData, cellID, soldierData)}
                        >
                        
                        </div>
                    )
                })
                
            }
            
            const isNeighbor = checkIsNeighbor(rowIndex, cellIndex);
            
          
            cells.push(
                <div
                    id={cellID}
                    className={`
                        ${styles.cell} 
                        ${fieldBg ? styles.active : null}
                        ${activeCell.id === cellID && styles.selected}
                        ${isNeighbor && styles.neighbor}
                        
                    `}
                    onClick={onCellClick.bind(this, {rowIndex, cellIndex}, cellData, cellID)}
                   
                >
                    <div className={styles.cell_background}
                         style={{
                             backgroundImage: `url(${fieldBg})`
                         }}
                    />
                    <div className={styles.soldiers}>
                        {soldiersElems}
                    </div>
                </div>
            )
        }
        
        rows.push(
            <div id={`row_${rowIndex}`} className={styles.row}>
                {cells}
            </div>
        )
    }
    
    return rows;
}