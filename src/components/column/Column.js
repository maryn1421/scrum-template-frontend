import React from 'react';
import "./Column.css";
import Task from "../Task/Task";

const Column = (props) => {
    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drop(ev) {
       var data = ev.dataTransfer.getData("text");
       ev.preventDefault()
       if (data !== null) {
            ev.target.appendChild(document.getElementById(data));
       }
    }


    return <div id={props.title} className="board-column" onDrop={e => drop(e)}  onDragOver={e => allowDrop(e)}>
        <div className="board-column-title" >{props?.title}</div>
        <div className="board-column-content">
            <Task title={props.title + "card"} />
        </div>
    </div>
}

export default Column;