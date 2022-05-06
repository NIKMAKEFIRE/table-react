export  const getFilteredData = (searchText, posts) => {
    if (!searchText) {
      return posts
    }
    return posts.filter(el => {
      return el['body'].toLowerCase().includes(searchText.toLowerCase())
        || el['title'].toLowerCase().includes(searchText.toLowerCase())
        || el['id'].toString().toLowerCase().includes(searchText.toLowerCase())
    })
  }