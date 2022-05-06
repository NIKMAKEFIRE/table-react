import { FETCHING_POSTS } from "../constants/constants"
import { SET_FETCHING_POSTS } from "../constants/constants"

const initialState = {
    posts: [],
    setPosts: [],
    postsPerPage: 10
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case SET_FETCHING_POSTS:
            return {
                ...state,
                setPosts: action.payload
            }

        default: return state
    }
}