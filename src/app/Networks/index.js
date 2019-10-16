import axios from "axios";


const instance = axios.create({
  baseURL: 'http://pegionsworld.local',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSRF-Token': `b2wIWp7bpSjA1DVoTQv8ED4E2X6WMzd6QEUDXvTtE2c`,
  }
});

export async function login(data) {
  return await instance.post('/user/login?_format=json', data);
}

export async function fetchProductDetails(data) {
  return await instance.post('/api/pigeonsdetails', data);
}

export async function fetchCommentList(data) {
  return await instance.post('/api/comment', data);
}

export async function commentcreate(data) {
  return await instance.post('/api/comment/create', data);
}

export async function fetchBlogList(data) {
  return await instance.get('/api/blog', data);
}