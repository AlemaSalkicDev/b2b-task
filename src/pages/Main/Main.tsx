import React, {useEffect, useState} from 'react';
import styles from './Main.module.css';
import {Column} from "devextreme/ui/data_grid";
import ColumnManager from "../../components/ColumnManager/ColumnManager";
import DataTable from "../../components/DataTable/DataTable";
import {fetchData} from "../../api/codes";
import {fetchColumns} from "../../api/columns";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import {INITIAL_NUMBER_OF_COLUMNS} from "../../const";
import {useQuery} from "@tanstack/react-query";
import {Alert, Snackbar} from "@mui/material";

const Main = () => {
    const [visibleColumns, setVisibleColumns] = useState<Array<Column | string>>([]);
    const [hiddenColumns, setHiddenColumns] = useState<Array<Column | string>>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [openErrorBar, setOpenErrorBar] = React.useState(false);

    const {data, error, isError} = useQuery({
        queryKey: ['data'],
        queryFn: fetchData
    })

    const {data: columns, error: columnError, isError: isColumnError} = useQuery({
        queryKey: ['columns'],
        queryFn: fetchColumns
    })

    useEffect(() => {
        setOpenErrorBar(isError || isColumnError)
    }, [isError, isColumnError]);

    useEffect(() => {
        if (columns) {
            setVisibleColumns(columns.slice(0, INITIAL_NUMBER_OF_COLUMNS))
        }
    }, [columns])

    useEffect(() => {
        if(columns) {
            setHiddenColumns(columns.filter((col) => !visibleColumns.includes(col)))
        }
    }, [columns, visibleColumns])

    return (
        <div className={styles.pageContainer}>
            {openErrorBar && (
                <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={openErrorBar}
                          autoHideDuration={6000} onClose={() => setOpenErrorBar(false)}>
                    <Alert onClose={() => setOpenErrorBar(false)} severity="error" sx={{width: '100%'}}>
                        {error || columnError ? error?.message || columnError?.message : 'An unknown error occurred'}
                    </Alert>
                </Snackbar>
            )}
            <div className={styles.mainContent}>
                <SearchPanel searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <div className={styles.outerTableDiv}>
                    <div className={styles.tableDiv}>
                        <DataTable data={data} searchTerm={searchTerm} visibleColumns={visibleColumns}/>
                    </div>
                </div>
            </div>
            <ColumnManager
                visibleColumns={visibleColumns}
                hiddenColumns={hiddenColumns as string[]}
                setVisibleColumns={setVisibleColumns}
            />
        </div>
    );
};

export default Main;
