import axios from 'axios'

export default class ApiClient {
  constructor(host) {
    this.host = 'http://localhost:8000'
  }

  get(path) {
    return axios
      .get(this.createUrl(path))
  }

  post(path, data) {
    return axios
      .post(this.createUrl(path), data)
  }

  put(path, data) {
    return axios
      .put(this.createUrl(path), data)
  }

  patch(path, data) {
    return axios
      .patch(this.createUrl(path), data)
  }

  delete(path, data) {
    return axios
      .delete(this.createUrl(path), data)
  }

  createUrl(path) {
    return [this.host, path].join('')
  }
}
