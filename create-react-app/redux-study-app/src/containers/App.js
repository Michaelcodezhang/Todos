import React,{PropTypes} from 'react'
import {connect} from 'react-redux'
import {addTodo,toggleTodo,setVisibilityFilter} from "../actions/todos"
import {VisibilityFilters} from "../actions/type"
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends React.Component{
    static propTypes={
        visibilityFilter:PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_COMPLETED',
            'SHOW_ACTIVE'
        ]).isRequired,
        visibleTodos:PropTypes.arrayOf(PropTypes.shape({
            text:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        }).isRequired).isRequired
    }
    render(){
        const {dispatch,visibleTodos,visibilityFilter}=this.props
        return (
            <div>
                <AddTodo
                    onAddClick={text=>{
                        dispatch(addTodo(text))
                    }}/>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index=>
                        dispatch(toggleTodo(index))
                    }/>
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter=>{
                        dispatch(setVisibilityFilter(nextFilter))
                    }}/>
            </div>
        )
    }
}

function selectTodos(todos,filter) {
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo=>todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo=>!todo.completed)
    }
}

function select(state) {
    return {
        visibleTodos:selectTodos(state.todos,state.visibilityFilter),
        visibilityFilter:state.visibilityFilter
    }
}

export default connect(select)(App)