import axios from 'axios'
const request = axios.create({
  baseURL: 'http://192.168.29.106:8080/', // API server url
  // baseURL: 'http://localhost:8081/', // API server url
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
})

export default request
