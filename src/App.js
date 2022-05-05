import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { fetchPosts } from './API/api';
import Input from './components/Input';
import Pagination from './components/Pagination';
import Table from './components/Table';
import ReactPaginate from 'react-paginate';

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    fetchPosts(setPosts)
  }, [])

  // const pageCount = Math.ceil(posts.length / postsPerPage)
  // const changePage = ({selected}) => {
  //   setCurrentPage(selected)
  // }

  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)

  return (
    <div className="App">
      <Input />
      <Table posts={currentPosts} setPosts={setPosts} />
      {/* <ReactPaginate
      previousLabel={'Назад'}
      nextLabel={'Далее'}
      pageCount={pageCount}
      onPageChange={changePage}
      initialSelected={currentPage}
      containerClassName={'paginationButtons'}
      previousLinkClassName={'previousButton'}
      nextLinkClassName={'nextButton'}
      disabledClassName={'disabledButton'}
      activeClassName={'activeButton'}
      hrefBuilder={(pageNumber, pageCount) =>
        pageNumber <= 10 && pageNumber <= pageCount ? `/page/${pageNumber}` : '#'
      }
      hrefAllControls
      /> */}
      <Pagination 
      postsPerPage={postsPerPage} 
      totalPosts={posts.length}
      paginate={paginate}
      currentPage={currentPage}
      nextPage={nextPage}
      prevPage={prevPage}
       />
    </div>
  );
}

export default App;
