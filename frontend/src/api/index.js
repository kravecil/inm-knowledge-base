import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const username = 'КравецИВ'
const password = 'КравецИВ_2105'

function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

const encodedCredentials = utf8_to_b64(`${username}:${password}`);

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Basic ${encodedCredentials}`
  }
})

export default api