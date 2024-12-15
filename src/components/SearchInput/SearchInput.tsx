import React, {useEffect, useState} from 'react';
import styles from './SearchInput.module.css';
import {TextField} from "@mui/material";
import {DEBOUNCE_DELAY, LENGTH_REQUIRED_FOR_SEARCH} from "../../const";

export interface SearchInputProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const SearchInput = ({searchTerm, setSearchTerm}: SearchInputProps) => {
    const [inputValue, setInputValue] = useState(searchTerm);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (inputValue.length < LENGTH_REQUIRED_FOR_SEARCH) {
                setSearchTerm("");
            } else {
                setSearchTerm(inputValue);
            }
        }, DEBOUNCE_DELAY);

        return () => clearTimeout(handler);
    }, [inputValue, setSearchTerm]);

    return (
        <TextField
            id="outlined-search"
            label="Search"
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={styles.searchInput}/>
    );
};

export default SearchInput;
