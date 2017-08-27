import React,{PropTypes} from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
    static propTypes={
        onTodoClick:PropTypes.func.isRequired,
        todos:PropTypes.arrayOf(PropTypes.shape({
            text:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        }).isRequired).isRequired
    }
    render(){
        return (
            <ul>
                {this.props.todos.map((todo,index)=>{
                    return <Todo
                        {...todo}
                        key={index}
                        onClick={()=>this.props.onTodoClick(index)}/>
                })}
            </ul>
        )
    }
}

export default TodoList