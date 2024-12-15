import {SERVER_URL} from "../const";

export const fetchData = async (): Promise<Array<Object>> => {
    const response = await fetch(`${SERVER_URL}/sifre`);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return await response.json();
};
