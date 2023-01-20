import React, { useState, useEffect } from "react";
import './Task.css'
import tasksData from '../../taskData.js';
import closeIcon from '../images/close.png'
import editIcon from '../images/editIcon.png'
import tickIcon from '../images/tickIcon.png'




function Task(props) {

  // task data  
  const [taskData, setTaskData] = useState(tasksData)
  // get task status
  const [status, setStatus] = useState(props.sta)
  // get task input to change it
  const [input, setInput] = useState(props.name)
  // get task description to change it
  const [description, setDescription] = useState(props.description)
  // check if task should be displayed
  const [erase, setErase] = useState(props.erase)
  // check if status is selected to delete
  const [deleteOption, setDeleteOption] = useState(props.check)
  // check for modal
  const [modal, setModal] = useState(false);

// callback function to deliver ID info to heroes components
const moveInfo = () => {
    
    setDeleteOption(prevDeleteOption => !prevDeleteOption)
    props.getInfo(props.id, deleteOption)

}

// styles of deleted task
const deleteStyles = {
    display: erase ? "none" : "block"
}

// if task status is 3 do not show buttons
const buttonStyles = {
    display: status === 3 ? "none" : "block"
}

// change task status from new => pending, pending => done
const change = () => {

    if(status === 1) {
        
        setStatus(2)
        taskData[props.id].status = 2
        
    } else if(status === 2) {

        setStatus(3)
        taskData[props.id].status = 3
    }
}

    const styles = {
        display: status === 3 ? "none" : ""
    }

    // toggle modal
    const toggleModal = () => {
      setModal(!modal);
    };

// edit task
const edit = () => {
    taskData[props.id].todo = input
    taskData[props.id].desc = description

    setModal(!modal)
}
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    return(
    <div style={deleteStyles} className="task" onClick={props.update} >
         {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <div className="form-container-modal">
            <h1 className="modal-header">Edit your task</h1>
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
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                            
                            required
                        />
                            <button onClick={edit}  className="form-button">Edit Task</button></div>
            <button className="close-modal" onClick={toggleModal}>
              <img className="close-modal-icon" src={closeIcon} />
            </button>
          </div>
        </div>
      )}
        
        <div className="task-box" >
            <p className="task-name">{props.name}</p>
            <p className="task-desc">{props.description}</p>
            <p className="task-data">{props.date}</p>
            <div className="action-buttons" >
            <button className="action" style={buttonStyles} onClick={toggleModal}><img className="button-icon" src={editIcon}/></button>
            {status === 1 ? <button className="action" onClick={change}><img className="button-icon" src={tickIcon}/></button> : <button className="action" style={styles} onClick={change}><img className="button-icon" src={tickIcon}/></button>}
            <input className="action-check" type="checkbox" checked={deleteOption} onChange={moveInfo}/>
           </div>
           
            
        </div>
        
        <hr></hr>
    </div> )
}


export default Task