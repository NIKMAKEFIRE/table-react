import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { GoSearch } from 'react-icons/go';

const Input = () => {
    // const [searchQuery, setSearchQuery] = useState('')

    // const sortedAndSearchedPosts = useMemo(() => {
    // }, [searchQuery])

    const [value, setValue] = useState('')

    useEffect(() => {
        searchUsers()
        setValue('')
    }, [])

    const searchUsers = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10?g=${value}`)
            .then(response => {
                console.log(response.data)
                setValue(response.data)
            }).catch(err => console.error(err))
    }

    return (
        <div className="input">
            <input placeholder="Поиск" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <GoSearch className="icon" />
        </div>
    )
}

export default Input