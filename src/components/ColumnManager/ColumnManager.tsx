import React from 'react';
import styles from './ColumnManager.module.css'
import {Column} from "devextreme/ui/data_grid";

interface ColumnManagerProps {
    visibleColumns: Array<Column | string>;
    hiddenColumns: string[];
    setVisibleColumns: (columns: Array<Column | string>) => void;
}

const ColumnManager = ({visibleColumns, hiddenColumns, setVisibleColumns}: ColumnManagerProps) => {
    const handleDoubleClick = (column: Column | string) => {
        if (visibleColumns.includes(column)) {
            setVisibleColumns(visibleColumns.filter((col) => col !== column));
        } else {
            setVisibleColumns([...visibleColumns, column]);
        }
    };

    return (
        <div className={styles.columnManager}>
            <div className={styles.hiddenContainer}>
                {hiddenColumns.map((column) => (
                    <div
                        key={column as string}
                        className={styles.hiddenColumn}
                        onDoubleClick={() => handleDoubleClick(column)}
                    >
                        {column}
                    </div>
                ))}
            </div>

            <div className={styles.visibleContainer}>
                {visibleColumns.map((column) => (
                    <div
                        key={column as string}
                        className={styles.visibleColumn}
                        onDoubleClick={() => handleDoubleClick(column)}
                    >
                        {column as string}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColumnManager;
