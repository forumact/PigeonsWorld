import axios from "axios";
import { querystring } from "../helper";

const axiosInstance = axios.create({
  baseURL: "http://pigeonsworld.local"
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function(config) {
    if (config.url.indexOf("/file/upload/") < 0) {
      config.headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-CSRF-Token": localStorage.getItem("csrf")
      };
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function(response) {
    console.log("Rest-API", response.data);
    return response;
  },
  function(error) {
    console.log("Rest-API-Error", error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export async function login(data) {
  return await axiosInstance.post("/api/v1/user/login?_format=json", data);
}

export async function fetchPigeons(data) {
  return await axiosInstance.post("/api/v1/pigeons", data);
}

export async function fetchUserPigeons(payload) {
  return await axiosInstance.post("/api/v1/pigeons", payload);
}

export async function fetchProductDetails(data) {
  return await axiosInstance.post("/api/v1/pigeons-details", data);
}

export async function fetchCommentList(data) {
  return await axiosInstance.post("/api/v1/comment", data);
}

export async function commentcreate(data) {
  return await axiosInstance.post("/api/v1/comment/create", data);
}

export async function fetchBlogList(data) {
  let params = querystring(data);
  return await axiosInstance.get(`/api/v1/blog?_format=json&${params}`, data);
}

export async function fetchBlogLatest(data) {
  return await axiosInstance.post("/api/v1/blog-latest", data);
}

export async function fetchBlogDetails(data) {
  return await axiosInstance.post("/api/v1/blog-details", data);
}

export async function userUpdate(data) {
  return await axiosInstance.post("/api/v1/user/update", data);
}

export async function flag(data) {
  return await axiosInstance.post("/api/v1/flag/create", data);
}

export async function fetchFlag(data) {
  return await axiosInstance.post("/api/v1/flag", data);
}

export async function userLogout(data) {
  return await axiosInstance.post("/api/v1/user-logout", {});
}

export async function productCreate(data) {
  return await axiosInstance.post("/api/v1/pigeons/create", data);
}

export async function productUpdate(data) {
  return await axiosInstance.post("/api/v1/pigeons/update", data);
}

export async function seach(data) {
  return await axiosInstance.get(`/api/v1/search/node/?q=${data}`);
}

export async function fileupload(data, fileApi) {
  let image_data = data.image_data;
  const options = {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `file; filename="${data.file_name}"`,
      "Access-Control-Allow-Origin": "*",
      "X-CSRF-Token": localStorage.getItem("csrf")
    }
  };
  return await axiosInstance.post(fileApi, image_data, options);
}

export async function getSellerInfo(data) {
  return await axiosInstance.post("/api/v1/seller-info", data);
}

export async function getProductFilter(data) {
  return await axiosInstance.post("/api/v1/product-filter", {});
}

export async function getUserBasicInfo(data) {
  return await axiosInstance.post("/api/v1/user-basic-info", data);
}

export async function userloginCheck(data) {
  return await axiosInstance.post("/api/v1/user-check-status", {});
}
