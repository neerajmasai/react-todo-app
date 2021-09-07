import { useState } from "react";
import Task from './Task'


function Todo() {
    const [text, setText] = useState("");
    const [tasks, setTask] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleClick = (e) => {
        setTask([...tasks, text]);
    }

    return (
    <div className="App">
        <h1 class="main-title">Todo:</h1>
        <p class="error-msg">A simple todo app and nothing more or less.</p>
        <div class="task-add-container">
            <div class="left">
                <input type="text" placeholder="Add a task!" onChange={handleChange}></input>
            </div>
            <div class="right">
                <button class="buttons" onClick={handleClick}>
                    <span class="material-icons">
                    playlist_add
                    </span>
                </button>
            </div>
        </div>
        <div className="task-list-container">
            <Task tasks={tasks}/>        
        </div>
    </div>
    );
}


export default Todo;
