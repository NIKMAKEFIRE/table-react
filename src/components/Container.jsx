import React, { useEffect, useState } from 'react'
import { fetchingPost, fetchPosts } from '../API/api';
import Pagination from './Pagination';
import Table from './Table';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';
import { getFilteredData } from '../filteredData'

function Container() {
  // const dispatch = useDispatch()
  // const posts = useSelector(state => state.posts.posts)
  // const setPosts = useSelector(state => state.posts.setPosts)
  const [posts, setPosts] = useState([])
  // const postsPerPage = useSelector(state => state.posts.postsPerPage)
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10)
  const [searchText, setSearchText] = useState('')
  const filteredData = getFilteredData(searchText, posts)

  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost)

  useEffect(() => {
    // dispatch(fetchingPost())
    fetchPosts(setPosts)
  }, []);


  return (
    <div className="App">
      <Search searchText={searchText} setSearchText={setSearchText} />
      <Table posts={currentPosts} setPosts={setPosts} />
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Container;