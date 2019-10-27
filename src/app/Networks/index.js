import axios from "axios";
import { querystring } from "../helper";

const axiosInstance = axios.create({
  baseURL: 'http://pigeonsworld.local',
});


axiosInstance.interceptors.request.use(function (config) {
  config.headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSRF-Token': localStorage.getItem('csrf'),
  }
  if (config.url === '/file/upload/node/pegion/field_pegion?_format=json') {
    let filename = `pigeon_${Date.now()}.png`;
    config.headers = {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `file; filename="${filename}"`,
      'Access-Control-Allow-Origin': '*',
      'X-CSRF-Token': localStorage.getItem('csrf'),
    }
  }
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
  return await axiosInstance.post('/api/v1/user/login?_format=json', data);
}

export async function fetchPigeons(data) {
  return await axiosInstance.post('/api/v1/pigeons', data);
}

export async function fetchUserPigeons(payload) {
  return await axiosInstance.post('/api/v1/pigeons', payload);
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
  let params = querystring(data);
  return await axiosInstance.get(`/api/v1/blog?_format=json&${params}`, data);
}

export async function fetchBlogLatest(data) {
  return await axiosInstance.post('/api/v1/blog-latest', data);
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

export async function productCreate(data) {
  return await axiosInstance.post('/api/v1/pigeons/create', data);
}

export async function seach(data) {
  return await axiosInstance.get(`/entity/search_page/${data}`);
}

export async function fileupload(data) {
  return await axiosInstance.post('/file/upload/node/pegion/field_pegion?_format=json', data);
}

export async function getSellerInfo(data) {
  return await axiosInstance.post('/api/v1/seller-info', data);
}

export async function getProductFilter(data) {
  return await axiosInstance.post('/api/v1/product-filter', {});
}

export async function getUserBasicInfo(data) {
  return await axiosInstance.post('/api/v1/user-basic-info', data);
}