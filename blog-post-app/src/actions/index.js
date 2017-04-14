import axios from "axios";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=123";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
export const CLEAR_POST = "CLEAR_POST";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}&${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function clearPost() {
  return {
    type: CLEAR_POST,
    payload: null
  }
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}&${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  }
}
