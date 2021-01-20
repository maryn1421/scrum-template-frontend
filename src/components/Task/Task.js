import React from 'react';

const Task = (props) => {


    function drag(ev) {
        console.log("dragging")
        console.log(ev.currentTarget.id);
       ev.dataTransfer.setData("text", ev.currentTarget.id);
    }

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        let sourceIdx = parseInt(result.source.index)
        let destIdx = parseInt(result.destination.index)
        console.log(sourceIdx);
        console.log(destIdx);
    }


    return <div id={props.title} className="card" onDragStart={e => drag(e)}  draggable={"true"}>
        <div className="card-remove"><i className="fas fa-trash-alt"></i></div>
        <div className="card-title">Title</div>
    </div>
}

export default Task;