import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://pigeonsworld.local',
});


axiosInstance.interceptors.request.use(function (config) {
  config.headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSRF-Token': localStorage.getItem('csrf'),
  }
  //console.log(config);
  return config
}, function (error) {
  return Promise.reject(error);
});


axiosInstance.interceptors.response.use(function (response) {
  // spinning hide
  //self.props.loading(false)
  return response;
}, function (error) {
  return Promise.reject(error);
});

export async function login(data) {
  return await axiosInstance.post('/user/login?_format=json', data);
}

export async function fetchPigeons() {
  return await axiosInstance.post('/api/v1/pigeons', {});
}

export async function fetchProductDetails(data) {
  return await axiosInstance.post('/api/v1/pigeons-details', data);
}

export async function fetchCommentList(data) {
  return await axiosInstance.post('/api/v1/comment', data);
}

export async function commentcreate(data) {
  return await axiosInstance.post('/api/v1/comment/create', data);
}

export async function fetchBlogList(data) {
  return await axiosInstance.get('/api/v1/blog?_format=json', {});
}

export async function fetchBlogDetails(data) {
  return await axiosInstance.post('/api/v1/blog-details', data);
}

export async function userUpdate(data) {
  return await axiosInstance.post('/api/v1/user/update', data);
}

export async function flag(data) {
  return await axiosInstance.post('/api/v1/flag/create', data);
}

export async function fetchFlag(data) {
  return await axiosInstance.post('/api/v1/flag', data);
}

export async function userLogout(data) {
  return await axiosInstance.post('/api/v1/user-logout', {});
}