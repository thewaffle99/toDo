import './App.css';
import React, {useState} from 'react';
import ToDoGen from './components/toDoGen';
import ToDoDisplay from './components/toDoDisplay';


// i need an array to hold the todos
// I need a component to be a form to add todos to an array
// I need a component to display the todos
// I need a part of the display compnent to have a delete button with filter method
// I will need conditional styling to be used in the display page to strike through with the check box


function App() {

  const [toDoList, setToDoList] = useState([]);


  return (
    <div className="App">
      <ToDoGen
      toDoList = {toDoList}
      setToDoList = {setToDoList}
      />

      <ToDoDisplay
      toDoList = {toDoList}
      setToDoList = {setToDoList}
      />
    </div>
  );
}

export default App;
