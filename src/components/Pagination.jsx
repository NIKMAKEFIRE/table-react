import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Pagination = ({ postsPerPage, totalPosts, currentPage, setCurrentPage, id }) => {

    const nextPage = () => setCurrentPage(next => next === 10 ? next : next + 1)
    const prevPage = () => setCurrentPage(prev => prev === 1 ? prev : prev - 1)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const pageNumbers = []

    for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <nav className="pages">
            <button className={'btn'} onClick={prevPage}>Назад</button>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <Link to={`/pages=${currentPage}`} className={currentPage === number ? "active--page" : "page"}
                            onClick={(e) => {
                                paginate(number)
                                e.preventDefault()
                            }}>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
            <button className={'btn'} onClick={nextPage}>Далее</button>
        </nav>
    )
}

export default Pagination