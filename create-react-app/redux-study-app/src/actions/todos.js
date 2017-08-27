import {ADD_TODO, SET_VISIBILITY, TOGGLE_TODO} from "./type"

export function addTodo(text) {
    return {type:ADD_TODO,text}
}

export function toggleTodo(index) {
    return {type:TOGGLE_TODO,index}
}

export function setVisibilityFilter(filter) {
    return {type:SET_VISIBILITY,filter}
}