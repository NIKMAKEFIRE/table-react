import React from 'react'
import { Nav } from 'react-bootstrap'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, nextPage, prevPage }) => {
    const pageNumbers = []

    for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="pages">
            <button className="btn" onClick={prevPage}>Назад</button>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number + 1}>
                        <Nav.Link href={`page=${currentPage}`} className={currentPage === number ? "active--page" : "page"}
                            onClick={(e) => {
                                paginate(number + 1)
                                e.preventDefault()
                            }}>
                            {number + 1}
                        </Nav.Link>
                    </li>
                ))}
            </ul>
            <button className="btn" onClick={nextPage}>Далее</button>
        </nav>
    )
}

export default Pagination