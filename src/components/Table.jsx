import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { IoIosArrowDown } from 'react-icons/io';

const TablePage = ({ posts, setPosts }) => {

    const sortData = (field) => {
        const copyData = posts.concat()
        const sortedData = copyData.sort((a, b) => a[field] > b[field] ? 1 : -1)
        console.log(sortedData);
        setPosts(sortedData)
    }

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center', margin: '240px 0' }}>Посты не найдены...</h1>
        )
    }

    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th onClick={() => sortData('id')}>ID<IoIosArrowDown /></th>
                    <th onClick={() => sortData('title')}>Заголовок<IoIosArrowDown /></th>
                    <th onClick={() => sortData('body')}>Описание<IoIosArrowDown /></th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((post, index) =>
                        <tr key={index + 1}>
                            <td style={{ textAlign: 'center' }}>{post.id}</td>
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