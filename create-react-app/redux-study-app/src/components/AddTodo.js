import React,{PropTypes} from 'react'
import {findDOMNode} from 'react-dom'

class AddTodo extends React.Component{
    static propTypes={
        onAddClick:PropTypes.func.isRequired
    }
    constructor(props){
        super(props)
        this.handleChick=this.handleChick.bind(this)
    }
    handleChick(e){
        const node=findDOMNode(this.refs.input)
        const text=node.value.trim()
        this.props.onAddClick(text)
        node.value=''
    }
    render(){
        return (
            <div>
                <input type="text" ref='input'/>
                <button onClick={this.handleChick}>
                    Add Todo
                </button>
            </div>
        )
    }
}

export default AddTodo