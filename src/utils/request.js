import axios from 'axios'
import Message from "@/components/MessageBox";
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if(store.getters.token){
      config.auth = {
        username: getToken()
      }
    }
    return config
  },
  error => Promise.reject(error)
)

// response interceptor
service.interceptors.response.use(
  response => response.data,
  (error) => {
    const errorMsg = error.response.data.message.toString();
    Message.show({ type: 'error', text: errorMsg || error.toString() });
    return Promise.reject(error)
  }
)

export default service
