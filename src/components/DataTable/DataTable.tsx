import React, {useEffect, useRef} from 'react';
import 'devextreme/dist/css/dx.material.orange.light.css';

import {
    DataGrid, DataGridRef,
} from 'devextreme-react/data-grid';
import {Column} from "devextreme/ui/data_grid";
import {PAGE_SIZE} from "../../const";

interface DataTableProps {
    searchTerm: string
    data: Object[] | undefined
    visibleColumns: Array<Column | string>;
}

const DataTable = ({data, visibleColumns, searchTerm}: DataTableProps) => {
    const dataGrid = useRef<DataGridRef>(null);
    useEffect(() => {
        dataGrid.current?.instance().searchByText(searchTerm)
    }, [searchTerm, visibleColumns])
    return (
        <div>
            <DataGrid
                ref={dataGrid}
                dataSource={data}
                columns={visibleColumns}
                showBorders={true}
                paging={{enabled: true, pageSize: PAGE_SIZE}}
                rowAlternationEnabled={true}
            >
            </DataGrid>
        </div>
    );
};

export default DataTable;
