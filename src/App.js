import { useState } from 'react';
import './App.css';
import Todo from './Todo';
//import db from '../src/firebasec'

function App() {
  var list = ['one','two']
  const [todo,setTodos]=useState(list);
  const [input,setInput]=useState('');
  const addTotodo=()=>{
      setTodos([...todo,input]);
     // db.collections('todos').add({'todo':input});
      setInput('');
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Click on Below link to know about
        </p>
        <a
          href="https://about.me/deekshithetyala"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazing Developer
        </a>
        <input value={input} onChange={e=>setInput(e.target.value)}/>
        <button onClick={addTotodo}>AddTodo</button>
        <Todo todo={todo}/>
      </header>
    </div>
  );
}

export default App;
