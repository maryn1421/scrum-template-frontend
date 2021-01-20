import React from 'react';
import './Table.css'
import Column from "../column/Column";

const Table = () => {
    return <div className="table__mainContainer">
        <section id="board-${board.id}" className="board">
            <div className="board-header"><span id="board-title-${board.id}" className="board-title"
                                                >Sprint 1</span>
                <button className="board-add">Add Task</button>
                <button className="board-toggle"><i className="fas fa-chevron-down"></i></button>
                <button id="delete-btn-${board.id}" className="delete-btn"><i className="fas fa-trash-alt"></i></button>
            </div>
            <div className="board-columns">
                <Column title={"new"} /><Column title={"in progress"} /><Column title={"finished"} />
            </div>
        </section>
    </div>


}


export default Table;