import React from 'react';
import './App.css';
import {TaskList} from "./features/task/TaskList";
import {TaskCreate} from "./features/task/TaskCreate";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4">
                        <TaskCreate/>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-8">
                        <TaskList/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
