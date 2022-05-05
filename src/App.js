import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { fetchPosts } from './API/api';
import Input from './components/Input';
import Pagination from './components/Pagination';
import Table from './components/Table';

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

  return (
    <div className="App">
      <Input />
      <Table posts={currentPosts} setPosts={setPosts} />
      <Pagination 
      postsPerPage={postsPerPage} 
      totalPosts={posts.length}
      paginate={paginate}
      currentPage={currentPage}
       />
    </div>
  );
}

export default App;
