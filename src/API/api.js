import axios from "axios"

export const getUsers = async (setPosts) => {
    await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => {
            // console.log(response.data)
            setPosts(response.data)
        })
        .catch(err => console.error(err))
}

export const fetchPosts = async (setPosts) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(res.data)
}

// export const searchUsers = async (value, setData) => {
//     await axios.get(`https://jsonplaceholder.typicode.com/posts?g=${value}`)
//         .then(response => {
//             // console.log(response.data)
//             setData(response.data)
//         })
//         .catch(err => console.error(err))
// }


// export const loadUsersData = async (start, end, increase) => {
//     return await axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`)
//         .then(response => {
//             // console.log(response.data)
//             setData(response.data)
//         })
//         .catch(err => console.error(err))
// }



// import { searchUsers } from '../API/api';

 // const [value, setValue] = useState('')

  // useEffect(() => {
    //     searchUsers()
    //     setValue('')
    // }, [])

    // const searchUsers = async () => {
    //     await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10?g=${value}`)
    //         .then(response => {
    //             console.log(response.data)
    //             setValue(response.data)
    //         }).catch(err => console.error(err))
    // }