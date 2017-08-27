import {SET_VISIBILITY, VisibilityFilters} from "../actions/type"

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type){
        case SET_VISIBILITY:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter