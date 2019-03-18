import { FETCHED_ALL_PROJECTS, FETCHED_PROJECT, CREATED_PROJECT } from "../actions/projects";
import { ADDED_TILE, UPDATED_TILE, DELETED_TILE } from '../actions/tiles'

const initialState = {
  projects: [],
  currentProject: {},
  projectPhases: [
    { title: 'Flowcharts', id: 1 },
    { title: 'Wireframes', id: 2 },
    { title: 'Prototype', id: 3 },
    { title: 'Development', id: 4 },
    { title: 'Test', id: 5 },
    { title: 'Launch', id: 6 },
  ]
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCHED_ALL_PROJECTS:
      return {
        ...state,
        projects: [...state.projects, ...payload],
        currentProject: payload[0] || [],
      }

    case FETCHED_PROJECT:
      return {
        ...state,
        currentProject: payload,
      }

    case CREATED_PROJECT:
      return {
        ...state,
        projects: [payload, ...state.projects],
        currentProject: payload,
      }

    case ADDED_TILE:
      return {
        ...state,
        projects: [...state.projects, payload],
        currentProject: payload,
      }

    case UPDATED_TILE:
      return {
        ...state,
        projects: [...state.projects, payload],
        currentProject: payload,
      }

    case DELETED_TILE:
      return {
        ...state,
        projects: [...state.projects, payload],
        currentProject: payload,
      }

    default:
      return state
  }
}
