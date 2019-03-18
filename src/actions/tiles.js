
import ApiClient from '../api/client'

export const ADDED_TILE = 'ADDED_TILE'
export const UPDATED_TILE = 'UPDATED_TILE'
export const DELETED_TILE = 'DELETED_TILE'

const api = new ApiClient()

export const addTile = (id, newTile) => {
  return (dispatch) => {
    api.post(`/projects/${id}/tiles`, newTile)
      .then((res) => {
        dispatch({
          type: ADDED_TILE,
          payload: res.data
        })
      })
      .catch((error) => console.log(error))
  }
}

export const updateTile = (id, tileId, updates) => {
  return (dispatch) => {
    api.patch(`/projects/${id}/tiles/${tileId}`, updates)
      .then((res) => {
        dispatch({
          type: UPDATED_TILE,
          payload: res.data
        })
      })
      .catch((error) => console.log(error))
  }
}

export const deleteTile = (id, tileId) => {
  return dispatch => {
    api.delete(`/projects/${id}/tiles/${tileId}`)
      .then((res) => {
        dispatch({
          type: DELETED_TILE,
          payload: res.data
        })
      })
      .catch((error) => console.log(error.message))
  }
}
