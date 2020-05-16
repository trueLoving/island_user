import axios from 'axios'
import Message from "@/components/MessageBox";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => /* todo */ config,
  error => Promise.reject(error)
)

// response interceptor
service.interceptors.response.use(
  response => response,
  error => {
    // Message.show({type:'success',text:'ok'});
    Promise.reject(error)
  }
)

export default service
