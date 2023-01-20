import React, {useState} from "react";
import Navbar from "../NavBar/Navbar";
import './HeroAdd.css'
import tasksData from '../../taskData.js'

function HeroAdd() {

    const [input, setInput] = useState('')
    const [description, setDescription] = useState('')
    const [taskData, setTaskData] = useState(tasksData)
 
    
    const addTodo = (todo, desc) => {

        if(todo === '' || desc === '') {
            alert("Fill the form")
        }
        else {

        const date = new Date()

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        taskData.push(
            {
            id: taskData.length,
            todo:todo,
            date: `${day}-${month}-${year}`,
            createdAt: date,
            desc: desc,
            status: 1,
            delete: false,
            check: false
        })
       
        setInput('')
        setDescription('')

    }}
    
    return(
        <div className="hero-container">
            <Navbar />
            <div className="hero-content-container">
                <div className="hero-header-add">
                    <h1 className="header">Add Tasks</h1>
                </div>
                <div className="hero-content-tasks">
                    <div className="form-container">
                        <input id="form-input"
                            type="text"
                            placeholder="Title"
                            value={input} 
                            onChange={(e) => setInput(e.target.value)}
                            required
                        />
                        <textarea 
                            type="text"
                            value={description} 
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                            <button className="form-button" onClick={() => addTodo(input, description)}>Add Task</button>

                            <h1 className="feedback">Task Added!</h1>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default HeroAdd