import React from 'react';
import Table from "../../components/Table/Table";
import Retrospective from "../../components/Retrospective/Retrospective";
import {useState, useEffect} from "react";
import axios from "axios";

const TablePage = () => {
    const [tables, setTables] = useState([]);
    const url = "http://127.0.0.1:8000"
    useEffect(() => {
        loadTables()
    })

    const loadTables = () => {
        axios.get(url + "/tables/1").then(res => {
            setTables(res.data)
        })
    }

    async function  saveNewSprint () {
        const name = prompt("add a name to your sprint");
        let data = {
            "name" : name
        }

        const res = await axios.post(url + "/new-table", data, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
        return res
    }

    const addNewSprint = () => {
        let res = saveNewSprint().then();
        if (res) {
            loadTables();
        }
    }

    return <div className="tablePage__main">
        <h1>TEST</h1>
        <h4>Sprints:</h4>
        {tables.map(table => {
          return   <Table  name={table?.name} id={table?.id}/>
        })
        }
        <h4><a onClick={addNewSprint}>Add a new sprint</a></h4>
        <Retrospective />
    </div>;
}

export default TablePage;