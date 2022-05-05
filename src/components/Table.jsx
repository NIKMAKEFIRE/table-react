import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { getUsers } from '../API/api';
import { IoIosArrowDown } from 'react-icons/io';

const TablePage = ({ posts, setPosts }) => {
    const [sort, setSort] = useState('ASC');

    // useEffect(() => {
    //     getUsers(setPosts)
    // }, []);

    const sorting = (col) => {
        if (sort === 'ASC') {
            const sorted = [...posts].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
            setPosts(sorted)
            setSort('DSC')
        }
        if (sort === 'DSC') {
            const sorted = [...posts].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
            setPosts(sorted)
            setSort('ASC')
        }
    }

    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th onClick={() => sorting('id')}>
                        ID
                        <IoIosArrowDown />
                    </th>
                    <th onClick={() => sorting('title')}>
                        Заголовок
                        <IoIosArrowDown />
                    </th>
                    <th onClick={() => sorting('body')}>
                        Описание
                        <IoIosArrowDown />
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((post, index) =>
                        <tr key={index + 1}>
                            <td style={{textAlign: 'center'}}>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

export default TablePage