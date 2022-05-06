import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go';

const Search = ({ searchText, setSearchText }) => {

    return (
        <div className="input">
            <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Поиск" type="text" />
            <button style={{ border: 'none', backgroundColor: 'transparent' }}>
                <GoSearch className="icon" />
            </button>
        </div>
    )
}

export default Search