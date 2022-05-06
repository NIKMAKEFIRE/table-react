import axios from "axios"
import { setFetchingPosts, fetchingPosts } from "../redux/actions/actions"

export const fetchPosts = async (setPosts) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    setPosts(res.data)
}

// export const fetchingPost = () => {
//     return async (dispatch) => {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
//         dispatch(fetchingPosts(response.data))
//         dispatch(setFetchingPosts(response.data))
//     }
// }