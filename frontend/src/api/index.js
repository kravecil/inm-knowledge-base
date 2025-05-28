import axios from 'axios'

const baseURL = 'http://83.174.202.218:8000/api'

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