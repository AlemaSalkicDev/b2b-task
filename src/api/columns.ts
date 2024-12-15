import {SERVER_URL} from "../const";
import {Column} from "devextreme/ui/data_grid";

export const fetchColumns = async (): Promise<Array<Column | string> | null> => {
    const response = await fetch(`${SERVER_URL}/kolone`);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return await response.json();
};
