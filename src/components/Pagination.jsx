import React from 'react'
import { Nav } from 'react-bootstrap'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = []

    for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Nav.Link href={`page=${currentPage}`} onClick={() => paginate(number)} className="page-link">
                            {number}
                        </Nav.Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination