import React from 'react'
import '../src/Todo.css'
function Todo(props){
const todo = props.todo;
    return (<div>
        <ul classname="todolist">
         {todo.map(x=>(<li>{x}</li>))}
         </ul>
    </div>);
}

export default Todo;