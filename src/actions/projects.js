
import ApiClient from '../api/client'

export const FETCHED_ALL_PROJECTS = 'FETCHED_ALL_PROJECTS'
export const FETCHED_PROJECT = 'FETCHED_PROJECT'
export const CREATED_PROJECT = 'CREATED_PROJECT'
export const DELETED_PROJECT = 'DELETED_PROJECT'

const api = new ApiClient()

export const fetchAllProjects = () => {
  return (dispatch) => {
    api.get('/projects')
      .then((res) => {
        dispatch({
          type: FETCHED_ALL_PROJECTS,
          payload: res.data
        })
      })
      .catch((error) => console.log(error.message))
  }
}

export const fetchProject = (id) => {
  return dispatch => {
    api.get(`/projects/${id}`)
    .then((res) => {
        dispatch({
          type: FETCHED_PROJECT,
          payload: res.data
        })
      })
      .catch((error) => console.log(error.message))
  }
}

export const createProject = (data) => {
  return (dispatch) => {
    api.post('/projects', data)
      .then((res) => {
        dispatch({
          type: CREATED_PROJECT,
          payload: res.data
        })
      })
      .catch((error) => console.log(error))
  }
}

export const deleteProject = (id) => {
  return (dispatch) => {
    api.delete(`/projects/${id}`)
      .then((res) => {
        dispatch({
          type: DELETED_PROJECT,
          payload: res.data
        })
      })
      .catch((error) => console.log(error.message))
  }
}
