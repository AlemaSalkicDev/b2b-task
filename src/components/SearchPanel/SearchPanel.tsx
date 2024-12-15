import React from 'react';
import SearchInput, {SearchInputProps} from "../SearchInput/SearchInput";
import styles from './SearchPanel.module.css';

const SearchPanel = ({searchTerm, setSearchTerm}: SearchInputProps) => {
    return (
        <>
            <div className={styles.searchPanel}>
                <img className={styles.panelImage} src={"/Ivis-Logo.svg"}/>
                <div className={styles.panelText}>
                    <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}></SearchInput>
                </div>
            </div>
        </>
    );
};

export default SearchPanel;
