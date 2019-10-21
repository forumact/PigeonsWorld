import axios from "axios";

const instance = axios.create({
  baseURL: 'http://pigeonsworld.local',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSRF-Token': localStorage.getItem('csrf'),
  }
});


instance.interceptors.request.use(function (config) {
  // spinning start to show
  //self.props.loading(true)
  return config
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  // spinning hide
  //self.props.loading(false)
  return response;
}, function (error) {
  return Promise.reject(error);
});

export async function login(data) {
  return await instance.post('/user/login?_format=json', data);
}

export async function fetchPigeons() {
  return await instance.post('/api/v1/pigeons', {});
}

export async function fetchProductDetails(data) {
  return await instance.post('/api/v1/pigeons-details', data);
}

export async function fetchCommentList(data) {
  return await instance.post('/api/v1/comment', data);
}

export async function commentcreate(data) {
  return await instance.post('/api/v1/comment/create', data);
}

export async function fetchBlogList(data) {
  return await instance.get('/api/v1/blog', data);
}

export async function userUpdate(data) {
  return await instance.post('/api/v1/user/update', data);
}

export async function flag(data) {
  return await instance.post('/api/v1/flag/create', data);
}

export async function fetchFlag(data){
  return await instance.post('/api/v1/flag', data);
}