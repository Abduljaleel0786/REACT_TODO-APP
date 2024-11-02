import { useState } from 'react';
import './App.css';



function App() {
  const [Input, setInput] = useState("")
  const [todoItem, setTodoItem] = useState([]);

  function handleInput(event) {
    console.log(event.target.value);
    (setInput(event.target.value));

  }


  const addTodo = (e) => {
    e.preventDefault()
    console.log("click");
    setTodoItem([Input, ...todoItem ])
    setInput("")

  }

  return (
    <>
      <div className="App">
        <h1>TODO-APP</h1>
        <form  >
          <input value={Input} onChange={handleInput} type=" text" placeholder="ADD A NEW TASK " ></input>
          <button onClick={addTodo} type='submit' >ADD TASK</button>
        </form>

      </div>

      <ul className='App'>
      {todoItem.map((item ,index)=>{
        return<li className='listItem' key={index}>{item}</li>})}
       
      </ul>
    </>
  );
}

export default App;
