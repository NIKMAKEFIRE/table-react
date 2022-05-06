import { FETCHING_POSTS, SET_FETCHING_POSTS } from "../constants/constants";

export const fetchingPosts = (post) => ({
    type: FETCHING_POSTS,
    payload: post
})

export const setFetchingPosts = (post) => ({
    type: SET_FETCHING_POSTS,
    payload: post
})