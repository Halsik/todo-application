import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import newTaskImage from '../images/newTask.png'
import pendingTaskImage from '../images/pendingTask.png'
import doneTaskImage from '../images/doneTask.png'
import addTaskImage from '../images/addTask.png'


function Navbar() {
    
    return(
        <div className="navbar-container">
            <h1 className="navbar-header">Todo App</h1>
         <div className="navbar-task-container">   
            <div className="navbar-task-icon">
                <ul>
                <NavLink activeClassName="selected" exact to='/add'>
                    <li className="navbar-item">
                        <img className="navbar-icon new" src={addTaskImage} />
                        <a>Add Task</a>
                    </li>
                    </NavLink>
                    <NavLink activeClassName="selected" exact to='/'>
                    <li className="navbar-item">
                        <img className="navbar-icon new" src={newTaskImage} />
                        <a>New Tasks</a>
                    </li>
                    </NavLink>
                    <NavLink activeClassName="selected" exact to='/pending'>
                    <li  className="navbar-item">
                        <img className="navbar-icon" src={pendingTaskImage} />
                        <a>Pending Tasks</a>
                    </li>
                    </NavLink>
                    <NavLink activeClassName="selected" exact to='/done'>
                    <li className="navbar-item">
                        <img className="navbar-icon" src={doneTaskImage} />
                        <a>Done Tasks</a>
                    </li>
                    </NavLink>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar