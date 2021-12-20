import React, {useState} from "react";
import '/Users/Rene/Desktop/4_Coding/MERN/REACT/todo_list/src/App.css'

const ToDoDisplay = (props) => {

    const {toDoList, setToDoList} = props;
    // const [complete, setComplete] = useState("false");

    const deletetoDoById = (id) => {
        setToDoList(toDoList.filter((toDo, index)=>toDo.id !== id))
    }

    const handleCompleted = (toDo) => {
        toDo.markCompleted = !toDo.markCompleted;
        setToDoList([...toDoList]);
    }

    const styleToDo = (markCompleted)=>{
        if(markCompleted === true){
            return "completed"
        }
        else{
            return "notCompleted"
        }
    }

    return(
        <div>
            {
                toDoList.map((toDo,index) => (
                    <div key={index} style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                        <p className={styleToDo(toDo.markCompleted)}>{toDo.toDo}</p>
                        <input type='checkbox' onChange={(e) =>handleCompleted(toDo)}/>
                        <button style={{margin: '3px'}} type="submit" onClick={()=>deletetoDoById(toDo.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )}

export default ToDoDisplay;