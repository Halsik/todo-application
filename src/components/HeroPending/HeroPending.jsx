import React, {useState, useEffect} from "react";
import Navbar from "../NavBar/Navbar";
import './HeroPending.css'
import tasksData from '../../taskData.js'
import Task from '../Task/Task'


function HeroPending(props) {

    // tasks data
    const [taskData, setTaskData] = useState(tasksData)
    // status of task 2 === pending
    const [status, setStatus] = useState(2)
    const [clicked, setClicked] = useState(false)
    // array of selected task
    const [arrayH, setArrayH] = useState([])
    // check for modal
    const [modal, setModal] = useState(false);

    // turn on/off modal
    const toggleModal = () => {
      setModal(!modal);
    };

    const update = () => {
        setClicked(prevClicked => !prevClicked)
    }

    // get id from task
    const callback = (data, checkDelete) => {
        
    // check is task selected and if so then add to selected array
        if(checkDelete === false) {
        
            setArrayH(prevArrayH => [...prevArrayH, taskData[data]])
    
        } else if (checkDelete === true) {
            // if task has been unselected remove from the array and return new array
            for(let i = 0; i < arrayH.length; i++) {
             const filteredArray = arrayH.filter(e => e !== taskData[data])
             setArrayH(filteredArray)
            }
        }}

    // delete all selected task
     const deleteAll = () => {

        for (let i = 0; i < arrayH.length; i++) {
            arrayH[i].check = true
          }

        setArrayH([])
        toggleModal()
     }

     // map taskData and return Task component
        const newArray = taskData.map(item => {
            if(item.status === 2 && item.check === false) {
            return <Task 
                    key={item.id}  
                    id={item.id}
                    name={item.todo}
                    date={item.date}
                    description={item.desc}
                    sta={status}
                    update={update}
                    erase={item.delete}
                    check={false}  
                    getInfo={callback}
                    />
        }
        })



if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
    return(
        <div className="hero-container">
            <Navbar 
            changeTheme={props.handleClick}
            />
            <div className="hero-content-container">
            {modal && (
        <div className="modal-delete">
          <div onClick={toggleModal} className="overlay-delete"></div>
          <div className="modal-content-delete">
          <div className="form-container-modal-delete">
            <h1 className="modal-header-delete">Are you sure you want to delete task?</h1>
                 </div>
                 <div className="button-box-delete">
                    <button className="button-delete" onClick={deleteAll}>Yes</button>
                    <button className="button-delete" onClick={toggleModal}>No</button>
                </div>
          </div>
        </div>
      )}
            <div className="hero-header">
                    <h1 className="header">Pending Tasks</h1>
                </div>
                <div className="hero-content-tasks">
                <div className="delete-button-container">
                    <button className="delete-all-button" onClick={toggleModal}>Delete</button>
                </div>
                    <div className="task-container">
                    <div className="task-container-header">
                        <p className="task-title">TITLE</p>
                        <p className="task-description">DESCRIPTION</p>
                        <p className="task-date">DATE</p>
                        <p className="task-action">ACTION</p>
                     </div>
                        {newArray}
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default HeroPending