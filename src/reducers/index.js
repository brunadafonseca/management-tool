import { FETCHED_PROJECTS, FETCHED_PROJECT, CREATED_PROJECT } from "../actions/project";

const initialState = {
  projects: [],
  currentProject: {},
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCHED_PROJECTS:
      return {
        ...state,
        projects: [...state.projects, ...payload],
        }

    case FETCHED_PROJECT:
      return {
        ...state,
        currentProject: payload,
        }

    case CREATED_PROJECT:
    console.log(payload)
        return {
          ...state,
          projects: [...state.projects, payload],
        }

    default:
      return state
  }
}
