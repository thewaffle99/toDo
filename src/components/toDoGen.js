import React, { useState } from "react";


const ToDoGen = (props) => {
    const {toDoList, setToDoList} = props
    
    const [toDo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
            setToDoList([...toDoList,{toDo: toDo, id: Math.floor(Math.random()*1000).toString(), markCompleted : false}])
            setTodo("");
    };

    return(
        <div>
        <h1>ToDo's</h1>
        <form onSubmit={handleSubmit}>
            <input
            rows="1"
            cols="10"
            placeholder="Add a ToDo here!"
            value={toDo}
            name="toDo"
            onChange={(e)=> setTodo(e.target.value)}/>
            <button type="submit">Add</button>
        </form>

        </div>
        
    );
}

export default ToDoGen;