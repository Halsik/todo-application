import React, {useState} from "react";
import Navbar from "../NavBar/Navbar";
import Task from '../Task/Task'
import './HeroDone.css'
import tasksData from '../../taskData.js'


function HeroDone(props) {

    // Task data
    const [taskData, setTaskData] = useState(tasksData)

    // Status of task 3 === done
    const [status, setStatus] = useState(3)

    // array of selected tasks
    const [arrayH, setArrayH] = useState([])

    // check for modal
    const [modal, setModal] = useState(false);

    // toggle modal
    const toggleModal = () => {
      setModal(!modal);
    };

    // get id from component
    const callback = (data, checkDelete) => {

        if(checkDelete === false) {
        
            setArrayH(prevArrayH => [...prevArrayH, taskData[data]])
    
        } else if (checkDelete === true) {

            for(let i = 0; i < arrayH.length; i++) {
             const filteredArray = arrayH.filter(e => e !== taskData[data])
             setArrayH(filteredArray)
            }
        }}

        // delete selected tasks
     const deleteAll = () => {
        
        for (let i = 0; i < arrayH.length; i++) {
            arrayH[i].check = true
          }
        setArrayH([])
        toggleModal()
     }

     // map taskData and return Task component
        const newArray = taskData.map(item => {
            if(item.status === 3 && item.check === false) {
            return <Task 
                key={item.id}  
                id={item.id}
                name={item.todo}
                date={item.date}
                description={item.desc}
                sta={status}
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
                    <h1 className="header">Done Tasks</h1>
                   
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

export default HeroDone